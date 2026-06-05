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
  completedActions: []
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
    return {
      ...clone(defaultState),
      ...parsed,
      emails: mergeById(defaultState.emails, parsed.emails),
      employees: mergeById(defaultState.employees, parsed.employees),
      rules: mergeById(defaultState.rules, parsed.rules),
      drafts: mergeById(defaultState.drafts, parsed.drafts),
      settings: {
        ...defaultState.settings,
        ...(parsed.settings || {})
      }
    };
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

function actionRequiresDraft(email) {
  return /draft|reply|follow-up|offer|escalate/i.test(email.suggestedAction);
}

function draftReadyForApproval(draft) {
  return draft.generated && draft.reviewed && draft.status === "Saved";
}

function draftReadyForCompletion(draft) {
  return draft.status === "Ready for human send" || draft.status === "Approved";
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
    canSelectForBulkApproval: sourceEmailStatus !== "Done" && !isReady,
    approvalBlocker: canApprove ? "" : sourceEmailStatus === "Done" ? "Source email is completed." : "Review this draft before approving."
  };
}

function buildEmailView(email) {
  const draft = findDraftByEmailId(email.id);
  const requiresDraft = actionRequiresDraft(email);
  const draftReady = draft ? draftReadyForCompletion(draft) : false;
  const isDone = email.status === "Done";

  return {
    ...email,
    requiresDraft,
    draftId: draft?.id || null,
    draftStatus: draft?.status || null,
    draftStatusLabel: draft ? buildDraftView(draft).statusLabel : "No draft",
    draftReadyForHumanSend: draftReady,
    workflowLabel: isDone ? "Completed" : draftReady ? "Draft approved" : draft?.status === "Saved" ? "Draft saved" : draft ? "Draft in review" : email.workflowStatus || "Not started",
    canComplete: isDone ? false : !requiresDraft || draftReady,
    completeActionLabel: isDone ? "Completed" : "Done",
    draftActionLabel: isDone ? "Draft locked" : draft ? draftReady ? "View approved draft" : "Edit draft" : "Generate draft",
    canGenerateDraft: !isDone && !draft,
    canOpenDraft: Boolean(draft),
    completionBlocker: requiresDraft && !draftReady ? "This workflow still needs a draft before it can be completed." : ""
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

function getApprovalCheck(draft) {
  const draftView = buildDraftView(draft);
  if (draftView.canApprove) {
    return {
      allowed: true,
      type: "approve-draft",
      draftId: draft.id,
      title: "Approve draft",
      message: "Mark this draft as ready for human send? Courio will not send it.",
      primaryLabel: "Approve"
    };
  }

  return {
    allowed: false,
    type: "review-draft",
    draftId: draft.id,
    title: "Review required",
    message: "Review this draft before approving.",
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
  const readyDrafts = state.drafts.filter((draft) => draft.status === "Ready for human send").length;
  const waitingDrafts = state.drafts.filter((draft) => draft.status !== "Ready for human send" && draft.status !== "Approved").length;
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

function answerAssistantCommand(rawMessage, context = {}) {
  const message = rawMessage.trim().toLowerCase();
  const urgentCount = state.emails.filter((email) => email.status !== "Done" && email.urgency === "High").length;
  const invoiceCount = state.emails.filter((email) => email.status !== "Done" && email.category === "Accounting").length;
  const waitingDrafts = state.drafts.filter((draft) => !draftReadyForCompletion(draft) && findEmail(draft.emailId || draft.id).status !== "Done").length;

  if (/urgent/.test(message)) {
    return {
      text: `${urgentCount} urgent emails are open. I switched Triage to urgent items.`,
      action: { type: "show_triage", filter: "urgent" }
    };
  }

  if (/invoice|invoices|accounting/.test(message) && /create|rule/.test(message)) {
    const rule = getOrCreateInvoiceRule();
    return {
      text: `Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.`,
      action: { type: "show_rule", ruleId: rule.id }
    };
  }

  if (/invoice|invoices|accounting/.test(message)) {
    return {
      text: `${invoiceCount} invoice-related emails are open. I switched Triage to Accounting.`,
      action: { type: "show_triage", filter: "invoices" }
    };
  }

  if (/draft/.test(message) && /approval|approve|need|waiting/.test(message)) {
    return {
      text: `${waitingDrafts} drafts need human review or approval. I opened the Drafts queue.`,
      action: { type: "show_drafts", filter: "needs_approval" }
    };
  }

  if (/digest|morning/.test(message)) {
    return {
      text: "I regenerated the morning digest from local demo data.",
      action: { type: "generate_digest", digest: buildDigest() }
    };
  }

  if (/explain|why/.test(message)) {
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

  if (/reset/.test(message) && /demo|data/.test(message)) {
    return {
      text: "I can reset the fake demo data now. The page will reload so defaults come back clean.",
      action: { type: "reset_demo_data" }
    };
  }

  return {
    text: "Try: Show urgent emails, Show invoices, Show drafts needing approval, Generate digest, Explain selected email, Create invoice rule, or Reset demo data."
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
  return clone(defaultState);
}

export async function getEmailThread(id) {
  await delay();
  const email = findEmail(id);
  return clone({ ...buildEmailView(email), messages: email.thread });
}

export async function getWorkflowCompletionCheck(id) {
  await delay(250);
  return clone(getCompletionCheck(findEmail(id)));
}

export async function getDraftApprovalCheck(id) {
  await delay(250);
  return clone(getApprovalCheck(findDraft(id)));
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

  draft.text = draftText;
  draft.generated = true;
  draft.reviewed = true;
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
  draft.status = "Ready for human send";
  email.workflowStatus = "Draft approved";
  persistState();
  return clone(draft);
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
    draft.status = "Ready for human send";
    email.workflowStatus = "Draft approved";
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
    .filter((draft) => draft.status !== "Ready for human send" && draft.status !== "Approved")
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

export async function markEmailDone(id) {
  await delay();
  const email = findEmail(id);
  const draft = findDraftByEmailId(id);
  if (actionRequiresDraft(email) && !draftReadyForCompletion(draft || {})) {
    throw new Error("This workflow still needs a draft before it can be completed.");
  }
  email.status = "Done";
  email.workflowStatus = "Completed";
  state.completedActions.push({
    id: `action-${Date.now()}`,
    type: "email-done",
    emailId: id,
    completedAt: new Date().toISOString()
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
  findEmployee(employeeId);
  const email = findEmail(id);
  email.assignedTo = employeeId;
  persistState();
  return clone(email);
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
