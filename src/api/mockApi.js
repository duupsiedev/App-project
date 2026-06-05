import { mockEmails } from "../data/mockEmails.js";
import { mockEmployees } from "../data/mockEmployees.js";
import { mockRules } from "../data/mockRules.js";

const STORAGE_KEY = "courio.mockState.v1";

const defaultState = {
  emails: structuredClone(mockEmails),
  employees: structuredClone(mockEmployees),
  rules: structuredClone(mockRules),
  drafts: mockEmails.map((email) => ({
    id: email.id,
    title: email.suggestedAction,
    source: email.subject,
    text: email.draft,
    risk: email.urgency === "High" ? "High" : "Low",
    status: "Needs approval"
  })),
  settings: {
    productName: "Courio",
    mode: "Simple",
    approvalRequired: true,
    autoSend: false
  },
  completedActions: []
};

const state = loadState();
const delay = (ms = 550) => new Promise((resolve) => setTimeout(resolve, ms));

function clone(value) {
  return structuredClone(value);
}

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultState);

    const parsed = JSON.parse(saved);
    return {
      ...clone(defaultState),
      ...parsed,
      emails: mergeById(defaultState.emails, parsed.emails),
      employees: mergeById(defaultState.employees, parsed.employees),
      rules: mergeById(defaultState.rules, parsed.rules),
      drafts: mergeById(defaultState.drafts, parsed.drafts),
      settings: {
        ...defaultState.settings,
        ...(parsed.settings || {})
      }
    };
  } catch {
    return clone(defaultState);
  }
}

function mergeById(defaultItems, savedItems = []) {
  return defaultItems.map((defaultItem) => {
    const savedItem = savedItems.find((item) => item.id === defaultItem.id);
    return savedItem ? { ...defaultItem, ...savedItem } : clone(defaultItem);
  });
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

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

function findEmployee(id) {
  const employee = state.employees.find((item) => item.id === id);
  if (!employee) throw new Error("Employee not found.");
  return employee;
}

export async function listEmails() {
  await delay();
  return clone(state.emails);
}

export async function listEmployees() {
  await delay(350);
  return clone(state.employees);
}

export async function listRules() {
  await delay(400);
  return clone(state.rules);
}

export async function listDrafts() {
  await delay(400);
  return clone(state.drafts);
}

export async function getSettings() {
  await delay(250);
  return clone(state.settings);
}

export async function saveSettings(settings) {
  await delay(450);
  state.settings = {
    ...state.settings,
    ...settings,
    approvalRequired: true,
    autoSend: false
  };
  persistState();
  return clone(state.settings);
}

export async function resetDemoData() {
  await delay(350);
  window.localStorage.removeItem(STORAGE_KEY);
  return clone(defaultState);
}

export async function getEmailThread(id) {
  await delay();
  const email = findEmail(id);
  return clone({ ...email, messages: email.thread });
}

export async function summarizeThread(id) {
  await delay(700);
  return findEmail(id).summary;
}

export async function generateDraftReply(id) {
  await delay(750);
  const email = findEmail(id);
  const draft = findDraft(id);
  draft.text = email.draft;
  draft.status = draft.status === "Approved" ? "Approved" : "Generated";
  persistState();
  return draft.text;
}

export async function saveDraft(id, draftText) {
  await delay();
  if (!draftText || draftText.trim().length < 10) {
    throw new Error("Draft is too short to save.");
  }

  const draft = findDraft(id);
  draft.text = draftText;
  draft.status = "Saved";
  persistState();
  return clone(draft);
}

export async function approveDraft(id) {
  await delay();
  const draft = findDraft(id);
  draft.status = "Approved";
  persistState();
  return clone(draft);
}

export async function toggleRule(id) {
  await delay(450);
  const rule = state.rules.find((item) => item.id === id);
  if (!rule) throw new Error("Rule not found.");
  rule.on = !rule.on;
  persistState();
  return clone(rule);
}

export async function markEmailDone(id) {
  await delay();
  const email = findEmail(id);
  email.status = "Done";
  state.completedActions.push({
    id: `action-${Date.now()}`,
    type: "email-done",
    emailId: id,
    completedAt: new Date().toISOString()
  });
  persistState();
  return clone(email);
}

export async function updateEmailCategory(id, category) {
  await delay(400);
  if (!category) throw new Error("Choose a category before saving.");
  const email = findEmail(id);
  email.category = category;
  persistState();
  return clone(email);
}

export async function assignEmail(id, employeeId) {
  await delay(400);
  findEmployee(employeeId);
  const email = findEmail(id);
  email.assignedTo = employeeId;
  persistState();
  return clone(email);
}
