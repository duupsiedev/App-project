import "./styles.css";
import { createTranslator, getPageCopy, normalizeLanguage } from "./i18n/translations.js";
import { renderAssistantView } from "./ui/assistantView.js";
import { escapeHtml, escapeList } from "./ui/helpers.js";
import {
  approveDraft,
  approveDrafts,
  approveLowRiskDrafts,
  archiveEmails,
  assignEmail,
  createCategory,
  createEmployee,
  deleteEmployee,
  deleteRule,
  generateMorningDigest,
  generateDraftReply,
  getDraftDetail,
  getDraftForEmail,
  getSettings,
  getDemoSession,
  getEmailThread,
  getSetupImportPreview,
  listActivity,
  listAssistantMessages,
  listCategories,
  listDemoAccounts,
  listEmployees,
  listDrafts,
  listEmails,
  listRules,
  listTasks,
  listComposeDrafts,
  resetDemoData,
  saveSettings,
  saveDraft,
  saveComposeDraft,
  sendAssistantCommand,
  setDemoSession,
  summarizeThread,
  toggleCategoryActive,
  toggleRule,
  updateCategory,
  updateEmployee,
  updateRule,
  updateEmailCategory,
  updateTask,
  logoutDemoSession
} from "./api/mockApi.js";

const app = document.querySelector("#app");
const VALID_TABS = new Set(["dashboard", "import", "triage", "tasks", "compose", "rules", "drafts", "admin"]);

const state = {
  tab: "dashboard",
  demoAccounts: [],
  session: null,
  emails: [],
  categories: [],
  employees: [],
  rules: [],
  drafts: [],
  tasks: [],
  composeDrafts: [],
  settings: {
    companyName: "Demo PME Inc.",
    language: "en",
    mode: "Simple",
    defaultMode: "Observation only",
    escalationRecipient: "owner@company.ca",
    approvalRequired: true,
    autoSend: false
  },
  settingsForm: null,
  loading: {
    emails: true,
    rules: true,
    drafts: true
  },
  busy: {},
  selectedEmail: null,
  selectedCategory: null,
  selectedDraft: null,
  selectedRule: null,
  selectedEmployee: null,
  selectedDraftIds: [],
  confirmDialog: null,
  digest: null,
  triageFilter: "all",
  triageCategoryFilter: "all",
  taskAssigneeFilter: "all",
  draftFilter: "all",
  ruleQuery: "",
  assistantOpen: false,
  assistantMessages: [],
  activity: [],
  setupPreview: null,
  selectedSetupMailboxId: "",
  composeForm: {
    id: "new",
    to: "",
    cc: "",
    subject: "",
    body: "",
    attachments: []
  },
  summary: "",
  showExplanation: false
};

