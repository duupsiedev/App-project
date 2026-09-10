import { createElement, House, Inbox, ListTodo, PencilLine, Plus, Bot, Users,
  Link, Settings, Sparkles, ChevronRight, CircleAlert, CircleCheck,
  ListChecks, Lightbulb, TrendingUp, Menu, ShieldCheck, Search } from "lucide";

/* Presentation composition only.
 * Existing renderers supply controls with their original data attributes.
 * Moving those nodes preserves delegated handlers and API eligibility checks.
 * Selection/search/settings-section below are transient UI state, never records.
 */
const selectedRows = new Map();
const searches = new Map();
let adminSection = "general";
let previousTab;

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function icon(shape) {
  const element = createElement(shape, { width: 22, height: 22, "aria-hidden": "true" });
  element.classList.add("courio-icon");
  return element;
}

function initials(name = "Courio") {
  return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
}

function button(text, shape, action) {
  const element = node("button", "btn", text);
  element.type = "button";
  if (shape) element.prepend(icon(shape));
  if (action) element.addEventListener("click", action);
  return element;
}

// Shared shell: every original destination stays present and permission-aware.
function renderShell({ state, t, canAccessTab, navigateTo }) {
  const nav = document.querySelector(".nav");
  const d = key => t(`design.${key}`);
  const links = [
    ["dashboard", "today", House], ["triage", "inbox", Inbox],
    ["tasks", "tasks", ListTodo], ["drafts", "drafts", PencilLine],
    ["compose", "compose", Plus], ["rules", "automation", Bot],
    ["admin", "team", Users, "employees"], ["import", "connection", Link],
    ["admin", "settings", Settings, "general"]
  ];
  nav.replaceChildren();
  for (const [tab, label, shape, section] of links) {
    if (label === "automation") nav.append(node("div", "nav-label workspace-label", d("workspace")));
    const control = button(d(label), shape, () => {
      if (section) adminSection = section;
      document.querySelector(".app").classList.remove("menu-open");
      navigateTo(tab);
    });
    control.dataset.destination = tab;
    control.hidden = !canAccessTab(tab);
    control.classList.toggle("active", state.tab === tab && (!section || (section === "general" ? adminSection === "general" : adminSection !== "general")));
    if (tab === "compose") control.classList.add("nav-compose");
    nav.append(control);
  }
  const brand = document.querySelector(".brand-title");
  brand.replaceChildren(icon(Sparkles), document.createTextNode("Courio"));
  document.querySelector(".brand-sub").textContent = d("local");

  let topbar = document.querySelector(".workspace-topbar");
  if (!topbar) {
    topbar = node("header", "workspace-topbar");
    document.querySelector("main").prepend(topbar);
  }
  const menu = button("", Menu, () => document.querySelector(".app").classList.toggle("menu-open"));
  menu.classList.add("mobile-menu");
  menu.title = d("toggleMenu");
  menu.setAttribute("aria-label", d("toggleMenu"));
  const ask = button(d("ask"), Sparkles);
  ask.classList.add("topbar-assistant");
  ask.dataset.assistantToggle = "";
  topbar.replaceChildren(menu, ask);
  const session = document.querySelector(".session-pill");
  if (session) {
    const avatar = node("span", "avatar", initials(state.session.name));
    avatar.setAttribute("aria-hidden", "true");
    session.prepend(avatar);
    topbar.append(session);
  }
  document.documentElement.lang = state.settings.language || "en";
  const headings = { dashboard: "today", triage: "inbox", tasks: "tasks", compose: "compose", drafts: "drafts", rules: "automation", admin: "settings", import: "connection" };
  document.querySelector("#pageTitle").textContent = state.tab === "dashboard"
    ? `${d("hello")}, ${state.session?.name?.split(" ")[0] || "Courio"}` : d(headings[state.tab]);
  if (state.tab === "dashboard") document.querySelector("#pageSubtitle").textContent = d("attention");
}

