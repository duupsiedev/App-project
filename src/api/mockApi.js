import { mockEmails } from "../data/mockEmails.js";
import { mockEmployees } from "../data/mockEmployees.js";
import { mockRules } from "../data/mockRules.js";

const STORAGE_KEY = "courio.mockState.v1";
const CHAT_STORAGE_KEY = "courio.assistantHistory.v1";
const STATE_SCHEMA_VERSION = 2;

const WORKFLOW_STATE = Object.freeze({
  NEEDS_REVIEW: "needs_review",
  READY_FOR_DRAFT: "ready_for_draft",
  DRAFT_GENERATED: "draft_generated",
  DRAFT_REVIEWED: "draft_reviewed",
  DRAFT_SAVED: "draft_saved",
  COMPLETED: "completed"
});

const WORKFLOW_STATES = new Set(Object.values(WORKFLOW_STATE));

const defaultState = {
  schemaVersion: STATE_SCHEMA_VERSION,
  emails: mockEmails.map(createDefaultEmail),
  employees: structuredClone(mockEmployees),
  rules: structuredClone(mockRules),
  drafts: [],
  settings: {
    productName: "Courio",
    mode: "Simple",
    companyName: "Demo PME Inc.",
    defaultMode: "Observation only",
    escalationRecipient: "owner@company.ca",
    confidenceThreshold: "80",
    observationDays: "7",
    allowLowRiskBulkApproval: "Yes",
    approvalRequired: true,
    autoSend: false
  },
  completedActions: [],
  deletedEmployeeIds: [],
  deletedRuleIds: []
};

const state = loadState();
let assistantHistory = loadAssistantHistory();
const delay = (ms = 550) => new Promise((resolve) => setTimeout(resolve, ms));

function clone(value) {
  return structuredClone(value);
}

function createDefaultEmail(email) {
  const {
    status: _status,
    workflowStatus: _workflowStatus,
    reviewed: _reviewed,
    ...emailData
  } = clone(email);

  return {
    ...emailData,
    workflowState: WORKFLOW_STATE.NEEDS_REVIEW
  };
}

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultState);

    const parsed = JSON.parse(saved);
    const migrated = migrateState(parsed);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  } catch {
    return clone(defaultState);
  }
}

function migrateState(parsed) {
  const deletedEmployeeIds = parsed.deletedEmployeeIds || [];
  const deletedRuleIds = parsed.deletedRuleIds || [];
  const mergedEmails = mergeById(defaultState.emails, parsed.emails);
  const savedDrafts = Array.isArray(parsed.drafts) ? parsed.drafts : [];
  const canonicalDrafts = selectCanonicalDrafts(savedDrafts);
  const emails = mergedEmails.map((email) => {
    const legacyDraft = canonicalDrafts.find((draft) => (draft.emailId || draft.id) === email.id);
    const workflowState = inferWorkflowState(email, legacyDraft, parsed.schemaVersion);
    const {
      status: _status,
      workflowStatus: _workflowStatus,
      reviewed: _reviewed,
      ...emailData
    } = email;

    return {
      ...emailData,
      workflowState
    };
  });
  const emailById = new Map(emails.map((email) => [email.id, email]));
  const drafts = canonicalDrafts
    .filter((draft) => shouldPreserveDraft(draft, emailById.get(draft.emailId || draft.id)))
    .map(normalizeDraft);

  return {
    ...clone(defaultState),
    ...parsed,
    schemaVersion: STATE_SCHEMA_VERSION,
    emails,
    employees: mergeById(
      defaultState.employees.filter((employee) => !deletedEmployeeIds.includes(employee.id)),
      (parsed.employees || []).filter((employee) => !deletedEmployeeIds.includes(employee.id))
    ),
    rules: mergeById(
      defaultState.rules.filter((rule) => !deletedRuleIds.includes(rule.id)),
      (parsed.rules || []).filter((rule) => !deletedRuleIds.includes(rule.id))
    ),
    drafts,
    settings: {
      ...defaultState.settings,
      ...(parsed.settings || {})
    },
    completedActions: Array.isArray(parsed.completedActions) ? parsed.completedActions : [],
    deletedEmployeeIds,
    deletedRuleIds
  };
}

