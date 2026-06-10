import "./styles.css";
import { copy } from "./data/mockCopy.js";
import {
  approveDraft,
  approveDrafts,
  approveLowRiskDrafts,
  assignEmail,
  createEmployee,
  deleteEmployee,
  deleteRule,
  generateMorningDigest,
  generateDraftReply,
  getDraftDetail,
  getDraftForEmail,
  getSettings,
  getEmailThread,
  getWorkflowCompletionCheck,
  listActivity,
  listAssistantMessages,
  listEmployees,
  listDrafts,
  listEmails,
  listRules,
  markEmailDone,
  resetDemoData,
  saveSettings,
  saveDraft,
  sendAssistantCommand,
  summarizeThread,
  toggleRule,
  updateEmployee,
  updateRule,
  updateEmailCategory
} from "./api/mockApi.js";

const app = document.querySelector("#app");

const state = {
  tab: "dashboard",
  emails: [],
  employees: [],
  rules: [],
  drafts: [],
  settings: {
    companyName: "Demo PME Inc.",
    mode: "Simple",
    defaultMode: "Observation only",
    escalationRecipient: "owner@company.ca",
    approvalRequired: true,
    autoSend: false
  },
  loading: {
    emails: true,
    rules: true,
    drafts: true
  },
  busy: {},
  selectedEmail: null,
  selectedDraft: null,
  selectedRule: null,
  selectedEmployee: null,
  selectedDraftIds: [],
  confirmDialog: null,
  digest: null,
  triageFilter: "all",
  draftFilter: "all",
  ruleQuery: "",
  assistantOpen: false,
  assistantMessages: [],
  activity: [],
  summary: "",
  showExplanation: false
};

app.innerHTML = `
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub">Assistant Outlook pour PME</div>
      </div>
      <nav class="nav">
        <div class="nav-group">
          <div class="nav-label">Home</div>
          <button class="active" data-tab="dashboard">Overview <small>Today</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Work</div>
          <button data-tab="triage">Triage <small>Inbox</small></button>
          <button data-tab="drafts">Drafts <small>Approval</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Automation</div>
          <button data-tab="rules">Rules <small>Preview</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Workspace</div>
          <button data-tab="import">Setup import <small>Microsoft 365</small></button>
          <button data-tab="admin">Admin <small>Settings</small></button>
        </div>
      </nav>
      <div class="aside-note">Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.</div>
    </aside>
    <main>
      <div class="header">
        <div>
          <h1 id="pageTitle"></h1>
          <p class="subtitle" id="pageSubtitle"></p>
        </div>
        <div class="mode">Preview mode enabled</div>
      </div>
      <section id="dashboard" class="section"></section>
      <section id="import" class="section"></section>
      <section id="triage" class="section"></section>
      <section id="rules" class="section"></section>
      <section id="drafts" class="section"></section>
      <section id="admin" class="section"></section>
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div class="toast" id="toast"></div>
`;

function setBusy(key, value) {
  state.busy[key] = value;
  render();
}

async function runAction(key, action, successMessage) {
  try {
    setBusy(key, true);
    await action();
    if (successMessage) toast(successMessage);
  } catch (error) {
    toast(error.message || "Something went wrong in the mock workflow.", true);
  } finally {
    setBusy(key, false);
  }
}

function isBusy(key) {
  return Boolean(state.busy[key]);
}

function toast(message, isError = false) {
  const toastEl = document.querySelector("#toast");
  toastEl.textContent = message;
  toastEl.classList.toggle("error", isError);
  toastEl.classList.add("show");
  window.clearTimeout(toastEl.dataset.timer);
  toastEl.dataset.timer = window.setTimeout(() => toastEl.classList.remove("show"), 2400);
}

function switchTab(tab) {
  state.tab = tab;
  render();
}

async function refreshEmails(keepSelectedId = state.selectedEmail?.id) {
  state.emails = await listEmails();
  if (keepSelectedId) {
    const selected = state.emails.find((email) => email.id === keepSelectedId);
    state.selectedEmail = selected ? { ...selected, messages: selected.thread } : null;
  }
}

function isDraftReady(draft) {
  return Boolean(draft?.isReadyForHumanSend);
}

function isAdvancedMode() {
  return state.settings.mode === "Advanced";
}

function lowRiskBulkApprovalEnabled() {
  return state.settings.allowLowRiskBulkApproval !== "No";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadInitialData() {
  try {
    const [emails, employees, rules, drafts, settings, digest, assistantMessages, activity] = await Promise.all([listEmails(), listEmployees(), listRules(), listDrafts(), getSettings(), generateMorningDigest(), listAssistantMessages(), listActivity()]);
    state.emails = emails;
    state.employees = employees;
    state.rules = rules;
    state.drafts = drafts;
    state.settings = { ...state.settings, ...settings };
    state.digest = digest;
    state.assistantMessages = assistantMessages;
    state.activity = activity;
  } catch (error) {
    toast(error.message || "Could not load mock data.", true);
  } finally {
    state.loading.emails = false;
    state.loading.rules = false;
    state.loading.drafts = false;
    render();
  }
}

function render() {
  document.querySelector("#pageTitle").textContent = copy[state.tab][0];
  document.querySelector("#pageSubtitle").textContent = copy[state.tab][1];
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.toggle("active", section.id === state.tab);
  });
  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.tab);
  });

  renderDashboard();
  renderImport();
  renderTriage();
  renderRules();
  renderDrafts();
  renderAdmin();
  renderDrawer();
  renderConfirmModal();
  renderAssistant();
}

