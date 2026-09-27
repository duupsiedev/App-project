import { escapeHtml } from "./helpers.js";

// Temporary form values only; records and validation belong to the API.
export function renderTaskEditor(root, task, employees, admin, t) {
  const label = key => t(`taskWork.${key}`);
  const options = (values, current) => values.map(value => `<option value="${value}" ${value === current ? "selected" : ""}>${label(value)}</option>`).join("");
  root.innerHTML = `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${label(task.id ? "edit" : "add")}">
      <div class="drawer-header"><h2>${label(task.id ? "edit" : "add")}</h2><button class="btn subtle" data-close-drawer>${label("cancel")}</button></div>
      <form data-task-editor class="form-grid">
        <label>${label("title")}<input name="title" required value="${escapeHtml(task.title || "")}"></label>
        <label>${label("notes")}<textarea name="notes">${escapeHtml(task.notes || "")}</textarea></label>
        <label>${label("priority")}<select name="priority">${options(["High", "Medium", "Low"], task.priority || "Medium")}</select></label>
        <label>${label("dueAt")}<input type="date" name="dueAt" value="${escapeHtml(task.dueAt || "")}"></label>
        ${admin ? `<label>${label("assignedTo")}<select name="assignedTo"><option value="">${t("tasks.unassigned")}</option>${employees.map(employee => `<option value="${escapeHtml(employee.id)}" ${task.assignedTo === employee.id ? "selected" : ""}>${escapeHtml(employee.name)}</option>`).join("")}</select></label>` : ""}
        ${task.id ? `<label>${label("status")}<select name="status">${options(["Open", "Done"], task.status)}</select></label>` : ""}
        <button class="btn primary" type="submit">${label("save")}</button>
      </form>
    </aside>`;
}
