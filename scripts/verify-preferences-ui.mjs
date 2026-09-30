// Isolated browser context: no user demo state or external services are used.
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1490, height: 1054 } });
const errors = [];
const external = [];
page.on("pageerror", error => errors.push(error.message));
page.on("request", request => { if (/^https?:/.test(request.url()) && !request.url().startsWith("http://127.0.0.1:5173")) external.push(request.url()); });
const go = async tab => {
  if (page.viewportSize().width < 900) await page.locator('.mobile-menu').click();
  await page.locator(`[data-destination="${tab}"]`).last().click();
};
const save = async () => {
  await page.locator('[data-save-preferences]').click();
  await page.locator('[data-save-preferences]:enabled').waitFor();
};
await mkdir('.courio-review', { recursive: true });
try {
  await page.goto('http://127.0.0.1:5173');
  await page.locator('[data-login-account="admin-owner"]').click();
  await page.locator('.auth-overlay').waitFor({ state: 'hidden' });
  await go('triage');
  const count = await page.locator('#triage .queue-item').count();
  await go('preferences');
  await page.locator('[name="theme"][value="dark"]').check();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light', 'Unsaved theme is not applied');
  await go('tasks');
  await go('preferences');
  assert.equal(await page.locator('[name="theme"][value="light"]').isChecked(), true, 'Leaving discards unsaved values');
  await page.locator('[name="theme"][value="dark"]').check();
  await page.locator('[data-label-color="cat-accounting"]').fill('#123456');
  await page.locator('[data-category-visible="cat-accounting"]').uncheck();
  // Synthetic local test image; never fetched or uploaded.
  const image = await page.evaluate(() => {
    const canvas = document.createElement('canvas'); canvas.width = 2000; canvas.height = 1200;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#80af94'; ctx.fillRect(0, 0, 2000, 1200);
    ctx.fillStyle = '#b56b76'; ctx.fillRect(900, 0, 1100, 1200);
    return canvas.toDataURL('image/png').split(',')[1];
  });
  await page.locator('[data-preference-image]').setInputFiles({ name: 'local-test.png', mimeType: 'image/png', buffer: Buffer.from(image, 'base64') });
  await page.locator('[data-remove-background]:enabled').waitFor();
  await save();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  assert.equal(await page.locator('html').evaluate(el => el.classList.contains('has-personal-background')), true);
  assert.equal(await page.locator('main').evaluate(el => getComputedStyle(el, '::before').position), 'absolute', 'Background stays inside workspace instead of covering the sidebar');
  await go('triage');
  assert.equal(await page.locator('#triage .queue-item').count(), count, 'Hiding shortcut does not hide email');
  assert.equal(await page.locator('[data-triage-category-filter] option[value="Accounting"]').count(), 0);
  await page.locator('#triage .queue-item').filter({ hasText: 'Invoice' }).first().click();
  await page.locator('[data-email-task]').waitFor();
  assert.equal(await page.locator('#triageDetail [data-category-label="Accounting"]').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(18, 52, 86)');
  await page.screenshot({ path: '.courio-review/appearance-inbox-dark.png' });
  await page.reload();
  await page.locator('[data-destination="preferences"]').waitFor();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  for (const tab of ['dashboard', 'tasks', 'compose', 'drafts', 'rules', 'import', 'admin', 'preferences']) {
    await go(tab);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${tab} desktop overflow`);
    await page.screenshot({ path: `.courio-review/appearance-${tab}-dark.png` });
  }
  await page.locator('[data-remove-background]').click();
  await page.locator('[data-discard-preferences]').click();
  assert.equal(await page.locator('[data-remove-background]').isEnabled(), true);
  await page.locator('[data-preference-image]').setInputFiles({ name: 'bad.svg', mimeType: 'image/svg+xml', buffer: Buffer.from('<svg/>') });
  await page.waitForFunction(() => document.querySelector('#toast')?.textContent.includes('valid JPEG'));
  await page.locator('[name="theme"][value="system"]').check();
  await save();
  await page.emulateMedia({ colorScheme: 'light' });
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');
  await page.locator('[data-logout-demo]').click();
  await page.locator('[data-login-account="employee-marcus"]').click();
  await page.locator('.auth-overlay').waitFor({ state: 'hidden' });
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  assert.equal(await page.locator('html').evaluate(el => el.classList.contains('has-personal-background')), false);
  assert.equal(await page.locator('[data-destination="admin"]').last().isVisible(), false);
  await go('preferences');
  await page.locator('[name="theme"][value="dark"]').check();
  await save();
  await page.locator('[data-reset-preferences]').click();
  await page.locator('[data-save-preferences]:enabled').waitFor();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  await page.locator('[data-logout-demo]').click();
  await page.locator('[data-login-account="admin-owner"]').click();
  await page.locator('.auth-overlay').waitFor({ state: 'hidden' });
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark', 'Employee reset did not change admin');
  await go('admin');
  await page.locator('[data-setting="language"]').selectOption('fr');
  await page.locator('[data-save-settings]').click();
  await page.locator('html[lang="fr"]').waitFor();
  await go('preferences');
  assert.equal(await page.locator('#pageTitle').innerText(), 'Mes préférences');
  await page.screenshot({ path: '.courio-review/appearance-preferences-fr.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '.courio-review/appearance-preferences-mobile.png', fullPage: true });
  for (const tab of ['preferences', 'tasks', 'triage', 'compose', 'admin']) {
    await go(tab);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${tab} mobile overflow`);
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(external, []);
  console.log('PASS: themes/device changes, saved-only behavior, image upload/removal/validation, category colors/visibility, persistence, account isolation, employee access, French, all-page dark screenshots, mobile overflow, no external requests.');
} finally { await browser.close(); }
