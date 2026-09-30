// Local browser regression check. Supply an installed Playwright module path.
// Usage: node scripts/verify-redesign.mjs <playwright/index.mjs> [local-url]
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1490, height: 1054 } });
const errors = [];
const externalRequests = [];
page.on("pageerror", error => errors.push(error.message));
page.on("request", request => {
  const url = new URL(request.url());
  if (["http:", "https:"].includes(url.protocol) && !["127.0.0.1", "localhost"].includes(url.hostname)) externalRequests.push(url.origin);
});
await mkdir(".courio-review", { recursive: true });
try {
  await page.goto(process.argv[3] || "http://127.0.0.1:5173");
  await page.locator("[data-login-account]").first().waitFor();
  console.log(await page.locator(".auth-grid").innerText());
  await page.locator("[data-login-account]").first().click();
  await page.locator(".auth-overlay").waitFor({ state: "hidden" });
  assert.equal(await page.locator(".nav button:visible").count(), 10, "All admin destinations remain available");
  for (const tab of ["dashboard", "triage", "tasks", "drafts", "compose", "rules", "import", "admin", "preferences"]) {
    await page.locator(`[data-destination="${tab}"]`).last().click();
    await page.locator(`#${tab}.active`).waitFor();
    assert.equal(await page.locator(`#${tab}`).isVisible(), true);
    await page.screenshot({ path: `.courio-review/${tab}-desktop.png` });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    assert.equal(overflow, false, `${tab}: no page horizontal overflow`);
  }
  await page.locator('[data-destination="admin"]').last().click();
  for (const section of ["employees", "categories", "activity", "safety", "general"]) {
    await page.locator(`[data-settings-section="${section}"]`).click();
    assert.equal(await page.locator(".settings-surface:visible").count(), 1);
  }
  const originalCompany = await page.locator('[data-setting="companyName"]').inputValue();
  await page.locator('[data-setting="companyName"]').fill("Unsaved test company");
  await page.locator('[data-destination="tasks"]').click();
  await page.locator('[data-destination="admin"]').last().click();
  assert.equal(await page.locator('[data-setting="companyName"]').inputValue(), originalCompany);
  await page.locator('[data-setting="companyName"]').fill("Saved test company");
  await page.locator('[data-save-settings]').click();
  await page.locator('[data-save-settings]:enabled').waitFor();
  await page.reload();
  await page.locator('[data-destination="admin"]').last().click();
  assert.equal(await page.locator('[data-setting="companyName"]').inputValue(), "Saved test company");
  await page.locator('[data-destination="admin"]').first().click();
  await page.locator('[data-add-employee]').click();
  assert.equal(await page.locator('[data-save-employee]').isVisible(), true);
  await page.locator('[data-close-drawer]').filter({ hasText: "Close" }).last().click();
  await page.locator('[data-settings-section="categories"]').click();
  await page.locator('[data-add-category]').click();
  assert.equal(await page.locator('[data-save-category]').isVisible(), true);
  await page.locator('[data-close-drawer]').filter({ hasText: "Close" }).last().click();
  await page.locator('[data-destination="tasks"]').click();
  await page.locator('[data-task-note]').fill("A local task note retained by the new layout.");
  await page.locator('[data-save-task-note]').click();
  await page.locator('[data-save-task-note]:enabled').waitFor();
  await page.locator('#tasks .queue-item').nth(1).click();
  await page.locator('#tasks .queue-item').first().click();
  assert.equal(await page.locator('[data-task-note]').inputValue(), "A local task note retained by the new layout.");
  await page.locator('[data-destination="compose"]').click();
  await page.locator('[data-compose-field="to"]').fill("test@example.test");
  await page.locator('[data-compose-field="subject"]').fill("Local composer regression");
  await page.locator('[data-compose-field="body"]').fill("This message remains a local saved draft.");
  await page.locator('[data-save-compose]').click();
  await page.locator('[data-save-compose]:enabled').waitFor();
  await page.reload();
  await page.locator('[data-destination="compose"]').click();
  await page.locator('[data-open-compose-draft]').first().click();
  assert.equal(await page.locator('[data-compose-field="body"]').inputValue(), "This message remains a local saved draft.");
  await page.locator('.topbar-assistant').click();
  await page.locator('[data-assistant-input]').fill("show urgent emails");
  await page.locator('.assistant-form').evaluate(form => form.requestSubmit());
  await page.locator('#triage.active').waitFor();
  await page.locator('.topbar-assistant').click();
  await page.locator('[data-destination="triage"]').click();
  await page.locator('#triage input[type="search"]').fill("invoice");
  assert.equal(await page.locator('[data-archive-filtered]').isDisabled(), true, "Search must not silently change the removal scope");
  await page.locator('#triage input[type="search"]').fill("");
  await page.locator("#triage .queue-item").first().click();
  await page.locator("#triageDetail .inline-review").waitFor();
  assert.equal(await page.locator("[data-email-category]").isVisible(), true);
  assert.equal(await page.locator("[data-email-assignee]").isVisible(), true);
  await page.screenshot({ path: ".courio-review/triage-review-desktop.png" });
  await page.locator("[data-generate-draft]").click();
  await page.locator("[data-draft-editor]").waitFor();
  await page.locator("[data-draft-editor]").fill("A reviewed local reply for the redesign regression test.");
  await page.locator("[data-save-draft]").click();
  await page.locator("[data-approve-draft]:enabled").last().waitFor();
  await page.locator("[data-close-drawer]").filter({ hasText: "Close" }).last().click();
  await page.locator('[data-destination="drafts"]').click();
  await page.locator("#drafts .queue-item").first().click();
  await page.locator("#draftsDetail [data-draft-editor]").waitFor();
  assert.equal(await page.locator("[data-draft-editor]").inputValue(), "A reviewed local reply for the redesign regression test.");
  await page.screenshot({ path: ".courio-review/draft-review-desktop.png" });
  await page.locator("#draftsDetail [data-approve-draft]").click();
  await page.locator("#draftsDetail [data-approve-draft]").waitFor({ state: "hidden" });
  await page.reload();
  await page.locator('[data-destination="drafts"]').waitFor();
  await page.locator('[data-destination="drafts"]').click();
  assert.match(await page.locator("#drafts").innerText(), /Ready|ready|complete/);
  await page.locator('[data-destination="admin"]').last().click();
  await page.locator('[data-setting="language"]').selectOption("fr");
  await page.locator('[data-save-settings]').click();
  await page.locator('html[lang="fr"]').waitFor();
  assert.equal(await page.locator('#pageTitle').innerText(), "Paramètres");
  await page.screenshot({ path: '.courio-review/admin-french-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  for (const tab of ["dashboard", "triage", "tasks", "drafts", "compose", "rules", "import", "admin", "preferences"]) {
    await page.locator(".mobile-menu").click();
    await page.locator(`[data-destination="${tab}"]`).last().click();
    await page.screenshot({ path: `.courio-review/${tab}-mobile.png` });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${tab}: mobile overflow`);
  }
  await page.locator('[data-logout-demo]').click();
  await page.locator('[data-login-account]').nth(1).click();
  await page.locator('.auth-overlay').waitFor({ state: 'hidden' });
  await page.locator('.mobile-menu').click();
  assert.equal(await page.locator('.nav button:visible').count(), 4, 'Employee destinations include personal preferences but exclude Admin');
  assert.equal(await page.locator('[data-destination="admin"]').first().isVisible(), false);
  await page.screenshot({ path: '.courio-review/employee-mobile.png' });
  assert.deepEqual(externalRequests, [], "App makes no external service requests");
  assert.deepEqual(errors, [], "No runtime errors");
  console.log("PASS: all pages, admin sections, settings save/discard/persistence, team/category drawers, task notes, composer persistence, assistant navigation, inline review, draft save/approve/sync/persistence, French, desktop/mobile overflow.");
} finally {
  await browser.close();
}