function renderDashboard() {
  const openEmails = state.emails.filter((email) => email.status !== "Done").length;
  const digest = state.digest;
  document.querySelector("#dashboard").innerHTML = `
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Open emails</div>
        <div class="value">${state.loading.emails ? "..." : openEmails}</div>
        <div class="caption">Built from local demo inbox data</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${state.drafts.filter((draft) => !isDraftReady(draft)).length || 0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Ready for human send</div>
        <div class="value">${state.drafts.filter(isDraftReady).length || 0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${digest ? `Generated ${digest.generatedAt}` : "Loading..."}</span></div>
        <p class="subtitle">${digest ? digest.headline : "Preparing a local demo digest from mock emails and drafts."}</p>
        ${digest ? `
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${digest.urgentItems.length ? digest.urgentItems.join(", ") : "None"}</td></tr>
            <tr><td>Invoices</td><td>${digest.invoices.length ? digest.invoices.join(", ") : "None"}</td></tr>
            <tr><td>Missing documents</td><td>${digest.missingDocuments.length ? digest.missingDocuments.join(", ") : "None"}</td></tr>
            <tr><td>Quote requests</td><td>${digest.quoteRequests.length ? digest.quoteRequests.join(", ") : "None"}</td></tr>
            <tr><td>Client complaints</td><td>${digest.clientComplaints.length ? digest.clientComplaints.join(", ") : "None"}</td></tr>
          </table>
        ` : ""}
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" data-action="digest" ${isBusy("digest") ? "disabled" : ""}>${isBusy("digest") ? "Regenerating..." : "Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${digest?.recommendedActions.length || 0} items</span></div>
        <table class="table">
          ${(digest?.recommendedActions || ["Digest is loading."]).map((item) => `<tr><td><span class="badge lead">Action</span></td><td>${item}</td></tr>`).join("")}
          ${isAdvancedMode() ? `<tr><td><span class="badge invoice">Advanced</span></td><td>${state.rules.filter((rule) => rule.on).length} rules are currently enabled.</td></tr>` : ""}
        </table>
      </div>
    </div>
  `;
}