function inferWorkflowState(email, draft, schemaVersion) {
  if (schemaVersion >= STATE_SCHEMA_VERSION && WORKFLOW_STATES.has(email.workflowState)) {
    return email.workflowState;
  }

  if (
    email.status === "Done"
    || email.workflowStatus === "Completed"
    || draft?.status === "Ready for human send"
    || draft?.status === "Approved"
  ) {
    return WORKFLOW_STATE.COMPLETED;
  }
  if (draft?.status === "Saved") return WORKFLOW_STATE.DRAFT_SAVED;
  if (draft?.reviewed) return WORKFLOW_STATE.DRAFT_REVIEWED;
  if (draft?.generated || draft?.status === "Generated") return WORKFLOW_STATE.DRAFT_GENERATED;
  if (email.reviewed || email.reviewedAt) return WORKFLOW_STATE.READY_FOR_DRAFT;
  return WORKFLOW_STATE.NEEDS_REVIEW;
}

function selectCanonicalDrafts(drafts) {
  const draftByEmailId = new Map();

  for (const draft of drafts) {
    const emailId = draft?.emailId || draft?.id;
    if (!emailId) continue;
    const current = draftByEmailId.get(emailId);
    if (!current || legacyDraftRank(draft) > legacyDraftRank(current)) {
      draftByEmailId.set(emailId, draft);
    }
  }

  return [...draftByEmailId.values()];
}

function legacyDraftRank(draft) {
  const statusRanks = {
    "Needs approval": 0,
    Generated: 1,
    Saved: 3,
    "Ready for human send": 4,
    Approved: 4
  };
  return (statusRanks[draft.status] || 0) + (draft.generated ? 1 : 0) + (draft.reviewed ? 1 : 0);
}

function shouldPreserveDraft(draft, email) {
  if (!draft || !email) return false;
  return Boolean(
    draft.generated
    || draft.reviewed
    || ["Generated", "Saved", "Ready for human send", "Approved"].includes(draft.status)
    || [
      WORKFLOW_STATE.DRAFT_GENERATED,
      WORKFLOW_STATE.DRAFT_REVIEWED,
      WORKFLOW_STATE.DRAFT_SAVED,
      WORKFLOW_STATE.COMPLETED
    ].includes(email.workflowState)
  );
}

function normalizeDraft(draft) {
  const {
    generated: _generated,
    reviewed: _reviewed,
    status: _status,
    ...draftData
  } = clone(draft);

  return {
    ...draftData,
    emailId: draft.emailId || draft.id
  };
}

function mergeById(defaultItems, savedItems = []) {
  const safeSavedItems = Array.isArray(savedItems) ? savedItems : [];
  const mergedDefaults = defaultItems.map((defaultItem) => {
    const savedItem = safeSavedItems.find((item) => item.id === defaultItem.id);
    return savedItem ? { ...defaultItem, ...savedItem } : clone(defaultItem);
  });
  const savedOnlyItems = safeSavedItems.filter((savedItem) => !defaultItems.some((defaultItem) => defaultItem.id === savedItem.id));
  return [...mergedDefaults, ...savedOnlyItems.map(clone)];
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/*
 * Existing v1 state used draft flags and display labels as workflow state.
 * loadState migrates those records once and keeps the original storage key.
 */

function loadAssistantHistory() {
  try {
    const saved = window.localStorage.getItem(CHAT_STORAGE_KEY);
    if (!saved) {
      return [
        {
          id: "assistant-welcome",
          role: "assistant",
          text: "Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."
        }
      ];
    }
    return JSON.parse(saved);
  } catch {
    return [
      {
        id: "assistant-welcome",
        role: "assistant",
        text: "Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."
      }
    ];
  }
}

function persistAssistantHistory() {
  window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(assistantHistory));
}

