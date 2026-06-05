import "./styles.css";
import { copy } from "./data/mockCopy.js";
import {
  approveDraft,
  approveDrafts,
  approveLowRiskDrafts,
  assignEmail,
  generateDraftReply,
  getDraftDetail,
  getDraftForEmail,
  getSettings,
  getEmailThread,
  listEmployees,
  listDrafts,
  listEmails,
  listRules,
  markEmailDone,
  resetDemoData,
  saveSettings,
  saveDraft,
  summarizeThread,
  toggleRule,
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
  selectedDraftIds: [],
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
        <button class="active" data-tab="dashboard">Overview <small>Today</small></button>
        <button data-tab="import">Setup import <small>Microsoft 365</small></button>
        <button data-tab="triage">Triage <small>Inbox</small></button>
        <button data-tab="rules">Rules <small>Preview</small></button>
        <button data-tab="drafts">Drafts <small>Approval</small></button>
        <button data-tab="admin">Admin <small>Security</small></button>
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
  return draft.status === "Ready for human send" || draft.status === "Approved";
}

function draftForEmail(emailId) {
  return state.drafts.find((draft) => (draft.emailId || draft.id) === emailId);
}

function workflowLabel(email) {
  const draft = draftForEmail(email.id);
  if (email.status === "Done") return "Completed";
  if (draft && isDraftReady(draft)) return "Draft approved";
  if (draft && draft.status === "Saved") return "Draft saved";
  if (draft) return "Draft in review";
  return email.workflowStatus || "Not started";
}

