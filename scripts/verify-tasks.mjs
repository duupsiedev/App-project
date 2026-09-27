// Isolated API regression checks: never reads the user's browser storage.
import assert from "node:assert/strict";
const storage = new Map();
globalThis.window = { localStorage: {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
  removeItem: key => storage.delete(key)
} };
let api = await import("../src/api/mockApi.js");
await api.setDemoSession("admin-owner");
const originalEmails = await api.listEmails();
const originalCount = (await api.listTasks()).length;
await assert.rejects(api.createTask({ title: " " }), { code: "titleRequired" });
await assert.rejects(api.createTask({ title: "Bad date", dueAt: "2026-02-30" }), { code: "invalidDate" });
let task = await api.createTask({ title: "Call supplier", notes: "First note", assignedTo: "emp-2", priority: "High", dueAt: "2026-10-02" });
assert.equal((await api.listTasks()).length, originalCount + 1);
await api.updateTask(task.id, { assignedTo: "" });
assert.equal((await api.listTasks()).find(item => item.id === task.id).assignedTo, "");
task = await api.updateTask(task.id, { notes: "New note", priority: "Low", dueAt: "2026-10-03" });
const edit = task.history.at(-1);
task = await api.restoreTaskChange(task.id, edit.id);
assert.equal(task.notes, "First note");
assert.equal(task.priority, "High");
assert.equal(task.dueAt, "2026-10-02");
assert.equal(task.history.at(-1).action, "restored");
task = await api.updateTask(task.id, { status: "Done" });
task = await api.restoreTaskChange(task.id, task.history.at(-1).id);
assert.equal(task.status, "Open");
assert.equal(task.completedAt, null);
const linked = await api.getOrCreateEmailTask(originalEmails[0].id);
assert.equal((await api.getOrCreateEmailTask(originalEmails[0].id)).id, linked.id);
await api.updateTask(linked.id, { assignedTo: "" });
assert.equal((await api.listTasks()).find(item => item.id === linked.id).assignedTo, "");
await api.updateTask(linked.id, { assignedTo: "emp-2" });
await api.updateTask(task.id, { assignedTo: "emp-2" });
await api.setDemoSession("employee-marcus");
assert((await api.listTasks()).some(item => item.id === linked.id));
await assert.rejects(api.updateTask(task.id, { assignedTo: "emp-1", notes: "Must not save" }), { code: "forbidden" });
assert.equal((await api.listTasks()).find(item => item.id === task.id).notes, "First note");
const personal = await api.createTask({ title: "My own task" });
assert.equal(personal.assignedTo, "emp-2");
await assert.rejects(api.createTask({ title: "Someone else's task", assignedTo: "emp-1" }), { code: "forbidden" });
await api.setDemoSession("admin-owner");
await api.updateTask(linked.id, { assignedTo: "emp-1" });
await api.setDemoSession("employee-marcus");
assert(!(await api.listTasks()).some(item => item.id === linked.id));
await api.setDemoSession("admin-owner");
const employee = await api.createEmployee({ name: "Test Person", email: "test@example.test", title: "Manager", department: "Operations" });
await api.updateTask(task.id, { assignedTo: employee.id });
task = await api.updateTask(task.id, { assignedTo: "emp-1" });
const reassignment = task.history.at(-1);
await api.deleteEmployee(employee.id);
await assert.rejects(api.restoreTaskChange(task.id, reassignment.id), { code: "invalidAssignee" });
// Reload the same persisted contract, including legacy history entries.
api = await import("../src/api/mockApi.js?reload");
task = (await api.listTasks()).find(item => item.id === task.id);
assert.equal(task.notes, "First note");
assert.equal(task.dueAt, "2026-10-02");
assert(task.history.some(entry => entry.action === "restored"));
assert.deepEqual((await api.listEmails()).map(email => [email.id, email.workflowState, email.assignedTo]), originalEmails.map(email => [email.id, email.workflowState, email.assignedTo]));
assert((await api.listTasks()).some(item => item.history.some(entry => !entry.before && !entry.canRestore)));
console.log("PASS: create, validation, atomic updates, recovery, delegation, permissions, deleted assignees, legacy history, persistence, unchanged email workflows.");
