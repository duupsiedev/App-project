import assert from "node:assert/strict";
const storage = new Map();
let full = false;
globalThis.window = { localStorage: {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => { if (full) throw new Error("Quota exceeded"); storage.set(key, value); },
  removeItem: key => storage.delete(key)
} };
let api = await import("../src/api/mockApi.js");
const defaults = await api.getPersonalPreferences();
assert.equal(defaults.theme, "light");
await assert.rejects(api.savePersonalPreferences({ theme: "dark" }), { translationKey: "preferences.sessionRequired" });
await api.setDemoSession("admin-owner");
const emails = await api.listEmails();
const settings = await api.getSettings();
const categories = await api.listCategories();
const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aN4sAAAAASUVORK5CYII=";
const admin = await api.savePersonalPreferences({ theme: "dark", backgroundImage: image, backgroundDim: 75, labelColors: { "cat-accounting": "#abcdef" }, hiddenCategoryIds: ["cat-accounting"] });
await api.setDemoSession("employee-marcus");
assert.deepEqual(await api.getPersonalPreferences(), defaults);
const employee = await api.savePersonalPreferences({ theme: "system", labelColors: { "cat-sales": "#ffeedd" } });
await assert.rejects(api.savePersonalPreferences({ theme: "dark", autoSend: true }), { translationKey: "preferences.invalid" });
await assert.rejects(api.savePersonalPreferences({ accountId: "admin-owner" }), { translationKey: "preferences.invalid" });
await assert.rejects(api.saveSettings({ autoSend: true }));
for (const invalid of [{ theme: "unknown" }, { backgroundImage: "https://example.test/photo.jpg" }, { backgroundImage: "data:image/svg+xml;base64,PHN2Zz4=" }, { backgroundImage: `data:image/png;base64,${"A".repeat(700000)}` }, { labelColors: { "cat-sales": "red; background: url(x)" } }, { hiddenCategoryIds: ["missing-id"] }, { backgroundDim: 10 }]) {
  await assert.rejects(api.savePersonalPreferences(invalid));
}
assert.deepEqual(await api.getPersonalPreferences(), employee);
const storedBefore = storage.get("courio.mockState.v1");
full = true;
await assert.rejects(api.savePersonalPreferences({ theme: "dark" }), { translationKey: "preferences.storageFull" });
full = false;
assert.deepEqual(await api.getPersonalPreferences(), employee);
assert.equal(storage.get("courio.mockState.v1"), storedBefore);
await api.resetPersonalPreferences();
assert.deepEqual(await api.getPersonalPreferences(), defaults);
await api.setDemoSession("admin-owner");
assert.deepEqual(await api.getPersonalPreferences(), admin);
api = await import("../src/api/mockApi.js?reload-preferences");
assert.deepEqual(await api.getPersonalPreferences(), admin);
assert.deepEqual(await api.getSettings(), settings);
assert.deepEqual(await api.listCategories(), categories);
assert.deepEqual(await api.listEmails(), emails);
await api.logoutDemoSession();
assert.deepEqual(await api.getPersonalPreferences(), defaults);
// An older saved demo gains defaults, preserving existing business data.
const legacy = JSON.parse(storage.get("courio.mockState.v1"));
delete legacy.preferencesByAccount;
storage.set("courio.mockState.v1", JSON.stringify(legacy));
api = await import("../src/api/mockApi.js?legacy-preferences");
await api.setDemoSession("admin-owner");
assert.deepEqual(await api.getPersonalPreferences(), defaults);
assert.deepEqual(await api.listEmails(), emails);
console.log("PASS: account isolation, role boundaries, validation, safe image contracts, storage failure rollback, reset, persistence, legacy compatibility, unchanged business data.");
