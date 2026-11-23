import assert from "node:assert/strict";
const storage = new Map();
globalThis.window = { localStorage: {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key)
} };
let api = await import("../src/api/mockApi.js");
await api.setDemoSession("admin-owner");
const before = await api.listEmails();
for (const message of ["What recurring problems appear in these drafts?", "Quels problèmes reviennent dans les courriels?", "Do not reset demo data", "Why are invoices often late?"]) {
  const result = await api.sendAssistantCommand(message, { language: "fr" });
  assert(!result.action, message);
  assert(result.messages.at(-1).text.includes("démo locale"));
}
for (const [message, type] of [["show dratfs", "show_drafts"], ["show drafts needing approval", "show_drafts"], ["affiche les brouillons", "show_drafts"], ["courriels urgents", "show_triage"], ["invoices", "show_triage"], ["regenerate digest", "generate_digest"], ["reset demo", "reset_demo_data"]]) {
  assert.equal((await api.sendAssistantCommand(message)).action?.type, type, message);
}
assert.deepEqual(await api.listEmails(), before, "Navigation/reset proposal does not mutate email records");
// Simulate a legacy mailbox with the old unsafe template, without touching real storage.
const key = "courio.mockState.v1";
await api.getEmailThread(before[0].id);
const saved = JSON.parse(storage.get(key));
const complaint = saved.emails.find(email => email.category === "Client complaint");
complaint.draft = "I will make sure you receive a clear update today.";
storage.set(key, JSON.stringify(saved));
api = await import("../src/api/mockApi.js?legacy-template");
await api.getEmailThread(complaint.id);
const draft = await api.generateDraftReply(complaint.id);
assert(!draft.text.includes("update today"));
await api.getDraftDetail(draft.id);
const edited = "Human reviewed response: please contact our office about this issue.";
await api.saveDraft(draft.id, edited);
await api.approveDraft(draft.id);
assert.equal((await api.generateMorningDigest()).readyForHumanSend, 1);
api = await import("../src/api/mockApi.js?approved-reload");
assert.equal((await api.getDraftDetail(draft.id)).text, edited);
assert.equal((await api.listEmails()).find(email => email.id === complaint.id).workflowLabel, "Ready for human send");
console.log("PASS: bounded EN/FR commands, typo support, unsupported/negated questions, reset proposal only, safe legacy templates, approved draft persistence and ready count.");
