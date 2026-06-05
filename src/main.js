import "./styles.css";
import { copy } from "./data/mockCopy.js";
import {
  approveDraft,
  generateDraftReply,
  getEmailThread,
  listDrafts,
  listEmails,
  listRules,
  markEmailDone,
  saveDraft,
  summarizeThread,
  toggleRule
} from "./api/mockApi.js";

const app = document.querySelector("#app");

const state = {
  tab: "dashboard",
  emails: [],
  rules: [],
  drafts: [],
  loading: {
    emails: true,
    rules: true,
    drafts: true
  },
  busy: {},
  selectedThread: null,
  summary: "",
  draftPreview: ""
};

app.innerHTML = `
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">BoîteClaire</div>
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
      <div class="aside-note">BoîteClaire connects to Microsoft 365, reads selected mailbox data, and suggests actions. By default, it does not send email or modify mailboxes without approval.</div>
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

async function loadInitialData() {
  try {
    const [emails, rules, drafts] = await Promise.all([listEmails(), listRules(), listDrafts()]);
    state.emails = emails;
    state.rules = rules;
    state.drafts = drafts;
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
        <div class="value">${state.drafts.filter((draft) => draft.status !== "Approved").length || 0}</div>
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
    ["Import mailbox structure", "BoîteClaire detects folders, categories, shared mailboxes, frequent senders, and existing work habits.", "Import"],
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
  const table = state.loading.emails
    ? `<div class="loading">Loading mock inbox...</div>`
    : `<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Suggested action</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${state.emails.map((email) => `
            <tr>
              <td>${email.subject}</td>
              <td>${email.sender}</td>
              <td><span class="badge ${badgeClass(email.category)}">${email.category}</span></td>
              <td>${email.suggestedAction}</td>
              <td><span class="badge ${email.status === "Done" ? "done" : ""}">${email.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${email.id}" ${isBusy(`review-${email.id}`) ? "disabled" : ""}>${isBusy(`review-${email.id}`) ? "Opening..." : "Review"}</button>
                <button class="btn success" data-done-email="${email.id}" ${email.status === "Done" || isBusy(`done-${email.id}`) ? "disabled" : ""}>${isBusy(`done-${email.id}`) ? "Saving..." : "Done"}</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  const thread = state.selectedThread
    ? `<div class="thread-view panel">
        <div class="panel-title"><h2>${state.selectedThread.subject}</h2><span>Mock thread</span></div>
        <ul>${state.selectedThread.messages.map((message) => `<li>${message}</li>`).join("")}</ul>
        ${state.summary ? `<div class="preview"><strong>Summary:</strong> ${state.summary}</div>` : ""}
        ${state.draftPreview ? `<label>Generated draft<textarea data-draft-editor>${state.draftPreview}</textarea></label>` : ""}
        <div class="actions">
          <button class="btn primary" data-summary-email="${state.selectedThread.id}" ${isBusy(`summary-${state.selectedThread.id}`) ? "disabled" : ""}>${isBusy(`summary-${state.selectedThread.id}`) ? "Summarizing..." : "Summarize thread"}</button>
          <button class="btn subtle" data-generate-draft="${state.selectedThread.id}" ${isBusy(`draft-${state.selectedThread.id}`) ? "disabled" : ""}>${isBusy(`draft-${state.selectedThread.id}`) ? "Drafting..." : "Generate draft"}</button>
          <button class="btn success" data-save-draft="${state.selectedThread.id}" ${!state.draftPreview || isBusy(`save-${state.selectedThread.id}`) ? "disabled" : ""}>${isBusy(`save-${state.selectedThread.id}`) ? "Saving..." : "Save draft"}</button>
        </div>
      </div>`
    : "";

  document.querySelector("#triage").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      ${table}
    </div>
    ${thread}
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
  const content = state.loading.drafts
    ? `<div class="loading">Loading draft queue...</div>`
    : `<table class="table">
        <thead><tr><th>Draft</th><th>Source</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${state.drafts.map((draft) => `
            <tr>
              <td>${draft.title}</td>
              <td>${draft.source}</td>
              <td><span class="badge ${draft.status === "Approved" ? "done" : "pending"}">${draft.status}</span></td>
              <td><button class="btn success" data-approve-draft="${draft.id}" ${draft.status === "Approved" || isBusy(`approve-${draft.id}`) ? "disabled" : ""}>${isBusy(`approve-${draft.id}`) ? "Approving..." : "Approve"}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#drafts").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
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
          <label>Company name<input value="Demo PME Inc."></label>
          <label>Default mode<select><option>Observation only</option><option>Drafts allowed, no auto-send</option><option>Auto-categorize after approval</option></select></label>
          <label>Escalation recipient<input value="owner@company.ca"></label>
          <button class="btn primary" data-save-settings ${isBusy("settings") ? "disabled" : ""}>${isBusy("settings") ? "Saving..." : "Save settings"}</button>
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
    </div>
  `;
}

function badgeClass(label) {
  if (label === "Urgent") return "urgent";
  if (label === "Accounting" || label === "Documents") return "invoice";
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
      state.selectedThread = await getEmailThread(id);
      state.summary = "";
      state.draftPreview = "";
    }, "Message thread opened.");
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
      state.draftPreview = await generateDraftReply(id);
    }, "Draft reply generated.");
  }

  if (target.dataset.saveDraft) {
    const id = target.dataset.saveDraft;
    const editor = document.querySelector("[data-draft-editor]");
    await runAction(`save-${id}`, async () => {
      await saveDraft(id, editor.value);
      state.drafts = await listDrafts();
      state.draftPreview = editor.value;
    }, "Draft saved locally.");
  }

  if (target.dataset.doneEmail) {
    const id = target.dataset.doneEmail;
    await runAction(`done-${id}`, async () => {
      await markEmailDone(id);
      state.emails = await listEmails();
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
    }, "Draft approved locally. Nothing was sent.");
  }

  if (target.dataset.saveSettings !== undefined) {
    await runAction("settings", () => new Promise((resolve) => setTimeout(resolve, 550)), "Settings saved locally.");
  }
});

render();
loadInitialData();