// Overview: compose existing digest/recommendations around live queue counts.
function renderOverview({ state, t, navigateTo }) {
  const root = document.querySelector("#dashboard");
  const oldPanels = root.querySelectorAll(":scope > .cols-2 > .panel");
  const digest = oldPanels[0];
  const recommendations = oldPanels[1];
  if (!digest || !recommendations) return;
  const d = key => t(`design.${key}`);
  const counts = [
    state.emails.filter(email => email.urgency === "High" && email.status !== "Done").length,
    state.drafts.filter(draft => draft.canSelectForBulkApproval).length,
    state.tasks.filter(task => task.status !== "Done").length
  ];
  const go = [() => navigateTo("triage", { triageFilter: "urgent" }), () => navigateTo("drafts", { draftFilter: "needs_approval" }), () => navigateTo("tasks")];
  const metrics = node("div", "overview-metrics");
  [CircleAlert, PencilLine, CircleCheck].forEach((shape, index) => {
    const tile = button("", null, go[index]);
    tile.className = `overview-metric metric-tone-${index}`;
    const symbol = node("span", "metric-symbol");
    symbol.append(icon(shape));
    const content = node("span", "metric-content");
    content.append(node("strong", "", String(counts[index])), node("span", "", d(["urgent", "pending", "openTasks"][index])));
    tile.append(symbol, content, icon(ChevronRight));
    metrics.append(tile);
  });
  const start = button(d("start"), Sparkles, go[0]);
  start.classList.add("primary", "start-review");
  const next = node("section", "next-actions");
  const heading = node("h2", "");
  heading.append(icon(ListChecks), document.createTextNode(d("next")));
  next.append(heading);
  ["urgentAction", "draftAction", "taskAction"].forEach((key, index) => {
    const action = button("", null, go[index]);
    action.className = "next-action";
    action.append(node("span", "step-num", String(index + 1)), node("span", "", `${d(key)} (${counts[index]})`), icon(ChevronRight));
    next.append(action);
  });
  digest.className = "digest-surface";
  digest.querySelector("h2").textContent = d("digest");
  digest.querySelector("h2").prepend(icon(TrendingUp));
  const table = digest.querySelector("table");
  if (table) {
    const details = node("details", "digest-details");
    details.append(node("summary", "", d("fullDigest")), table);
    digest.querySelector(".subtitle").after(details);
  }
  recommendations.className = "recommendations-surface";
  recommendations.querySelector("h2").textContent = d("recommendations");
  recommendations.querySelector("h2").prepend(icon(Lightbulb));
  const side = node("div", "overview-summary");
  side.append(digest, recommendations);
  const lower = node("div", "overview-lower");
  lower.append(next, side);
  root.replaceChildren(metrics, start, lower);
}