function renderImport() {
  const steps = [
    ["Connect Microsoft 365", "Admin authorizes access to selected Outlook mailboxes, folders, categories, and contacts.", "Connect"],
    ["Import mailbox structure", "Courio detects folders, categories, shared mailboxes, frequent senders, and existing work habits.", "Import"],
    ["Generate workflow suggestions", "Suggested triage rules are created but remain inactive until approved.", "View suggestions"],
    ["Run in observation mode", "The system previews actions for one week before any mailbox changes are enabled.", "Enable"]
  ];

  document.querySelector("#import").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Microsoft 365 setup import</h2><span>Designed to reduce switching friction</span></div>
      <div class="workflow">
        ${steps.map((step, index) => `
          <div class="step">
            <div class="step-num">${index + 1}</div>
            <div><strong>${step[0]}</strong><p>${step[1]}</p></div>
            <button class="btn subtle" disabled title="Real Microsoft 365 setup is intentionally unavailable in this fake/local prototype.">
              Demo only
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTriage() {
  const employeeById = Object.fromEntries(state.employees.map((employee) => [employee.id, employee]));
  const filteredEmails = state.emails.filter((email) => {
    if (state.triageFilter === "urgent") return email.status !== "Done" && email.urgency === "High";
    if (state.triageFilter === "invoices") return email.status !== "Done" && email.category === "Accounting";
    return true;
  });
  const table = state.loading.emails
    ? `<div class="loading">Loading mock inbox...</div>`
    : filteredEmails.length === 0
      ? `<div class="empty-state">${state.triageFilter === "urgent" ? "No urgent emails. You are caught up on high-priority work." : state.triageFilter === "invoices" ? "No invoice emails are waiting for review." : "No emails are available in this local demo."}</div>`
    : `<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${filteredEmails.map((email) => `
            <tr>
              <td>${email.subject}</td>
              <td>${email.sender}<br><small>${email.senderEmail || ""}</small></td>
              <td><span class="badge ${badgeClass(email.category)}">${email.category}</span><br><small>${email.urgency || "Medium"} urgency - ${email.confidence || 80}% confidence</small></td>
              <td>${employeeById[email.assignedTo]?.name || "Unassigned"}</td>
              <td>${email.workflowLabel || "Not started"}</td>
              <td><span class="badge ${email.status === "Done" ? "done" : ""}">${email.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${email.id}" ${isBusy(`review-${email.id}`) ? "disabled" : ""}>${isBusy(`review-${email.id}`) ? "Opening..." : "Review"}</button>
                ${email.status === "Done"
                  ? `<span class="status-text">Complete</span>`
                  : email.requiresDraft
                    ? `<span class="status-text" title="Generate, review, and approve a draft to complete this workflow.">Draft required</span>`
                    : `<span class="status-text" title="Open the email and review its details before completing the workflow.">Review before completing</span>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#triage").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[
          ["all", "All inbox"],
          ["urgent", "Urgent"],
          ["invoices", "Invoices"]
        ].map(([value, label]) => `<button class="${state.triageFilter === value ? "active" : ""}" data-triage-filter="${value}">${label}</button>`).join("")}
      </div>
      ${table}
    </div>
  `;
}

function renderDrawer() {
  const root = document.querySelector("#drawerRoot");
  if (state.selectedEmployee) {
    renderEmployeeDrawer(root);
    return;
  }

  if (state.selectedRule) {
    renderRuleDrawer(root);
    return;
  }

  if (state.selectedDraft) {
    renderDraftDrawer(root);
    return;
  }

  if (!state.selectedEmail) {
    root.innerHTML = "";
    return;
  }

  const email = state.selectedEmail;
  const emailDone = email.status === "Done";
  const assignedEmployee = state.employees.find((employee) => employee.id === email.assignedTo);
  const categories = ["Client complaint", "Accounting", "Sales", "Documents", "Missing documents", "Scheduling", "General"];

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${badgeClass(email.category)}">${email.category}</div>
          <h2>${email.subject}</h2>
          <p>${email.sender} - ${email.senderEmail}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${email.body}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${email.id}">
            ${categories.map((category) => `<option value="${category}" ${category === email.category ? "selected" : ""}>${category}</option>`).join("")}
          </select>
        </label>
        <label>Assigned employee
          <select data-email-assignee="${email.id}">
            <option value="" ${!email.assignedTo ? "selected" : ""}>Unassigned</option>
            ${state.employees.map((employee) => `<option value="${employee.id}" ${employee.id === email.assignedTo ? "selected" : ""}>${employee.name} - ${employee.department}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${email.urgency}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${email.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${email.status}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${assignedEmployee?.name || "Unassigned"}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${emailDone ? "This email is completed. Draft actions are locked unless the email is reopened later." : email.draftId ? `${email.draftReadyForHumanSend ? "Draft approved and ready for human send." : `Draft exists: ${email.draftStatusLabel}.`} One email uses one draft record.` : "No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${email.suggestedAction}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${state.showExplanation ? "Hide" : "Show"}</button>
        </div>
        ${state.showExplanation ? `<div class="preview">${email.explanation}</div>` : ""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${email.messages.map((message) => `<li>${message}</li>`).join("")}</ul>
      </div>

      ${state.summary ? `<div class="drawer-section"><h3>Summary</h3><div class="preview">${state.summary}</div></div>` : ""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${email.id}" ${isBusy(`summary-${email.id}`) ? "disabled" : ""}>${isBusy(`summary-${email.id}`) ? "Summarizing..." : "Summarize"}</button>
        ${email.canOpenDraft ? `<button class="btn subtle" data-open-email-draft="${email.id}" ${isBusy(`open-email-draft-${email.id}`) ? "disabled" : ""}>${email.draftActionLabel}</button>` : `<button class="btn subtle" data-generate-draft="${email.id}" ${!email.canGenerateDraft || isBusy(`draft-${email.id}`) ? `disabled title="${email.completionBlocker || "Draft action is unavailable."}"` : ""}>${isBusy(`draft-${email.id}`) ? "Drafting..." : email.draftActionLabel}</button>`}
        ${emailDone
          ? `<span class="status-text">Workflow complete</span>`
          : email.requiresDraft
            ? `<span class="status-text">Approving the draft completes this workflow.</span>`
            : `<button class="btn success" data-done-email="${email.id}" ${isBusy(`done-${email.id}`) ? "disabled" : ""}>${isBusy(`done-${email.id}`) ? "Saving..." : "Mark complete"}</button>`}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `;
}

function renderConfirmModal() {
  const root = document.querySelector("#modalRoot");
  if (!state.confirmDialog) {
    root.innerHTML = "";
    return;
  }

  const dialog = state.confirmDialog;
  root.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${dialog.title}</h2>
      <p>${dialog.message}</p>
      <div class="actions">
        <button class="btn ${dialog.tone === "danger" ? "danger" : "primary"}" data-confirm-primary>${dialog.primaryLabel}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `;
}

async function requestDone(emailId) {
  state.confirmDialog = await getWorkflowCompletionCheck(emailId);
  render();
}

async function openGeneratedDraft(emailId) {
  const draft = await generateDraftReply(emailId);
  state.drafts = await listDrafts();
  await refreshEmails(emailId);
  state.selectedDraft = await getDraftDetail(draft.id);
  state.selectedEmail = null;
}

async function completeEmailWorkflow(emailId) {
  await markEmailDone(emailId);
  await refreshEmails(emailId);
  state.drafts = await listDrafts();
  state.activity = await listActivity();
  state.digest = await generateMorningDigest();
}

async function approveDraftWorkflow(draftId) {
  await approveDraft(draftId);
  state.drafts = await listDrafts();
  state.emails = await listEmails();
  state.activity = await listActivity();
  state.digest = await generateMorningDigest();
  state.selectedDraftIds = state.selectedDraftIds.filter((id) => id !== draftId);
  if (state.selectedDraft?.id === draftId) {
    state.selectedDraft = await getDraftDetail(draftId);
  }
}

function renderDraftDrawer(root) {
  const draft = state.selectedDraft;
  const sourceEmail = draft.sourceEmail || {};
  const sourceDone = sourceEmail.status === "Done";

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${draft.isReadyForHumanSend ? "done" : "pending"}">${draft.statusLabel}</div>
          <h2>${draft.title}</h2>
          <p>Source: ${sourceEmail.subject || draft.source}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${sourceEmail.sender || "Mock sender"}</strong><br>
          ${sourceEmail.senderEmail || ""}<br><br>
          ${sourceEmail.body || "This draft is based on a local mock email."}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${sourceDone ? "Completed" : draft.statusLabel}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${draft.risk || "Low"}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${draft.confidence || sourceEmail.confidence || 80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${sourceEmail.suggestedAction || draft.title}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${draft.text}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        ${sourceDone
          ? `<span class="status-text">Workflow complete. This draft is ready for human send.</span>`
          : `
            <button class="btn primary" data-save-draft="${draft.id}" ${isBusy(`save-${draft.id}`) ? "disabled" : ""}>${isBusy(`save-${draft.id}`) ? "Saving..." : "Save changes"}</button>
            <button class="btn success" data-approve-draft="${draft.id}" ${!draft.canApprove || isBusy(`approve-${draft.id}`) ? `disabled title="${draft.approvalBlocker || "Save the reviewed draft before approving."}"` : ""}>${isBusy(`approve-${draft.id}`) ? "Approving..." : "Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `;
}

function renderRuleDrawer(root) {
  const rule = state.selectedRule;
  const categories = ["Client complaint", "Accounting", "Sales", "Documents", "Missing documents", "Scheduling", "General"];

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Rule editor">
      <div class="drawer-header">
        <div>
          <div class="badge ${rule.on ? "done" : "pending"}">${rule.on ? "Enabled" : "Disabled"}</div>
          <h2>Edit rule</h2>
          <p>Rules remain fake and local in this prototype.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Rule name<input data-rule-field="title" value="${rule.title}"></label>
        <label>Description<textarea data-rule-field="desc">${rule.desc}</textarea></label>
        <label>Category
          <select data-rule-field="category">
            ${categories.map((category) => `<option value="${category}" ${category === rule.category ? "selected" : ""}>${category}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${rule.confidence || 80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${rule.matches?.length || 0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${rule.explanation || "This rule is based on repeated wording patterns in the mock inbox."}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(rule.matches || ["No sample matches yet."]).map((match) => `<li>${match}</li>`).join("")}</ul>
      </div>

      ${isAdvancedMode() ? `<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${state.settings.confidenceThreshold || 80}%. No mailbox changes happen in the prototype.</div></div>` : ""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${rule.id}" ${isBusy(`save-rule-${rule.id}`) ? "disabled" : ""}>${isBusy(`save-rule-${rule.id}`) ? "Saving..." : "Save rule"}</button>
        <button class="btn danger" data-delete-rule="${rule.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `;
}

function renderEmployeeDrawer(root) {
  const employee = state.selectedEmployee;
  const isNew = employee.id === "new";

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${isNew ? "Add employee" : "Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${isNew ? "Add employee" : "Edit employee"}</h2>
          <p>${isNew ? "Add a local demo team member." : `Reviewing ${employee.name}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${escapeHtml(employee.name || "")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${escapeHtml(employee.email || "")}"></label>
        <label>Title<input data-employee-field="title" value="${escapeHtml(employee.title || "")}"></label>
        <label>Department<input data-employee-field="department" value="${escapeHtml(employee.department || "")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${employee.id}" ${isBusy(`save-employee-${employee.id}`) ? "disabled" : ""}>${isBusy(`save-employee-${employee.id}`) ? "Saving..." : isNew ? "Add employee" : "Save changes"}</button>
        ${isNew ? "" : `<button class="btn danger" data-delete-employee="${employee.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser.</p>
    </aside>
  `;
}

function renderRules() {
  const query = state.ruleQuery.trim().toLowerCase();
  const filteredRules = state.rules.filter((rule) => !query || `${rule.title} ${rule.desc} ${rule.category}`.toLowerCase().includes(query));
  const content = state.loading.rules
    ? `<div class="loading">Loading suggested rules...</div>`
    : filteredRules.length === 0
      ? `<div class="empty-state">${query ? `No rules match “${escapeHtml(state.ruleQuery)}”. Clear the search to see all local rules.` : "No rules yet. Local rule suggestions will appear here."}</div>`
      : `<div class="grid cols-2">
        ${filteredRules.map((rule) => `
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${rule.title}</div>
                <div class="rule-desc">${rule.desc}</div>
              </div>
              <button class="toggle ${rule.on ? "on" : ""}" aria-label="Toggle ${rule.title}" data-toggle-rule="${rule.id}" ${isBusy(`rule-${rule.id}`) ? "disabled" : ""}></button>
            </div>
            <div class="preview">${rule.impact}</div>
            <div class="preview"><strong>${rule.confidence || 80}% confidence:</strong> ${rule.explanation || "Based on local mock patterns."}</div>
            ${isAdvancedMode() ? `<div class="preview"><strong>Would match:</strong> ${(rule.matches || ["No samples"]).join(", ")}</div>` : ""}
            <div class="actions">
              ${rule.on
                ? `<span class="status-text">In observation</span>`
                : `<button class="btn primary" data-approve-rule="${rule.id}" ${isBusy(`approve-rule-${rule.id}`) ? "disabled" : ""}>${isBusy(`approve-rule-${rule.id}`) ? "Approving..." : "Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${rule.id}" ${isBusy(`edit-rule-${rule.id}`) ? "disabled" : ""}>${isBusy(`edit-rule-${rule.id}`) ? "Opening..." : "Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;

  document.querySelector("#rules").innerHTML = `
    <div class="section-toolbar">
      <div><h2>Suggested rules</h2><span>${filteredRules.length} shown</span></div>
      <div class="list-toolbar">
        <input data-rule-search type="search" value="${escapeHtml(state.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${content}
  `;
}

function renderDrafts() {
  const selectedCount = state.selectedDraftIds.length;
  const lowRiskPendingCount = state.drafts.filter((draft) => draft.risk !== "High" && draft.canSelectForBulkApproval).length;
  const lowRiskDisabled = !lowRiskBulkApprovalEnabled();
  const filteredDrafts = state.drafts.filter((draft) => {
    if (state.draftFilter === "needs_approval") return draft.canSelectForBulkApproval;
    if (state.draftFilter === "ready") return draft.isReadyForHumanSend;
    return true;
  });
  const content = state.loading.drafts
    ? `<div class="loading">Loading draft queue...</div>`
    : filteredDrafts.length === 0
      ? `<div class="empty-state">${state.draftFilter === "needs_approval" ? "No drafts need approval. Reviewed drafts will appear here when they are ready." : state.draftFilter === "ready" ? "No drafts are ready for human send yet." : "No drafts are available in this local demo."}</div>`
    : `<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${filteredDrafts.map((draft) => `
            <tr>
              <td><input type="checkbox" data-select-draft="${draft.id}" ${state.selectedDraftIds.includes(draft.id) ? "checked" : ""} ${!draft.canSelectForBulkApproval ? `disabled title="${draft.approvalBlocker || "Review and save this draft first."}"` : ""}></td>
              <td>${draft.title}</td>
              <td>${draft.source}</td>
              <td><span class="badge ${draft.risk === "High" ? "urgent" : "done"}">${draft.risk || "Low"}</span></td>
              <td><span class="badge ${draft.isReadyForHumanSend ? "done" : "pending"}">${draft.statusLabel}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${draft.id}" ${isBusy(`review-draft-${draft.id}`) ? "disabled" : ""}>${isBusy(`review-draft-${draft.id}`) ? "Opening..." : "Review"}</button>
                ${draft.isReadyForHumanSend
                  ? `<span class="status-text">Workflow complete</span>`
                  : `<button class="btn success" data-approve-draft="${draft.id}" ${!draft.canApprove || isBusy(`approve-${draft.id}`) ? `disabled title="${draft.approvalBlocker || "Review and save this draft first."}"` : ""}>${isBusy(`approve-${draft.id}`) ? "Approving..." : "Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#drafts").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[
          ["all", "All drafts"],
          ["needs_approval", "Needs approval"],
          ["ready", "Ready"]
        ].map(([value, label]) => `<button class="${state.draftFilter === value ? "active" : ""}" data-draft-filter="${value}">${label}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${selectedCount === 0 || isBusy("approve-selected") ? `disabled title="${selectedCount === 0 ? "Select at least one reviewed and saved draft." : ""}"` : ""}>${isBusy("approve-selected") ? "Approving..." : `Approve selected (${selectedCount})`}</button>
        <button class="btn subtle" data-approve-low-risk ${lowRiskDisabled || lowRiskPendingCount === 0 || isBusy("approve-low-risk") ? `disabled title="${lowRiskDisabled ? "Enable low-risk bulk approval in Advanced workspace settings." : lowRiskPendingCount === 0 ? "No reviewed low-risk drafts are ready for approval." : ""}"` : ""}>${lowRiskDisabled ? "Low-risk bulk approval disabled" : isBusy("approve-low-risk") ? "Approving..." : `Approve all low-risk (${lowRiskPendingCount})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${lowRiskDisabled ? `<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>` : ""}
      ${content}
    </div>
  `;
}

function renderAssistant() {
  const root = document.querySelector("#assistantRoot");
  const messages = state.assistantMessages.length
    ? state.assistantMessages
    : [{ id: "assistant-loading", role: "assistant", text: "Loading assistant history..." }];

  root.innerHTML = `
    <div class="assistant ${state.assistantOpen ? "open" : ""}">
      ${state.assistantOpen ? `
        <div class="assistant-panel" aria-label="Courio assistant">
          <div class="assistant-header">
            <div>
              <strong>Courio assistant</strong>
              <span>Fake/local commands</span>
            </div>
            <button class="btn subtle" data-assistant-toggle>Close</button>
          </div>
          <div class="assistant-messages">
            ${messages.map((message) => `
              <div class="assistant-message ${message.role}">
                ${escapeHtml(message.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${isBusy("assistant") ? "disabled" : ""}>
            <button class="btn primary" type="submit" ${isBusy("assistant") ? "disabled" : ""}>${isBusy("assistant") ? "Working..." : "Send"}</button>
          </form>
        </div>
      ` : ""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `;
}

async function applyAssistantAction(action) {
  if (!action) return;

  if (action.type === "show_triage") {
    state.tab = "triage";
    state.triageFilter = action.filter || "all";
    state.selectedDraft = null;
    state.selectedRule = null;
    render();
    return;
  }

  if (action.type === "show_drafts") {
    state.tab = "drafts";
    state.draftFilter = action.filter || "all";
    state.selectedEmail = null;
    state.selectedRule = null;
    render();
    return;
  }

  if (action.type === "generate_digest") {
    state.digest = action.digest || await generateMorningDigest();
    state.tab = "dashboard";
    render();
    return;
  }

  if (action.type === "explain_email") {
    state.selectedEmail = await getEmailThread(action.emailId);
    state.selectedDraft = null;
    state.selectedRule = null;
    state.summary = "";
    state.showExplanation = true;
    state.tab = "triage";
    state.triageFilter = "all";
    render();
    return;
  }

  if (action.type === "show_rule") {
    state.rules = await listRules();
    state.selectedRule = state.rules.find((rule) => rule.id === action.ruleId) || null;
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.tab = "rules";
    render();
    return;
  }

  if (action.type === "reset_demo_data") {
    state.confirmDialog = {
      type: "reset-demo",
      title: "Reset demo data?",
      message: "This clears all local Courio changes and restores the original fake demo data.",
      primaryLabel: "Reset demo data",
      tone: "danger"
    };
    render();
  }
}

function renderAdmin() {
  document.querySelector("#admin").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${state.settings.companyName || "Demo PME Inc."}"></label>
          <label>Mode
            <select data-setting="mode">
              ${["Simple", "Advanced"].map((mode) => `<option ${mode === state.settings.mode ? "selected" : ""}>${mode}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${state.settings.escalationRecipient || "owner@company.ca"}"></label>
          ${isAdvancedMode() ? `
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only", "Drafts allowed, no auto-send", "Auto-categorize after approval"].map((mode) => `<option ${mode === state.settings.defaultMode ? "selected" : ""}>${mode}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${state.settings.confidenceThreshold || "80"}"></label>
          <label>Observation days<input data-setting="observationDays" value="${state.settings.observationDays || "7"}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes", "No"].map((value) => `<option ${value === state.settings.allowLowRiskBulkApproval ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          ` : `<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>`}
          <button class="btn primary" data-save-settings ${isBusy("settings") ? "disabled" : ""}>${isBusy("settings") ? "Saving..." : "Save settings"}</button>
          <button class="btn danger" data-reset-demo ${isBusy("reset-demo") ? "disabled" : ""}>${isBusy("reset-demo") ? "Resetting..." : "Reset Demo Data"}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Security controls</h2><span>Client-facing language</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enabled by default</td></tr>
          <tr><td>Audit log</td><td>All approved actions recorded</td></tr>
          <tr><td>Admin disconnect</td><td>Available at any time</td></tr>
          <tr><td>Least-privilege access</td><td>Mailbox permissions reviewed during setup</td></tr>
          <tr><td>Current mode</td><td>${state.settings.mode || "Simple"}</td></tr>
        </table>
      </div>
      <div class="panel">
        <div class="panel-title">
          <div><h2>Employee directory</h2><span>Mock team</span></div>
          <button class="btn primary" data-add-employee>Add employee</button>
        </div>
        ${state.employees.length === 0
          ? `<div class="empty-state">No employees yet. Add a team member to make triage assignments available.</div>`
          : `<table class="table">
              <thead><tr><th>Name</th><th>Role</th><th>Department</th><th></th></tr></thead>
              <tbody>
                ${state.employees.map((employee) => `
                  <tr>
                    <td>${employee.name}<br><small>${employee.email}</small></td>
                    <td>${employee.title}</td>
                    <td>${employee.department}</td>
                    <td><button class="btn subtle" data-edit-employee="${employee.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recent activity</h2><span>Local audit preview</span></div>
        ${state.activity.length === 0
          ? `<div class="empty-state">No activity yet. Completed workflows and team changes will appear here.</div>`
          : `<div class="activity-list">
              ${state.activity.slice(0, 8).map((item) => `
                <div class="activity-item">
                  <span>${escapeHtml(item.label || "Local action completed")}</span>
                  <time>${new Date(item.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `;
}

function badgeClass(label) {
  if (label === "Urgent" || label === "Client complaint") return "urgent";
  if (label === "Accounting" || label === "Documents" || label === "Missing documents") return "invoice";
  if (label === "Sales") return "lead";
  return "";
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.assistantToggle !== undefined) {
    state.assistantOpen = !state.assistantOpen;
    render();
    return;
  }

  if (target.dataset.confirmCancel !== undefined) {
    state.confirmDialog = null;
    render();
    return;
  }

  if (target.dataset.confirmPrimary !== undefined) {
    const dialog = state.confirmDialog;
    state.confirmDialog = null;

    if (dialog?.type === "generate-draft") {
      await runAction(`draft-${dialog.emailId}`, async () => {
        await openGeneratedDraft(dialog.emailId);
      }, "Draft opened. Existing edits were preserved.");
      return;
    }

    if (dialog?.type === "review-draft") {
      await runAction(`review-draft-${dialog.draftId}`, async () => {
        state.selectedDraft = await getDraftDetail(dialog.draftId);
        state.selectedEmail = null;
        state.summary = "";
        state.showExplanation = false;
      }, "Draft opened for review.");
      return;
    }

    if (dialog?.type === "review-email") {
      await runAction(`review-${dialog.emailId}`, async () => {
        state.selectedEmail = await getEmailThread(dialog.emailId);
        state.emails = await listEmails();
        state.selectedDraft = null;
        state.selectedRule = null;
        state.selectedEmployee = null;
        state.summary = "";
        state.showExplanation = false;
      }, "Email opened for review.");
      return;
    }

    if (dialog?.type === "mark-done") {
      await runAction(`done-${dialog.emailId}`, async () => {
        await completeEmailWorkflow(dialog.emailId);
      }, "Email marked done.");
      return;
    }

    if (dialog?.type === "reset-demo") {
      await runAction("reset-demo", async () => {
        await resetDemoData();
        window.location.reload();
      });
      return;
    }

    if (dialog?.type === "delete-rule") {
      await runAction(`delete-rule-${dialog.ruleId}`, async () => {
        await deleteRule(dialog.ruleId);
        state.rules = await listRules();
        state.activity = await listActivity();
        state.selectedRule = null;
      }, "Rule deleted locally.");
      return;
    }

    if (dialog?.type === "delete-employee") {
      await runAction(`delete-employee-${dialog.employeeId}`, async () => {
        await deleteEmployee(dialog.employeeId);
        state.employees = await listEmployees();
        state.emails = await listEmails();
        state.activity = await listActivity();
        state.selectedEmployee = null;
      }, "Employee removed and assigned emails returned to Unassigned.");
      return;
    }
  }

  if (target.dataset.tab) {
    switchTab(target.dataset.tab);
  }

  if (target.dataset.tabTarget) {
    switchTab(target.dataset.tabTarget);
  }

  if (target.dataset.triageFilter) {
    state.triageFilter = target.dataset.triageFilter;
    render();
  }

  if (target.dataset.draftFilter) {
    state.draftFilter = target.dataset.draftFilter;
    render();
  }

  if (target.dataset.action === "digest") {
    await runAction("digest", async () => {
      state.digest = await generateMorningDigest();
    }, "Morning digest regenerated from local demo data.");
  }

  if (target.dataset.reviewEmail) {
    const id = target.dataset.reviewEmail;
    await runAction(`review-${id}`, async () => {
      state.selectedEmail = await getEmailThread(id);
      state.emails = await listEmails();
      state.selectedDraft = null;
      state.selectedRule = null;
      state.selectedEmployee = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Message thread opened.");
  }

  if (target.dataset.reviewDraft) {
    const id = target.dataset.reviewDraft;
    await runAction(`review-draft-${id}`, async () => {
      state.selectedDraft = await getDraftDetail(id);
      state.selectedEmail = null;
      state.selectedRule = null;
      state.selectedEmployee = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Draft opened for review.");
  }

  if (target.dataset.openEmailDraft) {
    const id = target.dataset.openEmailDraft;
    await runAction(`open-email-draft-${id}`, async () => {
      state.selectedDraft = await getDraftForEmail(id);
      state.selectedEmail = null;
      state.selectedRule = null;
      state.selectedEmployee = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Draft opened for editing.");
  }

  if (target.dataset.closeDrawer !== undefined) {
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    state.summary = "";
    state.showExplanation = false;
    render();
  }

  if (target.dataset.toggleExplanation !== undefined) {
    state.showExplanation = !state.showExplanation;
    render();
  }

  if (target.dataset.summaryEmail) {
    const id = target.dataset.summaryEmail;
    await runAction(`summary-${id}`, async () => {
      state.summary = await summarizeThread(id);
    }, "Thread summary generated.");
  }

  if (target.dataset.generateDraft) {
    const id = target.dataset.generateDraft;
    await runAction(`draft-${id}`, async () => {
      await openGeneratedDraft(id);
    }, "Draft opened. Existing edits were preserved.");
  }

  if (target.dataset.saveDraft) {
    const id = target.dataset.saveDraft;
    const editor = document.querySelector("[data-draft-editor]");
    await runAction(`save-${id}`, async () => {
      await saveDraft(id, editor.value);
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      if (state.selectedDraft?.id === id) {
        state.selectedDraft = await getDraftDetail(id);
      }
    }, "Draft saved locally.");
  }

  if (target.dataset.doneEmail) {
    const id = target.dataset.doneEmail;
    await runAction(`check-done-${id}`, async () => {
      await requestDone(id);
    });
  }

  if (target.dataset.toggleRule) {
    const id = target.dataset.toggleRule;
    await runAction(`rule-${id}`, async () => {
      await toggleRule(id);
      state.rules = await listRules();
    }, "Rule preview state updated.");
  }

  if (target.dataset.approveRule) {
    const id = target.dataset.approveRule;
    await runAction(`approve-rule-${id}`, async () => {
      const rule = state.rules.find((item) => item.id === id);
      if (!rule.on) await toggleRule(id);
      state.rules = await listRules();
    }, "Rule approved for observation mode.");
  }

  if (target.dataset.editRule) {
    const id = target.dataset.editRule;
    await runAction(`edit-rule-${id}`, async () => {
      state.selectedRule = state.rules.find((rule) => rule.id === id);
      state.selectedEmail = null;
      state.selectedDraft = null;
      state.selectedEmployee = null;
    }, "Rule opened for local editing.");
  }

  if (target.dataset.saveRule) {
    const id = target.dataset.saveRule;
    const fields = Object.fromEntries(
      [...document.querySelectorAll("[data-rule-field]")].map((input) => [input.dataset.ruleField, input.value])
    );
    await runAction(`save-rule-${id}`, async () => {
      await updateRule(id, fields);
      state.rules = await listRules();
      state.selectedRule = state.rules.find((rule) => rule.id === id);
    }, "Rule saved locally.");
  }

  if (target.dataset.deleteRule) {
    const id = target.dataset.deleteRule;
    const rule = state.rules.find((item) => item.id === id);
    state.confirmDialog = {
      type: "delete-rule",
      ruleId: id,
      title: "Delete this rule?",
      message: `Delete “${rule?.title || "this rule"}” from the local demo?`,
      primaryLabel: "Delete rule",
      tone: "danger"
    };
    render();
  }

  if (target.dataset.addEmployee !== undefined) {
    state.selectedEmployee = {
      id: "new",
      name: "",
      email: "",
      title: "",
      department: ""
    };
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    render();
  }

  if (target.dataset.editEmployee) {
    state.selectedEmployee = state.employees.find((employee) => employee.id === target.dataset.editEmployee) || null;
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    render();
  }

  if (target.dataset.saveEmployee) {
    const id = target.dataset.saveEmployee;
    const fields = Object.fromEntries(
      [...document.querySelectorAll("[data-employee-field]")].map((input) => [input.dataset.employeeField, input.value])
    );
    await runAction(`save-employee-${id}`, async () => {
      const saved = id === "new" ? await createEmployee(fields) : await updateEmployee(id, fields);
      state.employees = await listEmployees();
      state.activity = await listActivity();
      state.selectedEmployee = state.employees.find((employee) => employee.id === saved.id) || null;
    }, id === "new" ? "Employee added locally." : "Employee changes saved locally.");
  }

  if (target.dataset.deleteEmployee) {
    const id = target.dataset.deleteEmployee;
    const employee = state.employees.find((item) => item.id === id);
    state.confirmDialog = {
      type: "delete-employee",
      employeeId: id,
      title: "Remove this employee?",
      message: `Remove ${employee?.name || "this employee"}? Their assigned emails will return to Unassigned.`,
      primaryLabel: "Remove employee",
      tone: "danger"
    };
    render();
  }

  if (target.dataset.approveDraft) {
    const id = target.dataset.approveDraft;
    await runAction(`approve-${id}`, async () => {
      await approveDraftWorkflow(id);
    }, "Draft approved and workflow completed. Nothing was sent.");
  }

  if (target.dataset.approveSelected !== undefined) {
    await runAction("approve-selected", async () => {
      await approveDrafts(state.selectedDraftIds);
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      state.activity = await listActivity();
      state.digest = await generateMorningDigest();
      state.selectedDraftIds = [];
    }, "Selected drafts approved and workflows completed. Nothing was sent.");
  }

  if (target.dataset.approveLowRisk !== undefined) {
    if (!lowRiskBulkApprovalEnabled()) {
      toast("Low-risk bulk approval is disabled by workspace settings.", true);
      return;
    }

    await runAction("approve-low-risk", async () => {
      await approveLowRiskDrafts();
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      state.activity = await listActivity();
      state.digest = await generateMorningDigest();
      state.selectedDraftIds = [];
    }, "Low-risk drafts approved and workflows completed. Nothing was sent.");
  }

  if (target.dataset.saveSettings !== undefined) {
    const settings = Object.fromEntries(
      [...document.querySelectorAll("[data-setting]")].map((input) => [input.dataset.setting, input.value])
    );
    await runAction("settings", async () => {
      state.settings = await saveSettings(settings);
    }, "Settings saved locally.");
  }

  if (target.dataset.resetDemo !== undefined) {
    state.confirmDialog = {
      type: "reset-demo",
      title: "Reset demo data?",
      message: "This clears all local Courio changes and restores the original fake demo data.",
      primaryLabel: "Reset demo data",
      tone: "danger"
    };
    render();
  }
});

document.addEventListener("change", async (event) => {
  const target = event.target;

  if (target.dataset.setting === "mode") {
    state.settings.mode = target.value;
    render();
    return;
  }

  if (target.dataset.setting === "allowLowRiskBulkApproval") {
    state.settings.allowLowRiskBulkApproval = target.value;
    render();
    return;
  }

  if (target.dataset.emailCategory) {
    const id = target.dataset.emailCategory;
    await runAction(`category-${id}`, async () => {
      await updateEmailCategory(id, target.value);
      await refreshEmails(id);
    }, "Category updated locally.");
  }

  if (target.dataset.emailAssignee) {
    const id = target.dataset.emailAssignee;
    await runAction(`assign-${id}`, async () => {
      await assignEmail(id, target.value);
      await refreshEmails(id);
    }, "Email assignment updated locally.");
  }

  if (target.dataset.selectDraft) {
    const id = target.dataset.selectDraft;
    state.selectedDraftIds = target.checked
      ? [...new Set([...state.selectedDraftIds, id])]
      : state.selectedDraftIds.filter((draftId) => draftId !== id);
    render();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.ruleSearch === undefined) return;

  state.ruleQuery = target.value;
  renderRules();
  const search = document.querySelector("[data-rule-search]");
  search?.focus();
  search?.setSelectionRange(state.ruleQuery.length, state.ruleQuery.length);
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest(".assistant-form");
  if (!form) return;
  event.preventDefault();

  const input = form.querySelector("[data-assistant-input]");
  const message = input.value.trim();
  if (!message) return;

  await runAction("assistant", async () => {
    const result = await sendAssistantCommand(message, {
      selectedEmailId: state.selectedEmail?.id || null
    });
    state.assistantMessages = result.messages;
    input.value = "";
    await applyAssistantAction(result.action);
  });
});

render();
loadInitialData();
