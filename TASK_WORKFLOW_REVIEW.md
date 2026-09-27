# Task creation, delegation, and recovery

## Behavior

- Tasks now have Add task and Edit task controls, using the existing drawer style.
- Title is required. Notes, priority, assignee, and an optional due date can be saved.
- The due date is separate from the existing follow-up reminder date.
- Email review offers Open / assign task. It reuses the email's existing task, or creates one if none exists.
- Admin can delegate tasks. Employees see their assigned tasks, can edit them, and can create personal tasks. Existing admin-only reassignment permissions are preserved.
- Task assignment does not change the source email owner. The existing email assignment action still updates its linked task.
- Task history offers restoration of the previous values for a saved change. Confirmation lists the affected fields. Restoring adds a new history entry and keeps earlier entries.
- Completing or reopening a task does not approve, send, or reopen an email.

## Storage compatibility

The existing localStorage key, task IDs, statuses, and email links remain unchanged. An optional dueAt date (YYYY-MM-DD or null) and structured history entries extend existing records. Older history remains visible but cannot be restored because previous field values were never recorded. New task edits record those values. Recovery rejects deleted employees instead of restoring an invalid assignment.

An explicitly unassigned task now stays unassigned on refresh, even when its source email has an owner.

## Implementation boundaries

- src/api/mockApi.js owns validation, permissions, task creation, updates, recovery, and persistence.
- src/main.js connects existing page actions and shows history/confirmations.
- src/ui/taskEditor.js renders temporary form values only.
- src/i18n/taskCopy.js contains English/French copy, registered in translations.js.
- src/styles/redesign.css adds narrowly scoped task controls styling.
- scripts/verify-tasks.mjs checks API contracts in isolated memory storage.
- scripts/verify-task-ui.mjs checks browser interactions in an isolated browser context.

No dependency, remote service, sending behavior, or billing service was added. Demo roles remain simulated, not production authentication.

## Manual review

1. Log in as Admin. Open Tasks, add a task, enter title/notes/priority/due date, assign Marcus, and save. Find it in the list.
2. Edit the note and priority. Open History, restore the previous values, cancel once, then confirm. Check the original values return and history remains visible.
3. Complete the task, then uncheck it to reopen it. Confirm the email workflow did not change.
4. Open an email, choose Open / assign task, assign Marcus, and save. Repeat and confirm the same task opens rather than a duplicate.
5. Switch to Employee. Confirm assigned tasks appear and another employee's tasks do not. Create a personal task and edit its notes.
6. Switch back to Admin. Reassign a task away from Marcus; switch to Employee and confirm it disappears from his list.
7. Leave a task Unassigned, then refresh. Confirm it remains Unassigned.
8. Refresh after editing/restoring. Confirm due dates, notes, assignment, and history persist.
9. Switch to French. Check Add/Edit and history restoration controls. Try the drawer on a narrow screen.
10. Check an old history entry: it remains readable, with no recovery button when no previous values exist.

## Verification

API checks cover validation, atomic permission failures, no duplicate email tasks, restoration, employee visibility, deleted assignees, persistence, and unchanged email workflows. Browser checks cover task forms, recovery confirmation/cancel, filtering, delegation, French, mobile overflow, and employee task access. The existing redesign smoke test covers the surrounding workflows. Run npm run build for the production bundle.
