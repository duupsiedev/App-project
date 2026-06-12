import { mockEmails } from "../data/mockEmails.js";
import { mockEmployees } from "../data/mockEmployees.js";
import { mockRules } from "../data/mockRules.js";

const STORAGE_KEY = "courio.mockState.v1";
const CHAT_STORAGE_KEY = "courio.assistantHistory.v1";

const defaultState = {
  emails: structuredClone(mockEmails),
  employees: structuredClone(mockEmployees),
  rules: structuredClone(mockRules),
  drafts: mockEmails.map((email) => ({
    id: email.id,
    emailId: email.id,
    title: email.suggestedAction,
    source: email.subject,
    text: email.draft,
    confidence: email.confidence,
    risk: email.urgency === "High" ? "High" : "Low",
    generated: false,
    reviewed: false,
    status: "Needs approval"
  })),
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

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultState);

    const parsed = JSON.parse(saved);
    const loadedState = {
      ...clone(defaultState),
      ...parsed,
      emails: mergeById(defaultState.emails, parsed.emails),
      employees: mergeById(
        defaultState.employees.filter((employee) => !(parsed.deletedEmployeeIds || []).includes(employee.id)),
        (parsed.employees || []).filter((employee) => !(parsed.deletedEmployeeIds || []).includes(employee.id))
      ),
      rules: mergeById(
        defaultState.rules.filter((rule) => !(parsed.deletedRuleIds || []).includes(rule.id)),
        (parsed.rules || []).filter((rule) => !(parsed.deletedRuleIds || []).includes(rule.id))
      ),
      drafts: mergeById(defaultState.drafts, parsed.drafts),
      settings: {
        ...defaultState.settings,
        ...(parsed.settings || {})
      }
    };
    loadedState.drafts.forEach((draft) => {
      if (!draftReadyForCompletion(draft)) return;
      const email = loadedState.emails.find((item) => item.id === (draft.emailId || draft.id));
      if (email) {
        email.status = "Done";
        email.workflowStatus = "Completed";
      }
    });
    return loadedState;
  } catch {
    return clone(defaultState);
  }
}