async function loadInitialData() {
  try {
    const [emails, employees, rules, drafts, settings] = await Promise.all([listEmails(), listEmployees(), listRules(), listDrafts(), getSettings()]);
    state.emails = emails;
    state.employees = employees;
    state.rules = rules;
    state.drafts = drafts;
    state.settings = { ...state.settings, ...settings };
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
}

function renderDashboard() {
  const openEmails = state.emails.filter((email) => email.status !== "Done").length;
  document.querySelector("#dashboard").innerHTML = `
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Messages reviewed</div>
        <div class="value">128</div>
        <div class="caption">Estimated 2.4 hours saved today</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${state.drafts.filter((draft) => !isDraftReady(draft)).length || 0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Open priority threads</div>
        <div class="value">${state.loading.emails ? "..." : openEmails}</div>
        <div class="caption">Escalation suggested for 2 accounts</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning summary</h2><span>Generated 8:30 AM</span></div>
        <p class="subtitle">Most activity relates to invoices, missing documents, supplier follow-ups, and quote requests. Two client conversations show negative sentiment and should be reviewed by the owner today.</p>
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" data-action="digest" ${isBusy("digest") ? "disabled" : ""}>${isBusy("digest") ? "Preparing..." : "Prepare owner digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>3 items</span></div>
        <table class="table">
          <tr><td><span class="badge urgent">Urgent</span></td><td>Review unanswered client complaint.</td></tr>
          <tr><td><span class="badge invoice">Accounting</span></td><td>Approve invoice routing rule for suppliers.</td></tr>
          <tr><td><span class="badge lead">Sales</span></td><td>Approve 4 quote-request draft replies.</td></tr>
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
            <button class="btn ${index === 0 ? "primary" : index === 3 ? "success" : "subtle"}" data-import-step="${index}" ${isBusy(`import-${index}`) ? "disabled" : ""}>
              ${isBusy(`import-${index}`) ? "Working..." : step[2]}
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTriage() {
  const employeeById = Object.fromEntries(state.employees.map((employee) => [employee.id, employee]));
  const table = state.loading.emails
    ? `<div class="loading">Loading mock inbox...</div>`
    : `<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${state.emails.map((email) => `
            <tr>
              <td>${email.subject}</td>
              <td>${email.sender}<br><small>${email.senderEmail || ""}</small></td>
              <td><span class="badge ${badgeClass(email.category)}">${email.category}</span><br><small>${email.urgency || "Medium"} urgency - ${email.confidence || 80}% confidence</small></td>
              <td>${employeeById[email.assignedTo]?.name || "Unassigned"}</td>
              <td>${workflowLabel(email)}</td>
              <td><span class="badge ${email.status === "Done" ? "done" : ""}">${email.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${email.id}" ${isBusy(`review-${email.id}`) ? "disabled" : ""}>${isBusy(`review-${email.id}`) ? "Opening..." : "Review"}</button>
                <button class="btn success" data-done-email="${email.id}" ${email.status === "Done" || isBusy(`done-${email.id}`) ? "disabled" : ""}>${email.status === "Done" ? "Completed" : isBusy(`done-${email.id}`) ? "Saving..." : "Done"}</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#triage").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      ${table}
    </div>
  `;
}

function renderDrawer() {
  const root = document.querySelector("#drawerRoot");
  if (state.selectedDraft) {
    renderDraftDrawer(root);
    return;
  }

  if (!state.selectedEmail) {
    root.innerHTML = "";
    return;
  }

  const email = state.selectedEmail;
  const emailDraft = draftForEmail(email.id);
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
          ${emailDone ? "This email is completed. Draft actions are locked unless the email is reopened later." : emailDraft ? `${isDraftReady(emailDraft) ? "Draft approved and ready for human send." : `Draft exists: ${emailDraft.status}.`} One email uses one draft record.` : "No active draft exists for this email."}
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
        ${emailDone ? `<button class="btn subtle" disabled>Draft locked</button>` : emailDraft ? `<button class="btn subtle" data-open-email-draft="${email.id}" ${isBusy(`open-email-draft-${email.id}`) ? "disabled" : ""}>${isDraftReady(emailDraft) ? "View approved draft" : "Edit draft"}</button>` : `<button class="btn subtle" data-generate-draft="${email.id}" ${isBusy(`draft-${email.id}`) ? "disabled" : ""}>${isBusy(`draft-${email.id}`) ? "Drafting..." : "Generate draft"}</button>`}
        <button class="btn success" data-done-email="${email.id}" ${emailDone || isBusy(`done-${email.id}`) ? "disabled" : ""}>${emailDone ? "Completed" : isBusy(`done-${email.id}`) ? "Saving..." : "Mark done"}</button>
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `;
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
          <div class="badge ${isDraftReady(draft) ? "done" : "pending"}">${isDraftReady(draft) ? "Ready for human send" : draft.status}</div>
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
        <div class="mini-stat"><span>Status</span><strong>${sourceDone ? "Completed" : isDraftReady(draft) ? "Ready for human send" : draft.status}</strong></div>
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
        <button class="btn primary" data-save-draft="${draft.id}" ${sourceDone || isBusy(`save-${draft.id}`) ? "disabled" : ""}>${sourceDone ? "Completed" : isBusy(`save-${draft.id}`) ? "Saving..." : "Save changes"}</button>
        <button class="btn success" data-approve-draft="${draft.id}" ${sourceDone || isDraftReady(draft) || isBusy(`approve-${draft.id}`) ? "disabled" : ""}>${sourceDone ? "Completed" : isBusy(`approve-${draft.id}`) ? "Approving..." : "Approve"}</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval only marks this draft as ready for a person to send. Courio never sends email.</p>
    </aside>
  `;
}

function renderRules() {
  const content = state.loading.rules
    ? `<div class="loading">Loading suggested rules...</div>`
    : `<div class="grid cols-2">
        ${state.rules.map((rule) => `
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${rule.title}</div>
                <div class="rule-desc">${rule.desc}</div>
              </div>
              <button class="toggle ${rule.on ? "on" : ""}" aria-label="Toggle ${rule.title}" data-toggle-rule="${rule.id}" ${isBusy(`rule-${rule.id}`) ? "disabled" : ""}></button>
            </div>
            <div class="preview">${rule.impact}</div>
            <div class="actions">
              <button class="btn primary" data-approve-rule="${rule.id}" ${isBusy(`approve-rule-${rule.id}`) ? "disabled" : ""}>${isBusy(`approve-rule-${rule.id}`) ? "Approving..." : "Approve for observation"}</button>
              <button class="btn subtle" data-edit-rule="${rule.id}">Edit</button>
            </div>
          </div>
        `).join("")}
      </div>`;

  document.querySelector("#rules").innerHTML = content;
}

function renderDrafts() {
  const selectedCount = state.selectedDraftIds.length;
  const lowRiskPendingCount = state.drafts.filter((draft) => draft.risk !== "High" && draft.sourceEmailStatus !== "Done" && !isDraftReady(draft)).length;
  const content = state.loading.drafts
    ? `<div class="loading">Loading draft queue...</div>`
    : `<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${state.drafts.map((draft) => `
            <tr>
              <td><input type="checkbox" data-select-draft="${draft.id}" ${state.selectedDraftIds.includes(draft.id) ? "checked" : ""} ${draft.sourceEmailStatus === "Done" || isDraftReady(draft) ? "disabled" : ""}></td>
              <td>${draft.title}</td>
              <td>${draft.source}</td>
              <td><span class="badge ${draft.risk === "High" ? "urgent" : "done"}">${draft.risk || "Low"}</span></td>
              <td><span class="badge ${isDraftReady(draft) ? "done" : "pending"}">${isDraftReady(draft) ? "Ready for human send" : draft.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${draft.id}" ${isBusy(`review-draft-${draft.id}`) ? "disabled" : ""}>${isBusy(`review-draft-${draft.id}`) ? "Opening..." : "Review"}</button>
                <button class="btn success" data-approve-draft="${draft.id}" ${draft.sourceEmailStatus === "Done" || isDraftReady(draft) || isBusy(`approve-${draft.id}`) ? "disabled" : ""}>${draft.sourceEmailStatus === "Done" ? "Completed" : isBusy(`approve-${draft.id}`) ? "Approving..." : "Approve"}</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#drafts").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${selectedCount === 0 || isBusy("approve-selected") ? "disabled" : ""}>${isBusy("approve-selected") ? "Approving..." : `Approve selected (${selectedCount})`}</button>
        <button class="btn subtle" data-approve-low-risk ${lowRiskPendingCount === 0 || isBusy("approve-low-risk") ? "disabled" : ""}>${isBusy("approve-low-risk") ? "Approving..." : `Approve all low-risk (${lowRiskPendingCount})`}</button>
        <span class="mode">Approval only marks drafts ready for human send</span>
      </div>
      ${content}
    </div>
  `;
}

function renderAdmin() {
  document.querySelector("#admin").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${state.settings.companyName || "Demo PME Inc."}"></label>
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only", "Drafts allowed, no auto-send", "Auto-categorize after approval"].map((mode) => `<option ${mode === state.settings.defaultMode ? "selected" : ""}>${mode}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${state.settings.escalationRecipient || "owner@company.ca"}"></label>
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
        </table>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Employee directory</h2><span>Mock team</span></div>
        <table class="table">
          <thead><tr><th>Name</th><th>Role</th><th>Department</th></tr></thead>
          <tbody>
            ${state.employees.map((employee) => `
              <tr>
                <td>${employee.name}<br><small>${employee.email}</small></td>
                <td>${employee.title}</td>
                <td>${employee.department}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
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

  if (target.dataset.tab) {
    switchTab(target.dataset.tab);
  }

  if (target.dataset.tabTarget) {
    switchTab(target.dataset.tabTarget);
  }

  if (target.dataset.action === "digest") {
    await runAction("digest", () => new Promise((resolve) => setTimeout(resolve, 650)), "Owner digest prepared in mock mode.");
  }

  if (target.dataset.importStep) {
    const key = `import-${target.dataset.importStep}`;
    await runAction(key, () => new Promise((resolve) => setTimeout(resolve, 650)), "Setup step completed in mock mode.");
  }

  if (target.dataset.reviewEmail) {
    const id = target.dataset.reviewEmail;
    await runAction(`review-${id}`, async () => {
      state.selectedEmail = await getEmailThread(id);
      state.selectedDraft = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Message thread opened.");
  }

  if (target.dataset.reviewDraft) {
    const id = target.dataset.reviewDraft;
    await runAction(`review-draft-${id}`, async () => {
      state.selectedDraft = await getDraftDetail(id);
      state.selectedEmail = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Draft opened for review.");
  }

  if (target.dataset.openEmailDraft) {
    const id = target.dataset.openEmailDraft;
    await runAction(`open-email-draft-${id}`, async () => {
      state.selectedDraft = await getDraftForEmail(id);
      state.selectedEmail = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Draft opened for editing.");
  }

  if (target.dataset.closeDrawer !== undefined) {
    state.selectedEmail = null;
    state.selectedDraft = null;
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
      const draft = await generateDraftReply(id);
      state.drafts = await listDrafts();
      await refreshEmails(id);
      state.selectedDraft = await getDraftDetail(draft.id);
      state.selectedEmail = null;
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
    await runAction(`done-${id}`, async () => {
      await markEmailDone(id);
      await refreshEmails(id);
    }, "Email marked done.");
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
    toast("Opened rule editor in mock mode.");
  }

  if (target.dataset.approveDraft) {
    const id = target.dataset.approveDraft;
    await runAction(`approve-${id}`, async () => {
      await approveDraft(id);
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      state.selectedDraftIds = state.selectedDraftIds.filter((draftId) => draftId !== id);
      if (state.selectedDraft?.id === id) {
        state.selectedDraft = await getDraftDetail(id);
      }
    }, "Draft marked ready for human send. Nothing was sent.");
  }

  if (target.dataset.approveSelected !== undefined) {
    await runAction("approve-selected", async () => {
      await approveDrafts(state.selectedDraftIds);
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      state.selectedDraftIds = [];
    }, "Selected drafts marked ready for human send. Nothing was sent.");
  }

  if (target.dataset.approveLowRisk !== undefined) {
    await runAction("approve-low-risk", async () => {
      await approveLowRiskDrafts();
      state.drafts = await listDrafts();
      state.emails = await listEmails();
      state.selectedDraftIds = [];
    }, "Low-risk drafts marked ready for human send. Nothing was sent.");
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
    await runAction("reset-demo", async () => {
      await resetDemoData();
      window.location.reload();
    }, "Demo data reset.");
  }
});

document.addEventListener("change", async (event) => {
  const target = event.target;

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

render();
loadInitialData();