function lowRiskBulkApprovalEnabled() {
  return state.settings.allowLowRiskBulkApproval !== "No";
}

function actionRequiresDraft() {
  return true;
}

function emailIsComplete(email) {
  return email.workflowState === WORKFLOW_STATE.COMPLETED;
}

function draftReadyForApproval(draft) {
  const email = state.emails.find((item) => item.id === (draft.emailId || draft.id));
  return email?.workflowState === WORKFLOW_STATE.DRAFT_SAVED;
}

function workflowLabel(workflowState) {
  const labels = {
    [WORKFLOW_STATE.NEEDS_REVIEW]: "Review required",
    [WORKFLOW_STATE.READY_FOR_DRAFT]: "Draft needed",
    [WORKFLOW_STATE.DRAFT_GENERATED]: "Draft generated",
    [WORKFLOW_STATE.DRAFT_REVIEWED]: "Draft in review",
    [WORKFLOW_STATE.DRAFT_SAVED]: "Draft saved",
    [WORKFLOW_STATE.COMPLETED]: "Completed"
  };
  return labels[workflowState] || "Review required";
}

function draftStatusLabel(workflowState) {
  const labels = {
    [WORKFLOW_STATE.DRAFT_GENERATED]: "Generated",
    [WORKFLOW_STATE.DRAFT_REVIEWED]: "In review",
    [WORKFLOW_STATE.DRAFT_SAVED]: "Saved",
    [WORKFLOW_STATE.COMPLETED]: "Ready for human send"
  };
  return labels[workflowState] || "No draft";
}