// Lists retain their existing rendered actions, checkboxes, notes, and selects.
// Controls are moved, not copied: there is only one editor for each rendered item.
function renderQueue({ state, t }, tab, config) {
  const root = document.querySelector(`#${tab}`);
  const table = root.querySelector("table");
  if (!table?.tBodies[0]) return;
  const d = key => t(`design.${key}`);
  const rows = [...table.tBodies[0].rows];
  const records = config.records;
  const shell = node("div", "queue-workspace");
  const list = node("div", "queue-list");
  const detail = node("article", "queue-detail");
  detail.id = `${tab}Detail`;
  const searchBox = node("label", "queue-search");
  searchBox.append(icon(Search));
  const search = node("input", "");
  search.type = "search";
  search.placeholder = d("search");
  search.setAttribute("aria-label", d("search"));
  search.value = searches.get(tab) || "";
  searchBox.append(search);
  list.append(searchBox);
  const entries = [];
  let selected = selectedRows.get(tab);
  const selectedRecord = tab === "triage" ? state.selectedEmail : tab === "drafts" ? state.selectedDraft : null;
  if (selectedRecord) selected = selectedRecord.id;

  rows.forEach(row => {
    const trigger = row.querySelector(config.trigger);
    if (!trigger) return;
    const id = trigger.getAttribute(config.attribute);
    const record = records.find(item => item.id === id);
    if (!record) return;
    const cells = [...row.cells];
    const entry = node("div", "queue-entry");
    const select = node("button", "queue-item");
    select.type = "button";
    const title = config.title(record);
    const subtitle = config.subtitle(record);
    const avatar = node("span", "avatar", initials(config.avatar(record)));
    const content = node("span", "queue-item-copy");
    content.append(node("strong", "", title), node("span", "", subtitle));
    const status = node("small", "", config.status(record));
    content.append(status);
    select.append(avatar, content);
    if (config.checkColumn !== undefined) {
      const checkbox = cells[config.checkColumn].querySelector("input");
      if (checkbox) {
        checkbox.setAttribute("aria-label", `${d(tab === "drafts" ? "review" : "done")}: ${title}`);
        entry.append(checkbox);
      }
    }
    entry.append(select);
    list.append(entry);

    const view = node("div", "record-detail");
    const heading = node("h2", "record-heading", title);
    view.append(heading, node("p", "record-subtitle", subtitle));
    const actions = cells.at(-1);
    const actionBar = node("div", "actions record-actions");
    actionBar.append(...actions.childNodes);
    view.append(actionBar);
    if (tab === "triage") {
      const body = node("div", "email-body", record.body || "");
      view.append(body);
      const explanation = node("section", "reason-surface");
      const why = node("h3", "", d("reason"));
      why.prepend(icon(Sparkles));
      explanation.append(why, node("p", "", record.explanation || ""));
      view.append(explanation);
    }
    const fields = node("div", "record-fields");
    cells.slice(0, -1).forEach((cell, index) => {
      if (config.omit.includes(index)) return;
      const field = node("section", "record-field");
      field.append(node("h3", "", d(config.labels[index])));
      const value = node("div", "record-field-value");
      value.append(...cell.childNodes);
      field.append(value);
      fields.append(field);
    });
    view.append(fields);
    const choose = () => {
      selectedRows.set(tab, id);
      entries.forEach(item => {
        item.entry.classList.toggle("active", item.id === id);
        item.select.setAttribute("aria-pressed", String(item.id === id));
      });
      detail.replaceChildren(view);
    };
    select.addEventListener("click", () => {
      choose();
      // Review uses exactly the same API-backed handler as the original button.
      if (tab !== "tasks") trigger.click();
    });
    entries.push({ id, entry, select, view, choose, text: `${title} ${subtitle}`.toLocaleLowerCase() });
  });
  const noMatch = node("p", "empty-state", d("noMatch"));
  noMatch.hidden = true;
  list.append(noMatch);
  const bulkRemove = root.querySelector("[data-archive-filtered]");
  const removalDisabled = bulkRemove?.disabled;
  const removalTitle = bulkRemove?.title || "";
  const filter = () => {
    const query = search.value.toLocaleLowerCase().trim();
    searches.set(tab, search.value);
    entries.forEach(item => { item.entry.hidden = !item.text.includes(query); });
    noMatch.hidden = entries.some(item => !item.entry.hidden);
    if (bulkRemove) {
      bulkRemove.disabled = removalDisabled || Boolean(query);
      bulkRemove.title = query ? d("clearSearch") : removalTitle;
    }
    if (!noMatch.hidden) detail.replaceChildren(node("p", "empty-state", d("noMatch")));
    else if (!entries.some(item => item.id === selectedRows.get(tab) && !item.entry.hidden)) {
      entries.find(item => !item.entry.hidden)?.choose();
    }
  };
  search.addEventListener("input", filter);
  filter();
  (entries.find(item => item.id === selected && !item.entry.hidden) || entries.find(item => !item.entry.hidden))?.choose();
  shell.append(list, detail);
  table.replaceWith(shell);
  const toolbar = shell.parentElement;
  // Keep filtering beside its list, leaving the reading pane unobstructed.
  for (const control of [...toolbar.children]) {
    if (control.classList.contains("segmented") || control.classList.contains("list-toolbar")) {
      searchBox.after(control);
    }
  }
  root.classList.add("work-queue");
}

// Reuse the full review view inline on its own page; cross-page reviews stay drawers.
function placeReview({ state, t }) {
  const drawer = document.querySelector("#drawerRoot > .review-drawer");
  const target = state.tab === "triage" && state.selectedEmail ? document.querySelector("#triageDetail")
    : state.tab === "drafts" && state.selectedDraft ? document.querySelector("#draftsDetail") : null;
  if (!drawer || !target) return;
  drawer.classList.add("inline-review");
  const sections = [...drawer.querySelectorAll(":scope > .drawer-section")];
  const grids = [...drawer.querySelectorAll(":scope > .drawer-grid")];
  const actions = drawer.querySelector(".drawer-actions");
  if (state.selectedEmail) {
    const header = drawer.querySelector(".drawer-header");
    header.after(actions);
    const extra = node("details", "review-extra");
    extra.append(node("summary", "", t("design.more")));
    // Body, reason, category, and assignment stay visible; longer context is expandable.
    extra.append(...grids.slice(1), sections[1], sections[2], sections[4]);
    sections[0]?.querySelector(".preview")?.classList.add("review-email-body");
    sections[3]?.classList.add("reason-surface");
    drawer.querySelector(".drawer-note").before(extra);
    if (state.summary && sections[5]) actions.after(sections[5]);
  } else {
    const source = node("details", "review-extra");
    source.append(node("summary", "", t("design.source")), sections[0], sections[1]);
    drawer.querySelector(".drawer-header").after(source);
    grids.forEach(grid => grid.classList.add("draft-summary-stats"));
  }
  target.replaceChildren(drawer);
  document.querySelector("#drawerRoot").replaceChildren();
}

