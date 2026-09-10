# Courio Design Review

## Where to Review

- `src/styles.css`: original shared controls, drawers, and baseline styles.
- `src/styles/redesign.css`: approved design direction, organized by shell, Overview, queues, Compose, Settings, and responsive rules. Loaded after the baseline.
- `src/ui/workspaceLayout.js`: presentation composition. It arranges the existing rendered controls into the new navigation, list/detail workspaces, and settings sections.
- `src/i18n/redesignCopy.js`: English/French copy introduced by this redesign, integrated into the existing translator.
- `src/main.js`: original page renderers and delegated action handlers. Calls the presentation composer after rendering.
- `src/api/mockApi.js`: workflow rules, permissions, validation, and local persistence. Unchanged by this redesign.

## How Existing Features Are Preserved

The presentation composer moves existing control nodes instead of cloning editors or implementing replacement save/approval handlers. The same `data-*` action attributes continue to reach the same handlers and API functions.

Inbox and Drafts review open in the reading pane on their own page. Reviews launched from other pages still use the existing overlay. Task checkboxes, reminders, assignment, notes, and history remain available. Compose retains saved drafts, attachment metadata, and browser printing. No sending or automatic saving was introduced.

Settings has General, Demo safeguards, Team, Categories, and Activity sections. The sidebar exposes both Settings and Team & categories. Connection opens the existing simulated setup preview. Existing role restrictions still determine which destinations are visible.

Only selection, search text, and the active settings section are held in the presentation module. Business records and saved settings remain in the existing API/state layer.

## Maintenance Boundary

The queue composer depends on the existing table column order and review-action attributes. If a page renderer adds or moves a column, update its queue configuration in `applyWorkspaceLayout` and run the browser check. Settings composition similarly expects the five existing panels. These dependencies are deliberate to keep the working action controls intact during the visual change; they are not a new backend contract.

The new copy is bilingual. Existing mock emails, rule descriptions, activity entries, and older hardcoded display copy have not been rewritten or translated by this pass.

## Verification

Run `npm run build` for the static build, which updates `docs/` for the existing GitHub Pages setup. No deployment workflow or service was added.

`scripts/verify-redesign.mjs` runs an isolated local browser regression pass. It requires an already installed Playwright/Playwright Core module and Microsoft Edge:

```text
node scripts/verify-redesign.mjs <absolute-path-to-playwright-core/index.mjs> http://127.0.0.1:5173
```

It checks page access, settings save/discard/persistence, Team/Category drawer access, task notes, composer persistence, assistant navigation, draft review/save/approval/persistence, French labels, role visibility, and desktop/mobile page overflow. Screenshots go to the ignored `.courio-review/` directory. The test browser has separate storage from your regular browser.

For manual review:

1. Open all sidebar destinations, then every Settings section.
2. Review an Inbox item, change assignment/category, summarize, generate a draft, edit/save, and approve it in Drafts.
3. Refresh and confirm the saved text and completed workflow persist.
4. Check task assignment, reminders, notes, history, and completion.
5. Save/reopen a composed draft; try attachment metadata and browser printing.
6. Search and filter lists; check the empty state and removal confirmation.
7. Switch English/French and test a narrow browser window.
8. Switch to the Employee demo account and check restricted navigation.

Everything remains fake/local. Lucide is a bundled icon dependency; the application does not call an icon service or require an account. No paid integration, API credentials, real provider connection, or sending behavior was added.
