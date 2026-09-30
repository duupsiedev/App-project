# Personal appearance preferences

## What changed

Admin and Employee each have a My preferences page. They can save Light, Dark, or device-controlled theme; a local background image and readability shading; personal category label colors; and which category shortcuts appear in the Inbox filter. Common actions now use the existing Lucide icons alongside their labels.

Shared workspace settings remain admin-only. Personal preferences never alter categories, email visibility, assignments, approval rules, or workflow states. Removing a category shortcut does not remove messages from All categories, and category choices in review/rule editors remain intact.

## Ownership and compatibility

The existing localStorage state gains preferencesByAccount keyed by demo account ID. Missing values default to the current Light appearance, no background, shared category colors, and all shortcuts visible. Existing emails, tasks, drafts, settings, and category contracts are unchanged. Color overrides reference category IDs, so renaming a category preserves personal colors.

getPersonalPreferences, savePersonalPreferences, and resetPersonalPreferences act on the current demo session only. A future backend can expose these as current-user preference endpoints. The frontend holds only the returned saved values and a temporary unsaved form. Save applies changes; Discard, navigation away, and refresh discard unsaved edits. Restore my defaults resets only the current account's saved appearance. Reset demo data still resets the full demo, including preferences.

## Background handling

- JPEG, PNG, and WebP inputs only, maximum 5 MB.
- Decoded and resized locally to at most 1600 pixels on the longest side.
- Stored as a JPEG data URL of at most 700,000 characters, roughly 0.5 MB of image bytes.
- No upload, external image URLs, SVG, service, or new dependency.
- A storage failure leaves the saved preferences unchanged and shows an error.
- Workspace surfaces remain opaque for readability; the sidebar is outside the background layer.

These are simulated accounts in the same browser, not production authentication or cross-device preferences. Browser storage clearing removes the preferences and background images.

## Files

- src/api/mockApi.js: per-account defaults, validation, migration, persistence.
- src/main.js: preferences route, form lifecycle, API actions, category badge hooks.
- src/ui/workspaceLayout.js: My preferences navigation for both roles.
- src/ui/preferencesView.js: preference controls and local image preparation.
- src/ui/appearance.js: theme application, personal badge colors, action icons.
- src/styles/appearance.css: dark palette, background layer, responsive preference layout.
- src/i18n/preferencesCopy.js and translations.js: English/French text.
- scripts/verify-preferences.mjs and verify-preferences-ui.mjs: isolated API/browser checks.
- scripts/verify-redesign.mjs: existing regression checks include the new destination.
- docs/: regenerated static production bundle.

## Manual checklist

1. Log in as Admin, open My preferences, choose Dark, and Save. Visit Inbox, Tasks, Drafts, Compose, and Settings.
2. Choose Light without saving. Leave and return: the form should still show saved Dark.
3. Choose Use device setting, save, and change the operating system/browser color scheme.
4. Choose a local photo, adjust shading, and Save. Refresh and confirm it persists. The sidebar and reading surfaces should remain readable.
5. Remove the image, choose Discard, and confirm the saved image returns. Remove it again and Save to clear it.
6. Set an Accounting label color and hide its shortcut. All categories must still show Accounting emails. Email review must still offer Accounting.
7. Switch to Employee. Appearance should start with that account's own defaults. My preferences is accessible; Admin is not.
8. Save different employee preferences. Switch back to Admin and confirm the original admin choices remain.
9. Restore my defaults for one account and confirm the other account is unchanged.
10. Check French labels and a narrow/mobile viewport. Invalid or oversized images should give a clear error.

## Verification

API checks cover account isolation, role restrictions, validation, image contracts, storage-failure rollback, reset, reload, legacy compatibility, and unchanged business data. Browser checks cover saved-only behavior, upload/removal, device theme changes, color overrides, shortcut visibility, account switching, French, mobile overflow, dark-mode page screenshots, and absence of external requests. Existing app smoke checks exercise navigation, settings, task notes, compose, assistant, and draft approval. The production bundle is checked with npm run build.