function renderComposeLayout({ t }) {
  const panel = document.querySelector("#compose > .grid > .panel");
  if (!panel) return;
  const safety = panel.querySelector(":scope > .preview");
  const metadata = panel.querySelector(":scope > .drawer-section");
  const actions = panel.querySelector(":scope > .actions");
  const note = panel.querySelector(".form-grid > .preview");
  const title = panel.querySelector(".panel-title > div");
  title?.remove();
  if (metadata) {
    const details = node("details", "compose-metadata");
    details.append(node("summary", "", t("compose.attachmentMetadata")), metadata);
    if (note) details.append(note);
    actions.before(details);
  }
  if (safety) { safety.classList.add("compose-safety"); panel.append(safety); }
}

// Settings panels are grouped without changing their inputs or persistence handlers.
function renderSettings({ state, t }) {
  const root = document.querySelector("#admin");
  const grid = root.querySelector(":scope > .grid");
  if (!grid) return;
  const panels = [...grid.children];
  if (panels.length !== 5) return;
  const keys = ["general", "safety", "employees", "categories", "activity"];
  const layout = node("div", "settings-workspace");
  const nav = node("nav", "settings-nav");
  nav.setAttribute("aria-label", t("design.settings"));
  const content = node("div", "settings-content");
  const show = key => {
    adminSection = key;
    panels.forEach((panel, index) => { panel.hidden = keys[index] !== key; });
    nav.querySelectorAll("button").forEach(control => control.classList.toggle("active", control.dataset.settingsSection === key));
  };
  keys.forEach((key, index) => {
    const control = button(t(`design.${key}`), [Settings, ShieldCheck, Users, Inbox, ListChecks][index], () => show(key));
    control.dataset.settingsSection = key;
    nav.append(control);
    panels[index].classList.add("settings-surface");
    content.append(panels[index]);
  });
  layout.append(nav, content);
  root.replaceChildren(layout);
  show(adminSection);
  const reset = panels[0].querySelector("[data-reset-demo]");
  if (reset) {
    const danger = node("section", "settings-reset");
    const label = node("h3", "", t("design.reset"));
    danger.append(label, reset);
    panels[0].append(danger);
  }
}

export function applyWorkspaceLayout(context) {
  const { state } = context;
  if (previousTab === "admin" && state.tab !== "admin") adminSection = "general";
  previousTab = state.tab;
  renderShell(context);
  renderOverview(context);
  renderQueue(context, "triage", {
    records: state.emails, trigger: "[data-review-email]", attribute: "data-review-email",
    title: item => item.subject, subtitle: item => item.sender, avatar: item => item.sender,
    status: item => `${item.category} · ${item.workflowLabel || item.status}`,
    omit: [0, 1], labels: ["subject", "sender", "category", "assigned", "workflow", "status"]
  });
  renderQueue(context, "drafts", {
    records: state.drafts, trigger: "[data-review-draft]", attribute: "data-review-draft", checkColumn: 0,
    title: item => item.title, subtitle: item => item.source, avatar: item => item.source,
    status: item => item.statusLabel, omit: [0, 1], labels: ["review", "subject", "source", "risk", "status"]
  });
  renderQueue(context, "tasks", {
    records: state.tasks, trigger: "[data-review-task]", attribute: "data-review-task", checkColumn: 0,
    title: item => item.title, subtitle: item => item.assignedEmployee?.name || context.t("tasks.unassigned"), avatar: item => item.assignedEmployee?.name || item.title,
    status: item => `${item.priority} · ${item.status}`, omit: [0], labels: ["done", "details", "priority", "assigned", "source", "notes"]
  });
  placeReview(context);
  renderSettings(context);
  renderComposeLayout(context);
}