app.innerHTML = `
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub" data-copy="brand.subtitle">Email assistant for small businesses</div>
      </div>
      <nav class="nav">
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.home">Home</div>
          <button class="active" data-tab="dashboard"><span data-copy="nav.dashboard">Overview</span> <small data-copy="nav.dashboardSmall">Today</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.work">Work</div>
          <button data-tab="triage"><span data-copy="nav.triage">Triage</span> <small data-copy="nav.triageSmall">Inbox</small></button>
          <button data-tab="tasks"><span data-copy="nav.tasks">Tasks</span> <small data-copy="nav.tasksSmall">Priority</small></button>
          <button data-tab="compose"><span data-copy="nav.compose">Compose</span> <small data-copy="nav.composeSmall">Local draft</small></button>
          <button data-tab="drafts"><span data-copy="nav.drafts">Drafts</span> <small data-copy="nav.draftsSmall">Approval</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.automation">Automation</div>
          <button data-tab="rules"><span data-copy="nav.rules">Rules</span> <small data-copy="nav.rulesSmall">Preview</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.workspace">Workspace</div>
          <button data-tab="import"><span data-copy="nav.import">Setup preview</span> <small data-copy="nav.importSmall">Microsoft 365</small></button>
          <button data-tab="admin"><span data-copy="nav.admin">Admin</span> <small data-copy="nav.adminSmall">Settings</small></button>
        </div>
      </nav>
      <div class="aside-note" data-copy="brand.asideNote">Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.</div>
    </aside>
    <main>
      <div class="header">
        <div>
          <h1 id="pageTitle"></h1>
          <p class="subtitle" id="pageSubtitle"></p>
        </div>
        <div class="mode" data-copy="brand.previewMode">Preview mode enabled</div>
      </div>
      <section id="dashboard" class="section"></section>
      <section id="import" class="section"></section>
      <section id="triage" class="section"></section>
      <section id="tasks" class="section"></section>
      <section id="compose" class="section"></section>
      <section id="rules" class="section"></section>
      <section id="drafts" class="section"></section>
      <section id="admin" class="section"></section>
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div id="authRoot"></div>
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

function isAdminSession() {
  return state.session?.role === "Admin";
}

function isEmployeeSession() {
  return state.session?.role === "Employee";
}

function allowedTabs() {
  if (!state.session) return new Set([]);
  if (isEmployeeSession()) return new Set(["triage", "tasks", "compose"]);
  return VALID_TABS;
}

function canAccessTab(tab) {
  return allowedTabs().has(tab);
}

function navigateTo(tab, options = {}) {
  if (!VALID_TABS.has(tab) || !canAccessTab(tab)) {
    throw new Error("That Courio section is unavailable.");
  }

  const previousTab = state.tab;
  if (previousTab === "admin" && tab !== "admin") {
    state.settingsForm = null;
  }
  if (tab === "admin" && previousTab !== "admin") {
    state.settingsForm = { ...state.settings };
  }

  state.tab = tab;
  if (options.triageFilter) state.triageFilter = options.triageFilter;
  if (options.draftFilter) state.draftFilter = options.draftFilter;

  if (options.closeDrawers !== false) {
    state.selectedEmail = null;
    state.selectedCategory = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    state.summary = "";
    state.showExplanation = false;
  }

  render();
}

async function refreshEmails(keepSelectedId = state.selectedEmail?.id) {
  state.emails = await listEmails();
  if (keepSelectedId) {
    const selected = state.emails.find((email) => email.id === keepSelectedId);
    state.selectedEmail = selected ? { ...selected, messages: selected.thread } : null;
  }
}

async function refreshCategoryState(keepSelectedId = state.selectedCategory?.id) {
  const [categories, emails, rules, tasks, digest, setupPreview, activity] = await Promise.all([
    listCategories(),
    listEmails(),
    listRules(),
    listTasks(),
    generateMorningDigest(),
    getSetupImportPreview(),
    listActivity()
  ]);

  state.categories = categories;
  state.emails = emails;
  state.rules = rules;
  state.tasks = tasks;
  state.digest = digest;
  state.setupPreview = setupPreview;
  state.activity = activity;
  state.selectedCategory = keepSelectedId
    ? categories.find((category) => category.id === keepSelectedId) || null
    : null;
}

async function refreshWorkspaceForSession() {
  const [session, emails, tasks, drafts, composeDrafts, digest, activity] = await Promise.all([
    getDemoSession(),
    listEmails(),
    listTasks(),
    listDrafts(),
    listComposeDrafts(),
    generateMorningDigest(),
    listActivity()
  ]);
  state.session = session;
  state.emails = emails;
  state.tasks = tasks;
  state.drafts = drafts;
  state.composeDrafts = composeDrafts;
  state.digest = digest;
  state.activity = activity;
  state.selectedEmail = null;
  state.selectedDraft = null;
  state.selectedRule = null;
  state.selectedEmployee = null;
  state.selectedCategory = null;
}

function isDraftReady(draft) {
  return Boolean(draft?.isReadyForHumanSend);
}

function isAdvancedMode() {
  return state.settings.mode === "Advanced";
}

function activeCategoriesFor(currentName = "") {
  const active = state.categories.filter((category) => category.active);
  const current = currentName ? state.categories.find((category) => category.name === currentName) : null;
  return current && !active.some((category) => category.id === current.id)
    ? [...active, current]
    : active;
}

function categoryNameById(id, fallback) {
  return state.categories.find((category) => category.id === id)?.name || fallback;
}

function triageCategoryOptions() {
  const byName = new Map();
  state.categories.forEach((category) => {
    if (category.active) byName.set(category.name, category);
  });
  state.emails.forEach((email) => {
    if (!byName.has(email.category)) {
      byName.set(email.category, {
        id: `current-${email.category}`,
        name: email.category,
        active: true
      });
    }
  });
  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function getTriageFilteredEmails() {
  const accountingCategory = categoryNameById("cat-accounting", "Accounting");
  return state.emails.filter((email) => {
    if (state.triageCategoryFilter !== "all" && email.category !== state.triageCategoryFilter) return false;
    if (state.triageFilter === "urgent") return email.status !== "Done" && email.urgency === "High";
    if (state.triageFilter === "invoices") return email.status !== "Done" && email.category === accountingCategory;
    return true;
  });
}

function emptyComposeForm() {
  return {
    id: "new",
    to: "",
    cc: "",
    subject: "",
    body: "",
    attachments: []
  };
}

function formatFileSize(size = 0) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function lowRiskBulkApprovalEnabled() {
  return state.settings.allowLowRiskBulkApproval !== "No";
}

function getSettingsForm() {
  return state.settingsForm || { ...state.settings };
}

function isAdvancedSettingsForm() {
  return getSettingsForm().mode === "Advanced";
}

function currentLanguage() {
  return normalizeLanguage(state.settings.language);
}

function t(key) {
  return createTranslator(currentLanguage())(key);
}

function renderShellCopy() {
  const translate = createTranslator(currentLanguage());
  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.textContent = translate(element.dataset.copy);
  });
}

async function loadInitialData() {
  try {
    const [demoAccounts, session, emails, categories, employees, rules, drafts, tasks, composeDrafts, settings, digest, assistantMessages, activity, setupPreview] = await Promise.all([listDemoAccounts(), getDemoSession(), listEmails(), listCategories(), listEmployees(), listRules(), listDrafts(), listTasks(), listComposeDrafts(), getSettings(), generateMorningDigest(), listAssistantMessages(), listActivity(), getSetupImportPreview()]);
    state.demoAccounts = demoAccounts;
    state.session = session;
    state.emails = emails;
    state.categories = categories;
    state.employees = employees;
    state.rules = rules;
    state.drafts = drafts;
    state.tasks = tasks;
    state.composeDrafts = composeDrafts;
    state.settings = { ...state.settings, ...settings };
    state.settingsForm = null;
    state.digest = digest;
    state.assistantMessages = assistantMessages;
    state.activity = activity;
    state.setupPreview = setupPreview;
    state.selectedSetupMailboxId = setupPreview.mailboxes[0]?.id || "";
    if (state.session && !canAccessTab(state.tab)) {
      state.tab = isEmployeeSession() ? "tasks" : "dashboard";
    }
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
  if (state.session && !canAccessTab(state.tab)) {
    state.tab = isEmployeeSession() ? "tasks" : "dashboard";
  }
  const pageCopy = getPageCopy(state.tab, currentLanguage());
  renderShellCopy();
  document.querySelector("#pageTitle").textContent = pageCopy[0];
  document.querySelector("#pageSubtitle").textContent = pageCopy[1];
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.toggle("active", section.id === state.tab);
  });
  document.querySelectorAll(".nav button").forEach((button) => {
    button.hidden = !canAccessTab(button.dataset.tab);
    button.classList.toggle("active", button.dataset.tab === state.tab);
  });

  renderDashboard();
  renderImport();
  renderTriage();
  renderTasks();
  renderCompose();
  renderRules();
  renderDrafts();
  renderAdmin();
  renderDrawer();
  renderConfirmModal();
  renderAssistant();
  renderDemoSession();
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
        <div class="value">${state.drafts.filter((draft) => draft.canSelectForBulkApproval).length || 0}</div>
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
        <div class="panel-title"><h2>Morning digest</h2><span>${digest ? `Generated ${escapeHtml(digest.generatedAt)}` : "Loading..."}</span></div>
        <p class="subtitle">${digest ? escapeHtml(digest.headline) : "Preparing a local demo digest from mock emails and drafts."}</p>
        ${digest ? `
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${digest.urgentItems.length ? escapeList(digest.urgentItems) : "None"}</td></tr>
            <tr><td>Invoices</td><td>${digest.invoices.length ? escapeList(digest.invoices) : "None"}</td></tr>
            <tr><td>Missing documents</td><td>${digest.missingDocuments.length ? escapeList(digest.missingDocuments) : "None"}</td></tr>
            <tr><td>Quote requests</td><td>${digest.quoteRequests.length ? escapeList(digest.quoteRequests) : "None"}</td></tr>
            <tr><td>Client complaints</td><td>${digest.clientComplaints.length ? escapeList(digest.clientComplaints) : "None"}</td></tr>
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
          ${(digest?.recommendedActions || ["Digest is loading."]).map((item) => `<tr><td><span class="badge lead">Action</span></td><td>${escapeHtml(item)}</td></tr>`).join("")}
          ${isAdvancedMode() ? `<tr><td><span class="badge invoice">Advanced</span></td><td>${state.rules.filter((rule) => rule.on).length} rules are currently enabled.</td></tr>` : ""}
        </table>
      </div>
    </div>
  `;
}

function renderImport() {
  const setup = state.setupPreview;
  if (!setup) {
    document.querySelector("#import").innerHTML = `<div class="loading">Loading simulated setup preview...</div>`;
    return;
  }

  const selectedMailbox = setup.mailboxes.find((mailbox) => mailbox.id === state.selectedSetupMailboxId) || setup.mailboxes[0];

  document.querySelector("#import").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${escapeHtml(setup.status)}</h2><span>No account connected</span></div>
        <div class="preview">${escapeHtml(setup.safetyNote)}</div>
        <div class="preview" style="margin-top:12px">${escapeHtml(setup.futureNote)}</div>
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" disabled title="Real OAuth/provider connection is intentionally unavailable in this fake/local prototype.">Connect demo only</button>
          <button class="btn subtle" data-tab-target="triage">Review local triage</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Choose simulated mailbox</h2><span>${setup.mailboxes.length} demo options</span></div>
        <div class="setup-mailbox-list">
          ${setup.mailboxes.map((mailbox) => `
            <button class="setup-mailbox ${mailbox.id === selectedMailbox.id ? "active" : ""}" data-setup-mailbox="${mailbox.id}">
              <strong>${escapeHtml(mailbox.name)}</strong>
              <span>${escapeHtml(mailbox.address)}</span>
              <small>${escapeHtml(mailbox.type)} - ${escapeHtml(mailbox.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>${escapeHtml(selectedMailbox.name)} preview</h2><span>${escapeHtml(selectedMailbox.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${escapeList(selectedMailbox.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${escapeList(selectedMailbox.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${escapeList(selectedMailbox.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${escapeList(selectedMailbox.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${escapeList(selectedMailbox.recentThreads)}</td></tr>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>What Courio would scan</h2><span>Simulated only</span></div>
        <table class="table">
          ${setup.scanItems.map((item) => `
            <tr>
              <td><span class="badge lead">${item.count}</span><br>${escapeHtml(item.label)}</td>
              <td>${escapeHtml(item.detail)}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Simulated setup flow</h2><span>Fake progress</span></div>
        <div class="workflow">
          ${setup.setupSteps.map((step, index) => `
            <div class="step">
              <div class="step-num">${index + 1}</div>
              <div><strong>${escapeHtml(step.title)}</strong><p>${escapeHtml(step.detail)}</p></div>
              <span class="badge ${index === 0 ? "lead" : "done"}">${escapeHtml(step.state)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Suggested workflow preview</h2><span>Needs human review</span></div>
        <table class="table">
          ${setup.workflowSuggestions.map((suggestion) => `
            <tr>
              <td><strong>${escapeHtml(suggestion.match)}</strong><br><small>${escapeHtml(suggestion.reason)}</small></td>
              <td><span class="badge invoice">${escapeHtml(suggestion.outcome)}</span></td>
            </tr>
          `).join("")}
        </table>
        <div class="preview" style="margin-top:14px">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `;
}

function renderTriage() {
  const employeeById = Object.fromEntries(state.employees.map((employee) => [employee.id, employee]));
  const categoryOptions = triageCategoryOptions();
  const filteredEmails = getTriageFilteredEmails();
  const removableEmails = filteredEmails.filter((email) => email.canArchive);
  const selectedCategoryLabel = state.triageCategoryFilter === "all" ? t("triage.allCategories") : state.triageCategoryFilter;
  const table = state.loading.emails
    ? `<div class="loading">Loading mock inbox...</div>`
    : filteredEmails.length === 0
      ? `<div class="empty-state">${state.triageFilter === "urgent" ? t("triage.emptyUrgent") : state.triageFilter === "invoices" ? t("triage.emptyInvoices") : state.triageCategoryFilter !== "all" ? t("triage.emptyCategory") : t("triage.emptyAll")}</div>`
    : `<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${filteredEmails.map((email) => `
            <tr>
              <td>${escapeHtml(email.subject)}</td>
              <td>${escapeHtml(email.sender)}<br><small>${escapeHtml(email.senderEmail || "")}</small></td>
              <td>
                <span class="badge ${badgeClass(email.category)}">${escapeHtml(email.category)}</span><br>
                <small>${escapeHtml(email.urgency || "Medium")} urgency - ${email.confidence || 80}% confidence</small>
                <small class="triage-reason" title="${escapeHtml(email.explanation || "")}">Why: ${escapeHtml(email.explanation || "Matched the current local category rules.")}</small>
              </td>
              <td>${escapeHtml(employeeById[email.assignedTo]?.name || "Unassigned")}</td>
              <td>${escapeHtml(email.workflowLabel || "Not started")}</td>
              <td><span class="badge ${email.status === "Done" ? "done" : ""}">${escapeHtml(email.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${email.id}" ${isBusy(`review-${email.id}`) ? "disabled" : ""}>${isBusy(`review-${email.id}`) ? "Opening..." : "Review"}</button>
                <button class="btn subtle" data-archive-email="${email.id}" ${!email.canArchive || isBusy(`archive-${email.id}`) ? `disabled title="${escapeHtml(email.archiveBlocker || "Remove this fake/local email from the demo inbox.")}"` : ""}>${isBusy(`archive-${email.id}`) ? t("triage.removing") : t("triage.remove")}</button>
                ${email.status === "Done"
                  ? `<span class="status-text">Complete</span>`
                  : `<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#triage").innerHTML = `
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${t("triage.inboxControl")}</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[
          ["all", "All inbox"],
          ["urgent", "Urgent"],
          ["invoices", "Invoices"]
        ].map(([value, label]) => `<button class="${state.triageFilter === value ? "active" : ""}" data-triage-filter="${value}">${label}</button>`).join("")}
      </div>
      <div class="list-toolbar" style="margin-bottom:14px">
        <select data-triage-category-filter aria-label="${t("triage.categoryFilter")}">
          <option value="all" ${state.triageCategoryFilter === "all" ? "selected" : ""}>${t("triage.allCategories")}</option>
          ${categoryOptions.map((category) => `<option value="${escapeHtml(category.name)}" ${state.triageCategoryFilter === category.name ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${filteredEmails.length === 0 || removableEmails.length === 0 || isBusy("archive-filtered") ? `disabled title="${t("triage.removeFilteredDisabled")}"` : ""}>${isBusy("archive-filtered") ? t("triage.removing") : `${t("triage.removeFiltered")} (${removableEmails.length})`}</button>
        <span class="mode">${escapeHtml(selectedCategoryLabel)}</span>
      </div>
      ${table}
    </div>
  `;
}

function renderTasks() {
  const visibleTasks = state.tasks.filter((task) => {
    if (!isAdminSession() || state.taskAssigneeFilter === "all") return true;
    if (state.taskAssigneeFilter === "unassigned") return !task.assignedTo;
    return task.assignedTo === state.taskAssigneeFilter;
  });
  const openCount = visibleTasks.filter((task) => task.status !== "Done").length;
  const highCount = visibleTasks.filter((task) => task.status !== "Done" && task.priority === "High").length;
  const content = visibleTasks.length === 0
    ? `<div class="empty-state">${t("tasks.empty")}</div>`
    : `<table class="table">
        <thead><tr><th>${t("tasks.done")}</th><th>${t("tasks.task")}</th><th>${t("tasks.priority")}</th><th>${t("tasks.assignedTo")}</th><th>${t("tasks.source")}</th><th>${t("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${visibleTasks.map((task) => `
            <tr>
              <td><input type="checkbox" data-task-status="${task.id}" ${task.status === "Done" ? "checked" : ""}></td>
              <td>
                <strong>${escapeHtml(task.title)}</strong><br>
                <small>${escapeHtml(task.description)}</small>
                ${(task.history || []).length ? `<br><small>${escapeHtml(task.history.at(-1)?.label || "")}</small>` : ""}
              </td>
              <td><span class="badge ${task.priority === "High" ? "urgent" : task.priority === "Low" ? "done" : "pending"}">${escapeHtml(task.priority)}</span><br><small>${escapeHtml(task.category)}</small></td>
              <td>
                ${isAdminSession()
                  ? `<select data-task-assignee="${task.id}">
                      <option value="" ${!task.assignedTo ? "selected" : ""}>${t("tasks.unassigned")}</option>
                      ${state.employees.map((employee) => `<option value="${employee.id}" ${task.assignedTo === employee.id ? "selected" : ""}>${escapeHtml(employee.name)}</option>`).join("")}
                    </select>`
                  : escapeHtml(task.assignedEmployee?.name || t("tasks.unassigned"))}
              </td>
              <td>${escapeHtml(task.sourceEmail?.subject || "Local task")}<br><small>${escapeHtml(task.sourceEmail?.sender || "Demo inbox")}</small></td>
              <td><textarea data-task-note="${task.id}" placeholder="${t("tasks.notePlaceholder")}">${escapeHtml(task.notes || "")}</textarea></td>
              <td class="actions">
                ${task.sourceEmail ? `<button class="btn subtle" data-review-email="${task.sourceEmail.id}">${t("tasks.reviewEmail")}</button>` : ""}
                <button class="btn subtle" data-save-task-note="${task.id}" ${isBusy(`task-note-${task.id}`) ? "disabled" : ""}>${isBusy(`task-note-${task.id}`) ? t("tasks.saving") : t("tasks.saveNote")}</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;

  document.querySelector("#tasks").innerHTML = `
    <div class="grid cols-3">
      <div class="panel metric">
        <div class="label">${t("tasks.openTasks")}</div>
        <div class="value">${openCount}</div>
        <div class="caption">${t("tasks.openCaption")}</div>
      </div>
      <div class="panel metric positive">
        <div class="label">${t("tasks.highPriority")}</div>
        <div class="value">${highCount}</div>
        <div class="caption">${t("tasks.highCaption")}</div>
      </div>
      <div class="panel metric">
        <div class="label">${t("tasks.completed")}</div>
        <div class="value">${visibleTasks.filter((task) => task.status === "Done").length}</div>
        <div class="caption">${t("tasks.completedCaption")}</div>
      </div>
    </div>
    <div class="panel" style="margin-top:16px">
      <div class="panel-title"><h2>${t("tasks.title")}</h2><span>${t("tasks.subtitle")}</span></div>
      ${isAdminSession() ? `
        <div class="list-toolbar" style="margin-bottom:14px">
          <select data-task-assignee-filter aria-label="${t("tasks.assigneeFilter")}">
            <option value="all" ${state.taskAssigneeFilter === "all" ? "selected" : ""}>${t("tasks.allAssignees")}</option>
            <option value="unassigned" ${state.taskAssigneeFilter === "unassigned" ? "selected" : ""}>${t("tasks.unassigned")}</option>
            ${state.employees.map((employee) => `<option value="${employee.id}" ${state.taskAssigneeFilter === employee.id ? "selected" : ""}>${escapeHtml(employee.name)}</option>`).join("")}
          </select>
        </div>
      ` : `<div class="preview" style="margin-bottom:14px">${t("tasks.employeeScope")}</div>`}
      ${content}
    </div>
  `;
}

function renderCompose() {
  const form = state.composeForm || emptyComposeForm();
  const attachmentList = form.attachments.length
    ? `<ul>${form.attachments.map((attachment) => `<li>${escapeHtml(attachment.name)} <small>${escapeHtml(attachment.type || "Unknown")} - ${formatFileSize(attachment.size)}</small></li>`).join("")}</ul>`
    : `<div class="empty-state">${t("compose.noAttachments")}</div>`;
  const savedDrafts = state.composeDrafts.length
    ? `<table class="table">
        <thead><tr><th>${t("compose.subject")}</th><th>${t("compose.to")}</th><th>${t("compose.attachments")}</th><th></th></tr></thead>
        <tbody>
          ${state.composeDrafts.map((draft) => `
            <tr>
              <td>${escapeHtml(draft.subject)}<br><small>${escapeHtml(new Date(draft.updatedAt).toLocaleString())}</small></td>
              <td>${escapeHtml(draft.to)}</td>
              <td>${draft.attachments.length}</td>
              <td><button class="btn subtle" data-open-compose-draft="${draft.id}">${t("compose.openDraft")}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>`
    : `<div class="empty-state">${t("compose.emptyDrafts")}</div>`;

  document.querySelector("#compose").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title">
          <div><h2>${t("compose.title")}</h2><span>${t("compose.subtitle")}</span></div>
          <button class="btn subtle" data-new-compose>${t("compose.newMessage")}</button>
        </div>
        <div class="preview">${t("compose.safetyNote")}</div>
        <div class="form-grid" style="margin-top:14px">
          <label>${t("compose.to")}<input data-compose-field="to" type="email" value="${escapeHtml(form.to)}" placeholder="client@example.ca"></label>
          <label>${t("compose.cc")}<input data-compose-field="cc" value="${escapeHtml(form.cc)}" placeholder="optional@example.ca"></label>
          <label>${t("compose.subject")}<input data-compose-field="subject" value="${escapeHtml(form.subject)}"></label>
          <label>${t("compose.body")}<textarea data-compose-field="body">${escapeHtml(form.body)}</textarea></label>
          <label>${t("compose.attachments")}
            <input data-compose-attachments type="file" multiple>
          </label>
          <div class="preview">${t("compose.attachmentNote")}</div>
        </div>
        <div class="drawer-section">
          <h3>${t("compose.attachmentMetadata")}</h3>
          ${attachmentList}
        </div>
        <div class="actions">
          <button class="btn primary" data-save-compose ${isBusy("save-compose") ? "disabled" : ""}>${isBusy("save-compose") ? t("compose.saving") : t("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${t("compose.printPdf")}</button>
          <span class="mode">${t("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${t("compose.savedDrafts")}</h2><span>${t("compose.localOnly")}</span></div>
        ${savedDrafts}
      </div>
    </div>
  `;
}

function renderDrawer() {
  const root = document.querySelector("#drawerRoot");
  if (state.selectedCategory) {
    renderCategoryDrawer(root);
    return;
  }

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
  const categories = activeCategoriesFor(email.category);

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${badgeClass(email.category)}">${escapeHtml(email.category)}</div>
          <h2>${escapeHtml(email.subject)}</h2>
          <p>${escapeHtml(email.sender)} - ${escapeHtml(email.senderEmail)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${escapeHtml(email.body)}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${email.id}">
            ${categories.map((category) => `<option value="${escapeHtml(category.name)}" ${category.name === email.category ? "selected" : ""}>${escapeHtml(category.name)}${category.active ? "" : " (archived)"}</option>`).join("")}
          </select>
        </label>
        ${isAdminSession()
          ? `<label>Assigned employee
              <select data-email-assignee="${email.id}">
                <option value="" ${!email.assignedTo ? "selected" : ""}>Unassigned</option>
                ${state.employees.map((employee) => `<option value="${escapeHtml(employee.id)}" ${employee.id === email.assignedTo ? "selected" : ""}>${escapeHtml(employee.name)} - ${escapeHtml(employee.department)}</option>`).join("")}
              </select>
            </label>`
          : `<div class="mini-stat"><span>${t("tasks.assignedTo")}</span><strong>${escapeHtml(assignedEmployee?.name || t("tasks.unassigned"))}</strong></div>`}
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${escapeHtml(email.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${email.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${escapeHtml(email.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${escapeHtml(assignedEmployee?.name || "Unassigned")}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${emailDone ? "This email is completed. Draft actions are locked unless the email is reopened later." : email.draftId ? `${email.draftReadyForHumanSend ? "Draft approved and ready for human send." : `Draft exists: ${escapeHtml(email.draftStatusLabel)}.`} One email uses one draft record.` : "No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${escapeHtml(email.suggestedAction)}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${state.showExplanation ? "Less context" : "More context"}</button>
        </div>
        <div class="preview">${escapeHtml(email.explanation)}</div>
        ${state.showExplanation ? `<div class="preview explanation-detail">This recommendation is based only on wording and patterns in the local demo message. A person must review it before acting.</div>` : ""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${email.messages.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}</ul>
      </div>

      ${state.summary ? `<div class="drawer-section"><h3>Summary</h3><div class="preview">${escapeHtml(state.summary)}</div></div>` : ""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${email.id}" ${isBusy(`summary-${email.id}`) ? "disabled" : ""}>${isBusy(`summary-${email.id}`) ? "Summarizing..." : "Summarize"}</button>
        ${email.canOpenDraft ? `<button class="btn subtle" data-open-email-draft="${email.id}" ${isBusy(`open-email-draft-${email.id}`) ? "disabled" : ""}>${email.draftActionLabel}</button>` : `<button class="btn subtle" data-generate-draft="${email.id}" ${!email.canGenerateDraft || isBusy(`draft-${email.id}`) ? `disabled title="${email.completionBlocker || "Draft action is unavailable."}"` : ""}>${isBusy(`draft-${email.id}`) ? "Drafting..." : email.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${email.id}" ${!email.canArchive || isBusy(`archive-${email.id}`) ? `disabled title="${escapeHtml(email.archiveBlocker || "Remove this fake/local email from the demo inbox.")}"` : ""}>${isBusy(`archive-${email.id}`) ? t("triage.removing") : t("triage.remove")}</button>
        ${emailDone
          ? `<span class="status-text">Workflow complete</span>`
          : `<span class="status-text">Approving the draft completes this workflow.</span>`}
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
      <h2>${escapeHtml(dialog.title)}</h2>
      <p>${escapeHtml(dialog.message)}</p>
      <div class="actions">
        <button class="btn ${dialog.tone === "danger" ? "danger" : "primary"}" data-confirm-primary>${escapeHtml(dialog.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `;
}

function renderDemoSession() {
  const root = document.querySelector("#authRoot");
  if (!state.session) {
    root.innerHTML = `
      <div class="auth-overlay">
        <div class="auth-panel">
          <div>
            <div class="badge lead">${t("auth.demoOnly")}</div>
            <h1>${t("auth.title")}</h1>
            <p>${t("auth.subtitle")}</p>
          </div>
          <div class="auth-grid">
            ${state.demoAccounts.map((account) => `
              <button class="auth-card" data-login-account="${account.id}">
                <strong>${escapeHtml(account.name)}</strong>
                <span>${escapeHtml(account.role)} - ${escapeHtml(account.title)}</span>
                <small>${escapeHtml(account.email)}</small>
              </button>
            `).join("")}
          </div>
          <div class="preview">${t("auth.safetyNote")}</div>
        </div>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div class="session-pill">
      <span>${escapeHtml(state.session.name)} · ${escapeHtml(state.session.role)}</span>
      <button class="btn subtle" data-logout-demo>${t("auth.logout")}</button>
    </div>
  `;
}

async function openGeneratedDraft(emailId) {
  const draft = await generateDraftReply(emailId);
  state.drafts = await listDrafts();
  await refreshEmails(emailId);
  state.selectedDraft = await getDraftDetail(draft.id);
  state.selectedEmail = null;
  state.selectedRule = null;
  state.selectedEmployee = null;
  state.selectedCategory = null;
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
          <div class="badge ${draft.isReadyForHumanSend ? "done" : "pending"}">${escapeHtml(draft.statusLabel)}</div>
          <h2>${escapeHtml(draft.title)}</h2>
          <p>Source: ${escapeHtml(sourceEmail.subject || draft.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${escapeHtml(sourceEmail.sender || "Mock sender")}</strong><br>
          ${escapeHtml(sourceEmail.senderEmail || "")}<br><br>
          ${escapeHtml(sourceEmail.body || "This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${escapeHtml(sourceDone ? "Completed" : draft.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${escapeHtml(draft.risk || "Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${draft.confidence || sourceEmail.confidence || 80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${escapeHtml(sourceEmail.suggestedAction || draft.title)}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${escapeHtml(draft.text)}</textarea>
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
  const categories = activeCategoriesFor(rule.category);

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
        <label>Rule name<input data-rule-field="title" value="${escapeHtml(rule.title)}"></label>
        <label>Description<textarea data-rule-field="desc">${escapeHtml(rule.desc)}</textarea></label>
        <label>Category
          <select data-rule-field="category">
            ${categories.map((category) => `<option value="${escapeHtml(category.name)}" ${category.name === rule.category ? "selected" : ""}>${escapeHtml(category.name)}${category.active ? "" : " (archived)"}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${rule.confidence || 80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${rule.matches?.length || 0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${escapeHtml(rule.explanation || "This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(rule.matches || ["No sample matches yet."]).map((match) => `<li>${escapeHtml(match)}</li>`).join("")}</ul>
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

function renderCategoryDrawer(root) {
  const category = state.selectedCategory;
  const isNew = category.id === "new";
  const colorOptions = [
    ["default", "Default"],
    ["urgent", "Red / urgent"],
    ["invoice", "Green"],
    ["lead", "Blue"],
    ["pending", "Amber"]
  ];

  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${isNew ? "Add category" : "Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${badgeClass(category.name)}">${category.active === false ? "Archived" : "Active"}</div>
          <h2>${isNew ? "Add category" : "Edit category"}</h2>
          <p>Categories remain fake/local and map to email category names for now.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Category name<input data-category-field="name" value="${escapeHtml(category.name || "")}"></label>
        <label>Description<textarea data-category-field="description">${escapeHtml(category.description || "")}</textarea></label>
        <label>Badge color
          <select data-category-field="color">
            ${colorOptions.map(([value, label]) => `<option value="${value}" ${value === (category.color || "default") ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-category="${category.id}" ${isBusy(`save-category-${category.id}`) ? "disabled" : ""}>${isBusy(`save-category-${category.id}`) ? "Saving..." : isNew ? "Add category" : "Save changes"}</button>
        ${isNew ? "" : `<button class="btn subtle" data-toggle-category="${category.id}" ${isBusy(`toggle-category-${category.id}`) ? "disabled" : ""}>${category.active === false ? "Restore category" : "Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
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
          <p>${isNew ? "Add a local demo team member." : `Reviewing ${escapeHtml(employee.name)}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${escapeHtml(employee.name || "")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${escapeHtml(employee.email || "")}"></label>
        <label>Role / title<input data-employee-field="title" value="${escapeHtml(employee.title || "")}"></label>
        <label>Department<input data-employee-field="department" value="${escapeHtml(employee.department || "")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${employee.id}" ${isBusy(`save-employee-${employee.id}`) ? "disabled" : ""}>${isBusy(`save-employee-${employee.id}`) ? "Saving..." : isNew ? "Add employee" : "Save changes"}</button>
        ${isNew ? "" : `<button class="btn danger" data-delete-employee="${employee.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
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
                <div class="rule-title">${escapeHtml(rule.title)}</div>
                <div class="rule-desc">${escapeHtml(rule.desc)}</div>
              </div>
              <button class="toggle ${rule.on ? "on" : ""}" aria-label="Toggle ${escapeHtml(rule.title)}" data-toggle-rule="${rule.id}" ${isBusy(`rule-${rule.id}`) ? "disabled" : ""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${escapeHtml(rule.impact)}</div>
            <div class="preview"><strong>${rule.confidence || 80}% confidence:</strong> ${escapeHtml(rule.explanation || "Based on local mock patterns.")}</div>
            ${isAdvancedMode() ? `<div class="preview"><strong>Would match:</strong> ${escapeList(rule.matches || ["No samples"])}</div>` : ""}
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
              <td>${escapeHtml(draft.title)}</td>
              <td>${escapeHtml(draft.source)}</td>
              <td><span class="badge ${draft.risk === "High" ? "urgent" : "done"}">${escapeHtml(draft.risk || "Low")}</span></td>
              <td><span class="badge ${draft.isReadyForHumanSend ? "done" : "pending"}">${escapeHtml(draft.statusLabel)}</span></td>
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
  root.innerHTML = renderAssistantView({
    assistantOpen: state.assistantOpen,
    assistantMessages: state.assistantMessages,
    assistantBusy: isBusy("assistant")
  });
}

async function submitAssistantCommand(message) {
  await runAction("assistant", async () => {
    const result = await sendAssistantCommand(message, {
      selectedEmailId: state.selectedEmail?.id || null
    });
    state.assistantMessages = result.messages;
    await applyAssistantAction(result.action);
  });
}

async function applyAssistantAction(action) {
  if (!action) return;

  if (action.type === "show_triage") {
    navigateTo("triage", { triageFilter: action.filter || "all" });
    return;
  }

  if (action.type === "show_drafts") {
    navigateTo("drafts", { draftFilter: action.filter || "all" });
    return;
  }

  if (action.type === "generate_digest") {
    state.digest = await generateMorningDigest();
    navigateTo("dashboard");
    return;
  }

  if (action.type === "explain_email") {
    state.selectedEmail = await getEmailThread(action.emailId);
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    state.selectedCategory = null;
    state.summary = "";
    state.showExplanation = true;
    navigateTo("triage", { triageFilter: "all", closeDrawers: false });
    return;
  }

  if (action.type === "show_rule") {
    state.rules = await listRules();
    state.selectedRule = state.rules.find((rule) => rule.id === action.ruleId) || null;
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedEmployee = null;
    state.selectedCategory = null;
    navigateTo("rules", { closeDrawers: false });
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
  const formSettings = getSettingsForm();
  document.querySelector("#admin").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${t("admin.workspaceSettings")}</h2><span>${t("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${t("admin.companyName")}<input data-setting="companyName" value="${escapeHtml(formSettings.companyName || "Demo PME Inc.")}"></label>
          <label>${t("admin.language")}
            <select data-setting="language">
              ${[
                ["en", "English"],
                ["fr", "Français"]
              ].map(([value, label]) => `<option value="${value}" ${value === normalizeLanguage(formSettings.language) ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </label>
          <label>${t("admin.mode")}
            <select data-setting="mode">
              ${["Simple", "Advanced"].map((mode) => `<option ${mode === formSettings.mode ? "selected" : ""}>${mode}</option>`).join("")}
            </select>
          </label>
          <label>${t("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${escapeHtml(formSettings.escalationRecipient || "owner@company.ca")}"></label>
          ${isAdvancedSettingsForm() ? `
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only", "Drafts allowed, no auto-send", "Auto-categorize after approval"].map((mode) => `<option ${mode === formSettings.defaultMode ? "selected" : ""}>${mode}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${escapeHtml(formSettings.confidenceThreshold || "80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${escapeHtml(formSettings.observationDays || "7")}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes", "No"].map((value) => `<option ${value === formSettings.allowLowRiskBulkApproval ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          ` : `<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>`}
          <div class="preview">${t("admin.languageNote")}</div>
          <button class="btn primary" data-save-settings ${isBusy("settings") ? "disabled" : ""}>${isBusy("settings") ? t("admin.saving") : t("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${isBusy("reset-demo") ? "disabled" : ""}>${isBusy("reset-demo") ? t("admin.resetting") : t("admin.resetDemoData")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${t("admin.safetyPreview")}</h2><span>${t("admin.prototypeBehavior")}</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${escapeHtml(state.settings.mode || "Simple")}</td></tr>
          <tr><td>${t("admin.savedLanguage")}</td><td>${currentLanguage() === "fr" ? "Français" : "English"}</td></tr>
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
                    <td>${escapeHtml(employee.name)}<br><small>${escapeHtml(employee.email)}</small></td>
                    <td>${escapeHtml(employee.title)}</td>
                    <td>${escapeHtml(employee.department)}</td>
                    <td><button class="btn subtle" data-edit-employee="${employee.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title">
          <div><h2>Categories</h2><span>Local labels</span></div>
          <button class="btn primary" data-add-category>Add category</button>
        </div>
        ${state.categories.length === 0
          ? `<div class="empty-state">No categories yet. Add one to make triage choices available.</div>`
          : `<table class="table">
              <thead><tr><th>Name</th><th>Description</th><th>Status</th><th></th></tr></thead>
              <tbody>
                ${state.categories.map((category) => `
                  <tr>
                    <td><span class="badge ${badgeClass(category.name)}">${escapeHtml(category.name)}</span>${category.system ? `<br><small>System default</small>` : ""}</td>
                    <td>${escapeHtml(category.description || "No description yet.")}</td>
                    <td>${category.active ? "Active" : "Archived"}</td>
                    <td><button class="btn subtle" data-edit-category="${category.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
        <div class="preview" style="margin-top:14px">Archiving hides a category from new dropdown choices. Existing emails and rules keep displaying safely.</div>
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
  const category = state.categories.find((item) => item.name === label);
  if (category?.color && category.color !== "default") return category.color;
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

  if (target.dataset.assistantCommand) {
    await submitAssistantCommand(target.dataset.assistantCommand);
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
        state.tasks = await listTasks();
        state.activity = await listActivity();
        state.selectedEmployee = null;
      }, "Employee removed and assigned emails returned to Unassigned.");
      return;
    }

    if (dialog?.type === "archive-emails") {
      await runAction("archive-emails", async () => {
        await archiveEmails(dialog.emailIds, dialog.reason);
        state.emails = await listEmails();
        state.tasks = await listTasks();
        state.digest = await generateMorningDigest();
        state.activity = await listActivity();
        state.selectedEmail = null;
      }, t("triage.removeSuccess"));
      return;
    }
  }

  if (target.dataset.loginAccount) {
    await runAction("login-demo", async () => {
      const session = await setDemoSession(target.dataset.loginAccount);
      await refreshWorkspaceForSession();
      state.tab = session.role === "Employee" ? "tasks" : "dashboard";
    }, t("auth.loginToast"));
    return;
  }

  if (target.dataset.logoutDemo !== undefined) {
    await runAction("logout-demo", async () => {
      await logoutDemoSession();
      await refreshWorkspaceForSession();
    }, t("auth.logoutToast"));
    return;
  }

  if (target.dataset.tab) {
    navigateTo(target.dataset.tab);
  }

  if (target.dataset.tabTarget) {
    navigateTo(target.dataset.tabTarget);
  }

  if (target.dataset.newCompose !== undefined) {
    state.composeForm = emptyComposeForm();
    render();
    return;
  }

  if (target.dataset.openComposeDraft) {
    const draft = state.composeDrafts.find((item) => item.id === target.dataset.openComposeDraft);
    if (draft) {
      state.composeForm = { ...draft, attachments: [...draft.attachments] };
      navigateTo("compose", { closeDrawers: false });
    }
    return;
  }

  if (target.dataset.saveCompose !== undefined) {
    await runAction("save-compose", async () => {
      const saved = await saveComposeDraft(state.composeForm);
      state.composeForm = { ...saved, attachments: [...saved.attachments] };
      state.composeDrafts = await listComposeDrafts();
      state.activity = await listActivity();
    }, t("compose.savedToast"));
    return;
  }

  if (target.dataset.printCompose !== undefined) {
    toast(t("compose.printToast"));
    window.print();
    return;
  }

  if (target.dataset.setupMailbox) {
    state.selectedSetupMailboxId = target.dataset.setupMailbox;
    renderImport();
  }

  if (target.dataset.triageFilter) {
    state.triageFilter = target.dataset.triageFilter;
    render();
  }

  if (target.dataset.archiveEmail) {
    const email = state.emails.find((item) => item.id === target.dataset.archiveEmail);
    if (!email) return;
    state.confirmDialog = {
      type: "archive-emails",
      emailIds: [email.id],
      reason: "Removed from demo inbox",
      title: t("triage.removeConfirmTitle"),
      message: `${t("triage.removeConfirmMessage")} "${email.subject}"`,
      primaryLabel: t("triage.remove"),
      tone: "danger"
    };
    render();
    return;
  }

  if (target.dataset.archiveFiltered !== undefined) {
    const removableEmails = getTriageFilteredEmails().filter((email) => email.canArchive);
    if (!removableEmails.length) return;
    state.confirmDialog = {
      type: "archive-emails",
      emailIds: removableEmails.map((email) => email.id),
      reason: "Bulk removed from demo inbox",
      title: t("triage.removeFilteredConfirmTitle"),
      message: `${t("triage.removeFilteredConfirmMessage")} ${removableEmails.length}`,
      primaryLabel: t("triage.removeFiltered"),
      tone: "danger"
    };
    render();
    return;
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
      state.selectedCategory = null;
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
      state.selectedCategory = null;
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
      state.selectedCategory = null;
      state.summary = "";
      state.showExplanation = false;
    }, "Draft opened for editing.");
  }

  if (target.dataset.saveTaskNote) {
    const id = target.dataset.saveTaskNote;
    const note = document.querySelector(`[data-task-note="${id}"]`)?.value || "";
    await runAction(`task-note-${id}`, async () => {
      await updateTask(id, { notes: note });
      state.tasks = await listTasks();
      state.activity = await listActivity();
    }, t("tasks.noteSaved"));
    return;
  }

  if (target.dataset.closeDrawer !== undefined) {
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    state.selectedCategory = null;
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
      state.selectedCategory = null;
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
    state.selectedCategory = null;
    render();
  }

  if (target.dataset.editEmployee) {
    state.selectedEmployee = state.employees.find((employee) => employee.id === target.dataset.editEmployee) || null;
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedCategory = null;
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
      state.tasks = await listTasks();
      state.activity = await listActivity();
      state.selectedEmployee = state.employees.find((employee) => employee.id === saved.id) || null;
    }, id === "new" ? "Employee added locally." : "Employee changes saved locally.");
  }

  if (target.dataset.deleteEmployee) {
    const id = target.dataset.deleteEmployee;
    const employee = state.employees.find((item) => item.id === id);
    const assignedCount = state.emails.filter((email) => email.assignedTo === id).length;
    state.confirmDialog = {
      type: "delete-employee",
      employeeId: id,
      title: "Remove this employee?",
      message: `Remove ${employee?.name || "this employee"}? ${assignedCount} assigned email${assignedCount === 1 ? "" : "s"} will return to Unassigned.`,
      primaryLabel: "Remove employee",
      tone: "danger"
    };
    render();
  }

  if (target.dataset.addCategory !== undefined) {
    state.selectedCategory = {
      id: "new",
      name: "",
      description: "",
      color: "default",
      active: true,
      system: false
    };
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    render();
  }

  if (target.dataset.editCategory) {
    state.selectedCategory = state.categories.find((category) => category.id === target.dataset.editCategory) || null;
    state.selectedEmail = null;
    state.selectedDraft = null;
    state.selectedRule = null;
    state.selectedEmployee = null;
    render();
  }

  if (target.dataset.saveCategory) {
    const id = target.dataset.saveCategory;
    const fields = Object.fromEntries(
      [...document.querySelectorAll("[data-category-field]")].map((input) => [input.dataset.categoryField, input.value])
    );
    await runAction(`save-category-${id}`, async () => {
      const saved = id === "new" ? await createCategory(fields) : await updateCategory(id, fields);
      await refreshCategoryState(saved.id);
    }, id === "new" ? "Category added locally." : "Category changes saved locally.");
  }

  if (target.dataset.toggleCategory) {
    const id = target.dataset.toggleCategory;
    await runAction(`toggle-category-${id}`, async () => {
      const saved = await toggleCategoryActive(id);
      await refreshCategoryState(saved.id);
    }, "Category visibility updated locally.");
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
      state.settingsForm = { ...state.settings };
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

  if (target.dataset.setting !== undefined) {
    state.settingsForm = {
      ...getSettingsForm(),
      [target.dataset.setting]: target.value
    };
    if (target.dataset.setting === "mode") render();
    return;
  }

  if (target.dataset.taskStatus) {
    const id = target.dataset.taskStatus;
    await runAction(`task-status-${id}`, async () => {
      await updateTask(id, { status: target.checked ? "Done" : "Open" });
      state.tasks = await listTasks();
      state.activity = await listActivity();
    }, target.checked ? t("tasks.completedToast") : t("tasks.reopenedToast"));
    return;
  }

  if (target.dataset.taskAssignee) {
    const id = target.dataset.taskAssignee;
    await runAction(`task-assignee-${id}`, async () => {
      await updateTask(id, { assignedTo: target.value });
      state.tasks = await listTasks();
      state.activity = await listActivity();
    }, t("tasks.assignedToast"));
    return;
  }

  if (target.dataset.taskAssigneeFilter !== undefined) {
    state.taskAssigneeFilter = target.value;
    renderTasks();
    return;
  }

  if (target.dataset.composeAttachments !== undefined) {
    state.composeForm = {
      ...emptyComposeForm(),
      ...state.composeForm,
      attachments: [...target.files].map((file, index) => ({
        id: `local-${Date.now()}-${index}`,
        name: file.name,
        type: file.type || "Unknown",
        size: file.size
      }))
    };
    renderCompose();
    return;
  }

  if (target.dataset.triageCategoryFilter !== undefined) {
    state.triageCategoryFilter = target.value;
    render();
    return;
  }

  if (target.dataset.emailCategory) {
    const id = target.dataset.emailCategory;
    await runAction(`category-${id}`, async () => {
      await updateEmailCategory(id, target.value);
      await refreshEmails(id);
      state.tasks = await listTasks();
    }, "Category updated locally.");
  }

  if (target.dataset.emailAssignee) {
    const id = target.dataset.emailAssignee;
    await runAction(`assign-${id}`, async () => {
      await assignEmail(id, target.value);
      await refreshEmails(id);
      state.tasks = await listTasks();
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
  if (target.dataset.setting !== undefined) {
    state.settingsForm = {
      ...getSettingsForm(),
      [target.dataset.setting]: target.value
    };
    return;
  }

  if (target.dataset.composeField !== undefined) {
    state.composeForm = {
      ...emptyComposeForm(),
      ...state.composeForm,
      [target.dataset.composeField]: target.value
    };
    return;
  }

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

  input.value = "";
  await submitAssistantCommand(message);
});

render();
loadInitialData();