function mergeById(defaultItems, savedItems = []) {
  const mergedDefaults = defaultItems.map((defaultItem) => {
    const savedItem = savedItems.find((item) => item.id === defaultItem.id);
    return savedItem ? { ...defaultItem, ...savedItem } : clone(defaultItem);
  });
  const savedOnlyItems = savedItems.filter((savedItem) => !defaultItems.some((defaultItem) => defaultItem.id === savedItem.id));
  return [...mergedDefaults, ...savedOnlyItems.map(clone)];
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

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

function draftReadyForApproval(draft) {
  return draft.generated && draft.reviewed && draft.status === "Saved";
}

function draftReadyForCompletion(draft) {
  return draft.status === "Ready for human send" || draft.status === "Approved";
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
  draft.status = "Ready for human send";
  email.status = "Done";
  email.workflowStatus = "Completed";
  recordActivity("draft-approved", {
    emailId: email.id,
    draftId: draft.id,
    label: `Draft approved and workflow completed: ${email.subject}`
  });
}

function buildDraftView(draft) {
  const email = state.emails.find((item) => item.id === (draft.emailId || draft.id));
  const sourceEmailStatus = email?.status || "Open";
  const isReady = draftReadyForCompletion(draft);
  const canApprove = sourceEmailStatus !== "Done" && draftReadyForApproval(draft);

  return {
    ...draft,
    sourceEmailStatus,
    sourceWorkflowStatus: email?.workflowStatus || "",
    approvalState: isReady ? "ready_for_human_send" : draft.status === "Saved" ? "saved" : draft.status === "Generated" ? "generated" : "needs_review",
    statusLabel: isReady ? "Ready for human send" : draft.status,
    isReadyForHumanSend: isReady,
    canApprove,
    canSelectForBulkApproval: canApprove,
    approvalBlocker: canApprove ? "" : sourceEmailStatus === "Done" ? "Source email is completed." : "Review this draft before approving."
  };
}

function buildEmailView(email) {
  const draft = findDraftByEmailId(email.id);
  const requiresDraft = actionRequiresDraft(email);
  const draftStarted = Boolean(draft?.generated || draft?.reviewed || draftReadyForCompletion(draft || {}));
  const draftReady = draft ? draftReadyForCompletion(draft) : false;
  const isDone = email.status === "Done";

  return {
    ...email,
    requiresDraft,
    draftId: draftStarted ? draft?.id || null : null,
    draftStatus: draftStarted ? draft?.status || null : null,
    draftStatusLabel: draftStarted ? buildDraftView(draft).statusLabel : "No draft",
    draftReadyForHumanSend: draftReady,
    workflowLabel: isDone
      ? "Completed"
      : !requiresDraft
        ? email.reviewed
          ? "Ready to complete"
          : "Review required"
        : draftReady
          ? "Draft approved"
          : draft?.status === "Saved"
            ? "Draft saved"
            : draftStarted
              ? "Draft in review"
              : "Draft needed",
    canComplete: isDone ? false : requiresDraft ? draftReady : Boolean(email.reviewed),
    completeActionLabel: isDone ? "Completed" : "Done",
    draftActionLabel: isDone ? "Draft locked" : draftStarted ? draftReady ? "View approved draft" : "Edit draft" : "Generate draft",
    canGenerateDraft: !isDone && Boolean(email.reviewed) && !draftStarted,
    canOpenDraft: draftStarted,
    completionBlocker: !email.reviewed
      ? "Review this email before generating a draft."
      : requiresDraft && !draftReady
        ? "This workflow still needs a draft before it can be completed."
        : ""
  };
}

function getCompletionCheck(email) {
  const emailView = buildEmailView(email);
  if (emailView.canComplete) {
    return {
      allowed: true,
      type: "mark-done",
      emailId: email.id,
      title: "Complete workflow",
      message: "Mark this workflow complete?",
      primaryLabel: "Mark complete"
    };
  }

  if (!emailView.requiresDraft) {
    return {
      allowed: false,
      type: "review-email",
      emailId: email.id,
      title: "Review required",
      message: "Review this email before completing the workflow.",
      primaryLabel: "Review email"
    };
  }

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
    message: "This workflow needs a reviewed and approved draft before it can be completed.",
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

function buildDigest() {
  const openEmails = state.emails.filter((email) => email.status !== "Done");
  const activeDrafts = state.drafts.filter((draft) => draft.generated || draft.reviewed || draftReadyForCompletion(draft));
  const readyDrafts = activeDrafts.filter((draft) => draftReadyForCompletion(draft)).length;
  const waitingDrafts = activeDrafts.filter((draft) => !draftReadyForCompletion(draft)).length;
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
  const urgentCount = state.emails.filter((email) => email.status !== "Done" && email.urgency === "High").length;
  const invoiceCount = state.emails.filter((email) => email.status !== "Done" && email.category === "Accounting").length;
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
      text: `${waitingDrafts} drafts need human review or approval. I opened the Drafts queue.`,
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
  return clone(
    state.drafts
      .filter((draft) => draft.generated || draft.reviewed || draftReadyForCompletion(draft))
      .map(buildDraftView)
  );
}

export async function getDraftDetail(id) {
  await delay(450);
  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (!draft.generated) {
    throw new Error("Generate this draft before reviewing it.");
  }
  if (draft.generated && !draft.reviewed) {
    draft.reviewed = true;
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
      status: email.status,
      workflowStatus: email.workflowStatus
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
  if (!email.reviewed) {
    email.reviewed = true;
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
  if (email.status === "Done") {
    throw new Error("This email is done. Reopen it before creating or changing a draft.");
  }
  if (!email.reviewed) {
    throw new Error("Review this email before generating a draft.");
  }

  let draft = findDraftByEmailId(id);
  if (!draft) {
    draft = {
      id,
      emailId: id,
      title: email.suggestedAction,
      source: email.subject,
      text: email.draft,
      confidence: email.confidence,
      risk: email.urgency === "High" ? "High" : "Low",
      generated: true,
      reviewed: false,
      status: "Generated"
    };
    state.drafts.push(draft);
  } else if (draft.status === "Needs approval" && draft.text === email.draft) {
    draft.generated = true;
    draft.status = "Generated";
  }

  email.workflowStatus = draft.status === "Ready for human send" ? "Draft approved" : "Draft in review";
  persistState();
  return clone(draft);
}

export async function saveDraft(id, draftText) {
  await delay();
  if (!draftText || draftText.trim().length < 10) {
    throw new Error("Draft is too short to save.");
  }

  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (email.status === "Done") {
    throw new Error("This email is done. Reopen it before editing the draft.");
  }
  if (!draft.generated) {
    throw new Error("Generate this draft before saving it.");
  }
  if (!draft.reviewed) {
    throw new Error("Review this draft before saving it.");
  }

  draft.text = draftText;
  draft.status = "Saved";
  email.workflowStatus = "Draft saved";
  persistState();
  return clone(draft);
}

export async function approveDraft(id) {
  await delay();
  const draft = findDraft(id);
  const email = findEmail(draft.emailId || draft.id);
  if (email.status === "Done") {
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
    .filter(({ email }) => email.status !== "Done");

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
    .filter((draft) => findEmail(draft.emailId || draft.id).status !== "Done")
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
  const draft = findDraftByEmailId(id);
  if (!actionRequiresDraft(email) && !email.reviewed) {
    throw new Error("Review this email before completing the workflow.");
  }
  if (actionRequiresDraft(email) && !draftReadyForCompletion(draft || {})) {
    throw new Error("This workflow still needs a draft before it can be completed.");
  }
  email.status = "Done";
  email.workflowStatus = "Completed";
  recordActivity("email-done", {
    emailId: id,
    label: `Workflow completed: ${email.subject}`
  });
  persistState();
  return clone(email);
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
  if (!employee.name?.trim()) throw new Error("Employee name is required.");
  if (!employee.email?.trim()) throw new Error("Employee email is required.");
  if (!employee.title?.trim()) throw new Error("Employee title is required.");
  if (!employee.department?.trim()) throw new Error("Employee department is required.");

  const created = {
    id: `employee-${Date.now()}`,
    name: employee.name.trim(),
    email: employee.email.trim(),
    title: employee.title.trim(),
    department: employee.department.trim()
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
  if (!updates.name?.trim()) throw new Error("Employee name is required.");
  if (!updates.email?.trim()) throw new Error("Employee email is required.");
  if (!updates.title?.trim()) throw new Error("Employee title is required.");
  if (!updates.department?.trim()) throw new Error("Employee department is required.");

  Object.assign(employee, {
    name: updates.name.trim(),
    email: updates.email.trim(),
    title: updates.title.trim(),
    department: updates.department.trim()
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
  state.emails.forEach((email) => {
    if (email.assignedTo === id) email.assignedTo = "";
  });
  recordActivity("employee-deleted", {
    employeeId: deleted.id,
    label: `Employee removed: ${deleted.name}`
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
