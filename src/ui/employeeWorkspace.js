import { escapeHtml } from "./helpers.js";

export function renderTeam(root, employees, t) {
  root.innerHTML = `<label class="list-toolbar below-sm">${t("employee.searchTeam")}<input type="search" data-team-search></label>
    <div class="team-directory">${employees.map(employee => `<article class="team-row" data-team-row>
      <div><strong>${escapeHtml(employee.name)}</strong><p>${escapeHtml(employee.title)} · ${escapeHtml(employee.department)}</p><span>${escapeHtml(employee.email)}</span></div>
      <button class="btn subtle" data-compose-colleague="${escapeHtml(employee.id)}">${t("employee.write")}</button>
    </article>`).join("")}</div><p class="empty-state" data-team-empty ${employees.length ? "hidden" : ""}>${t("employee.emptyTeam")}</p>`;
  root.querySelector("[data-team-search]").oninput = event => {
    const query = event.target.value.trim().toLocaleLowerCase();
    const rows = [...root.querySelectorAll("[data-team-row]")];
    rows.forEach(row => { row.hidden = !row.textContent.toLocaleLowerCase().includes(query); });
    root.querySelector("[data-team-empty]").hidden = rows.some(row => !row.hidden);
  };
}

export function appendEmployeeTasks(root, tasks, t) {
  const section = document.createElement("section");
  section.className = "employee-today-tasks";
  section.innerHTML = `<h2>${t("employee.myWork")} (${tasks.length})</h2>${tasks.length ? tasks.map(task => `
    <div class="team-row"><div><strong>${escapeHtml(task.title)}</strong><p>${t(`employee.${task.status}`)} · ${t(`employee.${task.priority}`)}${task.dueAt ? ` · ${escapeHtml(task.dueAt)}` : ""}</p>
    <small>${escapeHtml(task.assignedEmployees.map(employee => employee.name).join(", "))}</small></div>
    <button class="btn subtle" data-edit-task="${escapeHtml(task.id)}">${t("taskWork.edit")}</button></div>`).join("") : `<p class="empty-state">${t("employee.noTasks")}</p>`}`;
  root.append(section);
}

export function renderColleagueFollowUp(root, task, employees, t) {
  const values = task.formValues || { title: task.title, notes: "", dueAt: "", assignedTo: "" };
  root.innerHTML = `<div class="drawer-backdrop" data-close-drawer></div><aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${t("employee.followUp")}">
    <div class="drawer-header"><h2>${t("employee.followUp")}</h2><button class="btn subtle" data-close-drawer>${t("taskWork.cancel")}</button></div>
    <p>${t("employee.followUpNote")}</p>
    <form data-colleague-follow-up="${escapeHtml(task.id)}" class="form-grid">
      <label>${t("taskWork.title")}<input name="title" required value="${escapeHtml(values.title)}"></label>
      <label>${t("employee.recipient")}<select name="assignedTo" required><option value="">${t("tasks.unassigned")}</option>${employees.map(employee => `<option value="${escapeHtml(employee.id)}" ${values.assignedTo === employee.id ? "selected" : ""}>${escapeHtml(employee.name)}</option>`).join("")}</select></label>
      <label>${t("taskWork.notes")}<textarea name="notes">${escapeHtml(values.notes)}</textarea></label>
      <label>${t("taskWork.dueAt")}<input name="dueAt" type="date" value="${escapeHtml(values.dueAt)}"></label>
      <button class="btn primary" type="submit">${t("employee.submit")}</button>
    </form></aside>`;
}