function recordActivity(type, details = {}) {
  state.completedActions.unshift({
    id: `action-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    completedAt: new Date().toISOString(),
    ...details
  });
  state.completedActions = state.completedActions.slice(0, 50);
}

function completeEmailFromApprovedDraft(email, draft) {
  email.workflowState = WORKFLOW_STATE.COMPLETED;
  draft.approvedAt = new Date().toISOString();
  draft.updatedAt = draft.approvedAt;
  recordActivity("draft-approved", {
    emailId: email.id,
    draftId: draft.id,
    label: `Draft approved and workflow completed: ${email.subject}`
  });
}

function buildDraftView(draft) {
  const email = state.emails.find((item) => item.id === (draft.emailId || draft.id));
  const sourceEmailStatus = emailIsComplete(email || {}) ? "Done" : "Open";
  const isReady = emailIsComplete(email || {});
  const canApprove = email?.workflowState === WORKFLOW_STATE.DRAFT_SAVED;
  const statusLabel = draftStatusLabel(email?.workflowState);

  return {
    ...draft,
    sourceEmailStatus,
    sourceWorkflowStatus: workflowLabel(email?.workflowState),
    approvalState: isReady
      ? "ready_for_human_send"
      : email?.workflowState === WORKFLOW_STATE.DRAFT_SAVED
        ? "saved"
        : email?.workflowState === WORKFLOW_STATE.DRAFT_GENERATED
          ? "generated"
          : "needs_review",
    status: statusLabel,
    statusLabel,
    isReadyForHumanSend: isReady,
    canApprove,
    canSelectForBulkApproval: canApprove,
    approvalBlocker: canApprove ? "" : isReady ? "Source email is completed." : "Review and save this draft before approving."
  };
}

function buildEmailView(email) {
  const draft = findDraftByEmailId(email.id);
  const requiresDraft = actionRequiresDraft(email);
  const draftStarted = Boolean(draft);
  const draftReady = emailIsComplete(email);
  const isDone = draftReady;
  const isReviewed = email.workflowState !== WORKFLOW_STATE.NEEDS_REVIEW;

  return {
    ...email,
    reviewed: isReviewed,
    status: isDone ? "Done" : "Open",
    workflowStatus: workflowLabel(email.workflowState),
    requiresDraft,
    draftId: draftStarted ? draft?.id || null : null,
    draftStatus: draftStarted ? draftStatusLabel(email.workflowState) : null,
    draftStatusLabel: draftStarted ? buildDraftView(draft).statusLabel : "No draft",
    draftReadyForHumanSend: draftReady,
    workflowLabel: workflowLabel(email.workflowState),
    canComplete: false,
    completeActionLabel: "Completed",
    draftActionLabel: isDone ? "View approved draft" : draftStarted ? "Edit draft" : "Generate draft",
    canGenerateDraft: email.workflowState === WORKFLOW_STATE.READY_FOR_DRAFT && !draftStarted,
    canOpenDraft: draftStarted,
    completionBlocker: !isReviewed
      ? "Review this email before generating a draft."
      : isDone
        ? "This workflow is complete."
        : draftStarted
          ? "Open the existing draft to continue this workflow."
          : ""
  };
}

function getCompletionCheck(email) {
  const emailView = buildEmailView(email);
  if (!emailView.draftId) {
    return {
      allowed: false,
      type: "generate-draft",
      emailId: email.id,
      title: "Draft needed",
      message: "This workflow still needs a draft before it can be completed.",
      primaryLabel: "Generate draft"
    };
  }

  return {
    allowed: false,
    type: "review-draft",
    emailId: email.id,
    draftId: emailView.draftId,
    title: "Draft approval needed",
    message: emailView.draftReadyForHumanSend
      ? "This workflow is already complete."
      : "This workflow needs a reviewed, saved, and approved draft before it can be completed.",
    primaryLabel: "Review draft"
  };
}

function findEmail(id) {
  const email = state.emails.find((item) => item.id === id);
  if (!email) throw new Error("Email not found.");
  return email;
}

function findDraft(id) {
  const draft = state.drafts.find((item) => item.id === id);
  if (!draft) throw new Error("Draft not found.");
  return draft;
}

function findDraftByEmailId(emailId) {
  return state.drafts.find((item) => (item.emailId || item.id) === emailId);
}

function findEmployee(id) {
  const employee = state.employees.find((item) => item.id === id);
  if (!employee) throw new Error("Employee not found.");
  return employee;
}

function normalizeEmployeeInput(employee, existingId = null) {
  const normalized = {
    name: employee.name?.trim() || "",
    email: employee.email?.trim().toLowerCase() || "",
    title: employee.title?.trim() || "",
    department: employee.department?.trim() || ""
  };

  if (!normalized.name) throw new Error("Employee name is required.");
  if (!normalized.email) throw new Error("Employee email is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    throw new Error("Enter a valid employee email address.");
  }
  if (!normalized.title) throw new Error("Employee title is required.");
  if (!normalized.department) throw new Error("Employee department is required.");

  const duplicate = state.employees.find((item) => (
    item.id !== existingId
    && item.email?.trim().toLowerCase() === normalized.email
  ));
  if (duplicate) {
    throw new Error("An employee with this email already exists.");
  }

  return normalized;
}

function buildDigest() {
  const openEmails = state.emails.filter((email) => !emailIsComplete(email));
  const draftViews = state.drafts.map(buildDraftView);
  const readyDrafts = draftViews.filter((draft) => draft.isReadyForHumanSend).length;
  const waitingDrafts = draftViews.filter((draft) => draft.canSelectForBulkApproval).length;
  const byCategory = (category) => openEmails.filter((email) => email.category === category);
  const urgent = openEmails.filter((email) => email.urgency === "High");

  return {
    generatedAt: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    headline: `${openEmails.length} open emails need review. ${urgent.length} are urgent and ${waitingDrafts} drafts need approval.`,
    urgentItems: urgent.map((email) => email.subject),
    draftsAwaitingApproval: waitingDrafts,
    readyForHumanSend: readyDrafts,
    invoices: byCategory("Accounting").map((email) => email.subject),
    missingDocuments: byCategory("Missing documents").map((email) => email.subject),
    quoteRequests: byCategory("Sales").map((email) => email.subject),
    clientComplaints: byCategory("Client complaint").map((email) => email.subject),
    recommendedActions: [
      urgent.length ? "Review urgent client items first." : "No urgent client escalations are open.",
      waitingDrafts ? "Review drafts before marking them ready for human send." : "No drafts are waiting for approval.",
      "Keep observation mode on while this remains a demo."
    ]
  };
}

function getOrCreateInvoiceRule() {
  const existing = state.rules.find((rule) => /invoice/i.test(`${rule.title} ${rule.desc}`));
  if (existing) {
    existing.on = true;
    persistState();
    return existing;
  }

  const rule = {
    id: `rule-${Date.now()}`,
    title: "Invoice intake assistant",
    desc: "Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",
    category: "Accounting",
    confidence: 84,
    explanation: "Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",
    impact: "Created locally from the assistant chat. It only previews matches in this prototype.",
    matches: state.emails.filter((email) => email.category === "Accounting").map((email) => email.subject),
    on: true
  };
  state.rules.push(rule);
  persistState();
  return rule;
}

function normalizeAssistantMessage(message) {
  return message
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ");
}

function editDistance(left, right) {
  const rows = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    let previous = rows[0];
    rows[0] = leftIndex;

    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const current = rows[rightIndex];
      const substitutionCost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1;
      rows[rightIndex] = Math.min(
        rows[rightIndex] + 1,
        rows[rightIndex - 1] + 1,
        previous + substitutionCost
      );
      previous = current;
    }
  }

  return rows[right.length];
}

function isAdjacentSwap(left, right) {
  if (left.length !== right.length) return false;

  const differences = [];
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) differences.push(index);
  }

  return differences.length === 2
    && differences[1] === differences[0] + 1
    && left[differences[0]] === right[differences[1]]
    && left[differences[1]] === right[differences[0]];
}

function assistantMessageMatches(message, aliases) {
  const tokens = message.split(" ").filter(Boolean);

  return aliases.some((alias) => {
    if (alias.includes(" ")) return message.includes(alias);

    return tokens.some((token) => {
      if (token === alias) return true;
      if (isAdjacentSwap(token, alias)) return true;
      const tolerance = alias.length >= 7 ? 2 : alias.length >= 4 ? 1 : 0;
      return tolerance > 0 && Math.abs(token.length - alias.length) <= tolerance && editDistance(token, alias) <= tolerance;
    });
  });
}

function answerAssistantCommand(rawMessage, context = {}) {
  const message = normalizeAssistantMessage(rawMessage);
  const urgentCount = state.emails.filter((email) => !emailIsComplete(email) && email.urgency === "High").length;
  const invoiceCount = state.emails.filter((email) => !emailIsComplete(email) && email.category === "Accounting").length;
  const waitingDrafts = state.drafts
    .map(buildDraftView)
    .filter((draft) => draft.canSelectForBulkApproval)
    .length;
  const mentionsInvoice = assistantMessageMatches(message, ["invoice", "invoices", "accounting"]);
  const mentionsRule = assistantMessageMatches(message, ["rule", "rules", "create rule"]);

  if (assistantMessageMatches(message, ["urgent", "urgency"])) {
    return {
      text: `${urgentCount} urgent emails are open. I switched Triage to urgent items.`,
      action: { type: "show_triage", filter: "urgent" }
    };
  }

  if (assistantMessageMatches(message, ["triage", "inbox", "show inbox", "open inbox"])) {
    return {
      text: "I opened the full Triage inbox.",
      action: { type: "show_triage", filter: "all" }
    };
  }

  if (mentionsInvoice && mentionsRule) {
    const rule = getOrCreateInvoiceRule();
    return {
      text: `Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.`,
      action: { type: "show_rule", ruleId: rule.id }
    };
  }

  if (mentionsInvoice) {
    return {
      text: `${invoiceCount} invoice-related emails are open. I switched Triage to Accounting.`,
      action: { type: "show_triage", filter: "invoices" }
    };
  }

  if (assistantMessageMatches(message, ["draft", "drafts", "approval", "approve"])) {
    return {
      text: `${waitingDrafts} saved drafts need human approval. I opened the Drafts queue.`,
      action: { type: "show_drafts", filter: "needs_approval" }
    };
  }

  if (assistantMessageMatches(message, ["digest", "morning digest"])) {
    return {
      text: "I regenerated the morning digest from local demo data.",
      action: { type: "generate_digest" }
    };
  }

  if (assistantMessageMatches(message, ["explain", "explanation", "why"])) {
    if (!context.selectedEmailId) {
      return {
        text: "Open an email in Triage first, then ask me to explain it. I will show the flagged reason."
      };
    }
    const email = buildEmailView(findEmail(context.selectedEmailId));
    return {
      text: `Courio flagged "${email.subject}" because: ${email.explanation}`,
      action: { type: "explain_email", emailId: email.id }
    };
  }

  if (assistantMessageMatches(message, ["reset", "restart"])) {
    return {
      text: "I can reset the fake demo data now. The page will reload so defaults come back clean.",
      action: { type: "reset_demo_data" }
    };
  }

  return {
    text: "I did not catch that. Try one of the command hints below."
  };
}

export async function listEmails() {
  await delay();
  return clone(state.emails.map(buildEmailView));
}

export async function listEmployees() {
  await delay(350);
  return clone(state.employees);
}

export async function listRules() {
  await delay(400);
  return clone(state.rules);
}

export async function generateMorningDigest() {
  await delay(700);
  return clone(buildDigest());
}

export async function listDrafts() {
  await delay(400);
  return clone(state.drafts.map(buildDraftView));
}

export async function getDraftDetail(id) {
  await delay(450);
  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (email.workflowState === WORKFLOW_STATE.DRAFT_GENERATED) {
    email.workflowState = WORKFLOW_STATE.DRAFT_REVIEWED;
    draft.reviewedAt = new Date().toISOString();
    draft.updatedAt = draft.reviewedAt;
    persistState();
  }
  return clone({
    ...buildDraftView(draft),
    sourceEmail: {
      id: email.id,
      subject: email.subject,
      sender: email.sender,
      senderEmail: email.senderEmail,
      body: email.body,
      suggestedAction: email.suggestedAction,
      confidence: email.confidence,
      urgency: email.urgency,
      status: emailIsComplete(email) ? "Done" : "Open",
      workflowStatus: workflowLabel(email.workflowState)
    }
  });
}

export async function getDraftForEmail(emailId) {
  await delay(350);
  findEmail(emailId);
  const draft = findDraftByEmailId(emailId);
  if (!draft) return null;
  return getDraftDetail(draft.id);
}

export async function getSettings() {
  await delay(250);
  return clone(state.settings);
}

export async function saveSettings(settings) {
  await delay(450);
  state.settings = {
    ...state.settings,
    ...settings,
    approvalRequired: true,
    autoSend: false
  };
  persistState();
  return clone(state.settings);
}

export async function resetDemoData() {
  await delay(350);
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(CHAT_STORAGE_KEY);
  return clone(defaultState);
}

export async function getEmailThread(id) {
  await delay();
  const email = findEmail(id);
  if (email.workflowState === WORKFLOW_STATE.NEEDS_REVIEW) {
    email.workflowState = WORKFLOW_STATE.READY_FOR_DRAFT;
    email.reviewedAt = new Date().toISOString();
    persistState();
  }
  return clone({ ...buildEmailView(email), messages: email.thread });
}

export async function getWorkflowCompletionCheck(id) {
  await delay(250);
  return clone(getCompletionCheck(findEmail(id)));
}

export async function summarizeThread(id) {
  await delay(700);
  return findEmail(id).summary;
}

export async function generateDraftReply(id) {
  await delay(750);
  const email = findEmail(id);
  if (emailIsComplete(email)) {
    throw new Error("This email is done. Reopen it before creating or changing a draft.");
  }
  if (email.workflowState === WORKFLOW_STATE.NEEDS_REVIEW) {
    throw new Error("Review this email before generating a draft.");
  }

  const existingDraft = findDraftByEmailId(id);
  if (existingDraft) {
    return clone(buildDraftView(existingDraft));
  }

  if (email.workflowState !== WORKFLOW_STATE.READY_FOR_DRAFT) {
    throw new Error("This workflow is not ready to generate a new draft.");
  }

  const now = new Date().toISOString();
  const draft = {
    id: `draft-${id}`,
    emailId: id,
    title: email.suggestedAction,
    source: email.subject,
    text: email.draft,
    confidence: email.confidence,
    risk: email.urgency === "High" ? "High" : "Low",
    createdAt: now,
    updatedAt: now
  };
  state.drafts.push(draft);
  email.workflowState = WORKFLOW_STATE.DRAFT_GENERATED;
  persistState();
  return clone(buildDraftView(draft));
}

export async function saveDraft(id, draftText) {
  await delay();
  if (!draftText || draftText.trim().length < 10) {
    throw new Error("Draft is too short to save.");
  }

  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (emailIsComplete(email)) {
    throw new Error("This email is done. Reopen it before editing the draft.");
  }
  if (![WORKFLOW_STATE.DRAFT_REVIEWED, WORKFLOW_STATE.DRAFT_SAVED].includes(email.workflowState)) {
    throw new Error("Review this draft before saving it.");
  }

  draft.text = draftText;
  draft.updatedAt = new Date().toISOString();
  email.workflowState = WORKFLOW_STATE.DRAFT_SAVED;
  persistState();
  return clone(buildDraftView(draft));
}

export async function approveDraft(id) {
  await delay();
  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (emailIsComplete(email)) {
    throw new Error("This email is done. Reopen it before changing draft approval.");
  }
  if (!draftReadyForApproval(draft)) {
    throw new Error("Review this draft before approving.");
  }
  completeEmailFromApprovedDraft(email, draft);
  persistState();
  return clone(buildDraftView(draft));
}

export async function approveDrafts(ids) {
  await delay(650);
  if (!ids.length) throw new Error("Select at least one draft first.");

  const candidates = ids
    .map((id) => {
      const draft = findDraft(id);
      const email = findEmail(draft.emailId || draft.id);
      return { draft, email };
    })
    .filter(({ email }) => !emailIsComplete(email));

  if (!candidates.length) {
    throw new Error("No selected drafts could be approved.");
  }

  if (candidates.some(({ draft }) => !draftReadyForApproval(draft))) {
    throw new Error("Review this draft before approving.");
  }

  const approved = [];
  for (const { draft, email } of candidates) {
    completeEmailFromApprovedDraft(email, draft);
    approved.push(draft.id);
  }

  persistState();
  return clone({ approved });
}

export async function approveLowRiskDrafts() {
  await delay(700);
  if (!lowRiskBulkApprovalEnabled()) {
    throw new Error("Low-risk bulk approval is disabled by workspace settings.");
  }

  const lowRiskIds = state.drafts
    .filter((draft) => draft.risk !== "High")
    .filter(draftReadyForApproval)
    .filter((draft) => !emailIsComplete(findEmail(draft.emailId || draft.id)))
    .map((draft) => draft.id);

  if (!lowRiskIds.length) {
    throw new Error("No low-risk drafts are awaiting approval.");
  }

  return approveDrafts(lowRiskIds);
}

export async function toggleRule(id) {
  await delay(450);
  const rule = state.rules.find((item) => item.id === id);
  if (!rule) throw new Error("Rule not found.");
  rule.on = !rule.on;
  persistState();
  return clone(rule);
}

export async function updateRule(id, updates) {
  await delay(500);
  const rule = state.rules.find((item) => item.id === id);
  if (!rule) throw new Error("Rule not found.");
  if (!updates.title?.trim()) throw new Error("Rule name is required.");
  if (!updates.desc?.trim()) throw new Error("Rule description is required.");

  rule.title = updates.title.trim();
  rule.desc = updates.desc.trim();
  rule.category = updates.category || rule.category;
  persistState();
  return clone(rule);
}

export async function deleteRule(id) {
  await delay(450);
  const index = state.rules.findIndex((item) => item.id === id);
  if (index === -1) throw new Error("Rule not found.");
  const [deleted] = state.rules.splice(index, 1);
  state.deletedRuleIds = [...new Set([...(state.deletedRuleIds || []), id])];
  recordActivity("rule-deleted", {
    ruleId: deleted.id,
    label: `Rule deleted: ${deleted.title}`
  });
  persistState();
  return clone(deleted);
}

export async function markEmailDone(id) {
  await delay();
  const email = findEmail(id);
  if (!emailIsComplete(email)) {
    throw new Error("Approve the reviewed and saved draft to complete this workflow.");
  }
  return clone(buildEmailView(email));
}

export async function updateEmailCategory(id, category) {
  await delay(400);
  if (!category) throw new Error("Choose a category before saving.");
  const email = findEmail(id);
  email.category = category;
  persistState();
  return clone(email);
}

export async function assignEmail(id, employeeId) {
  await delay(400);
  if (employeeId) findEmployee(employeeId);
  const email = findEmail(id);
  email.assignedTo = employeeId;
  persistState();
  return clone(email);
}

export async function createEmployee(employee) {
  await delay(500);
  const normalized = normalizeEmployeeInput(employee);

  const created = {
    id: `employee-${Date.now()}`,
    ...normalized
  };
  state.employees.push(created);
  recordActivity("employee-added", {
    employeeId: created.id,
    label: `Employee added: ${created.name}`
  });
  persistState();
  return clone(created);
}

export async function updateEmployee(id, updates) {
  await delay(500);
  const employee = findEmployee(id);
  const normalized = normalizeEmployeeInput(updates, id);

  Object.assign(employee, normalized);
  recordActivity("employee-updated", {
    employeeId: employee.id,
    label: `Employee updated: ${employee.name}`
  });
  persistState();
  return clone(employee);
}

export async function deleteEmployee(id) {
  await delay(500);
  const index = state.employees.findIndex((item) => item.id === id);
  if (index === -1) throw new Error("Employee not found.");
  const [deleted] = state.employees.splice(index, 1);
  state.deletedEmployeeIds = [...new Set([...(state.deletedEmployeeIds || []), id])];
  let reassignedCount = 0;
  state.emails.forEach((email) => {
    if (email.assignedTo === id) {
      email.assignedTo = "";
      reassignedCount += 1;
    }
  });
  recordActivity("employee-deleted", {
    employeeId: deleted.id,
    label: `Employee removed: ${deleted.name}. ${reassignedCount} assigned emails returned to Unassigned.`
  });
  persistState();
  return clone(deleted);
}

export async function listActivity() {
  await delay(250);
  return clone(state.completedActions);
}

export async function listAssistantMessages() {
  await delay(150);
  return clone(assistantHistory);
}

export async function sendAssistantCommand(message, context = {}) {
  await delay(500);
  if (!message?.trim()) throw new Error("Type a command first.");

  const userMessage = {
    id: `user-${Date.now()}`,
    role: "user",
    text: message.trim()
  };
  const answer = answerAssistantCommand(message, context);
  const assistantMessage = {
    id: `assistant-${Date.now()}`,
    role: "assistant",
    text: answer.text
  };

  assistantHistory = [...assistantHistory, userMessage, assistantMessage].slice(-24);
  persistAssistantHistory();

  return clone({
    messages: assistantHistory,
    action: answer.action || null
  });
}
