import { mockEmails } from "../data/mockEmails.js";
import { mockRules } from "../data/mockRules.js";

const state = {
  emails: structuredClone(mockEmails),
  rules: structuredClone(mockRules),
  drafts: mockEmails.map((email) => ({
    id: email.id,
    title: email.suggestedAction,
    source: email.subject,
    text: email.draft,
    status: "Needs approval"
  }))
};

const delay = (ms = 550) => new Promise((resolve) => setTimeout(resolve, ms));

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

export async function listEmails() {
  await delay();
  return structuredClone(state.emails);
}

export async function listRules() {
  await delay(400);
  return structuredClone(state.rules);
}

export async function listDrafts() {
  await delay(400);
  return structuredClone(state.drafts);
}

export async function getEmailThread(id) {
  await delay();
  const email = findEmail(id);
  return structuredClone({ id: email.id, subject: email.subject, messages: email.thread });
}

export async function summarizeThread(id) {
  await delay(700);
  return findEmail(id).summary;
}

export async function generateDraftReply(id) {
  await delay(750);
  return findEmail(id).draft;
}

export async function saveDraft(id, draftText) {
  await delay();
  const draft = findDraft(id);
  draft.text = draftText;
  draft.status = "Saved";
  return structuredClone(draft);
}

export async function approveDraft(id) {
  await delay();
  const draft = findDraft(id);
  draft.status = "Approved";
  return structuredClone(draft);
}

export async function toggleRule(id) {
  await delay(450);
  const rule = state.rules.find((item) => item.id === id);
  if (!rule) throw new Error("Rule not found.");
  rule.on = !rule.on;
  return structuredClone(rule);
}

export async function markEmailDone(id) {
  await delay();
  const email = findEmail(id);
  email.status = "Done";
  return structuredClone(email);
}
