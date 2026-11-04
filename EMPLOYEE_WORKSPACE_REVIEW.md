# Employee Workspace Review

## Scope and contracts

- Employees open Today with their assigned and shared tasks, scoped inbox counts and draft counts.
- Reply draft ownership follows the source email assignment. Employees can review/save their own drafts; admin approval is still required.
- Composed drafts have `ownerEmployeeId`. Legacy composed drafts without ownership remain with the demo admin (`emp-1`) rather than becoming visible to employees.
- Tasks retain `assignedTo` as primary owner and add `collaboratorIds`. Old tasks default to an empty list. All assignees share one status, notes and history. Only the primary employee or admin manages collaborators; primary reassignment remains admin-only.
- A colleague follow-up creates a task with `parentTaskId` and `requestedByEmployeeId`. It sends no email or notification. Sharing a task does not grant access to the source email or its draft.
- Team is a read-only employee directory. Starting a message does not overwrite an unfinished composer.
- Personal language, label colors and category shortcut visibility are account preferences. Category definitions and automation settings remain workspace-wide. No separate technical role was introduced; existing admin permissions manage those policies.
- Enabled rules supply matching suggestions for all accounts. Turning a rule off removes its suggestion; it does not undo existing classifications. No rule bypasses review/save/approval.
- Assistant history is separated per demo account. Existing unscoped chat history is no longer displayed across accounts.

## Manual checklist

1. As admin, create a task with Nadia as primary and Marcus as additional assignee. Switch to Marcus: it appears on Today and Tasks.
2. Edit shared notes or mark the task complete. Switch back: both accounts see the same record and history.
3. As Marcus, request a follow-up assigned to Nadia. As admin, find the new task. No email was sent.
4. As Marcus, review an assigned email, generate its draft, review and save. Find it in Drafts. Approval stays unavailable; admin can approve it.
5. Verify Marcus cannot see other employees' reply drafts or admin composed drafts.
6. Open Team, search a colleague by name or email, then start a message with an empty composer. Recipient is prefilled; nothing sends.
7. Change Marcus's language and label colors in My preferences. Save and refresh. Admin preferences remain unchanged.
8. Search Inbox by sender address or message text. Test status/priority filters, including no results and clearing filters.
9. Search Tasks by notes/assignee. Test status, priority, overdue and today filters.
10. Disable an applicable rule as admin, then switch to Marcus and review the matching email. Its workspace rule suggestion disappears; existing workflow remains intact.
11. Repeat important navigation on a narrow/mobile viewport and in French.

## Automated checks

- `node scripts/verify-employee-workspace.mjs`: ownership, direct access rejection, shared task permissions, follow-up linkage, personal language, workspace rules and storage reload.
- `node scripts/verify-tasks.mjs` and `node scripts/verify-preferences.mjs`: existing API regressions.
- Browser scripts accept an installed Playwright module path: `verify-employee-ui.mjs`, `verify-redesign.mjs`, `verify-task-ui.mjs`.
- `npm run build` generates the existing static `docs/` output; it does not deploy.

Everything remains fake/local. Demo account checks are prototype behavior, not production authentication or a security boundary against someone with local browser access. No paid service, provider, API key, dependency, background job or real sending was added.
