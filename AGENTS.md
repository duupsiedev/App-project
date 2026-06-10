# Courio Project Rules

Courio is a mock-functional AI email workflow assistant for small businesses.

## Product Principles

- Never auto-send emails.
- Human approval is always required before anything is ready for send.
- Approved means "ready for human send", not sent.
- Always explain why Courio suggested an action, category, rule, or escalation.
- Keep language simple, calm, and trustworthy for non-technical small business owners.
- Preserve workflow integrity: one email, one workflow, one draft state.
- Every email must follow the same workflow: review, generate draft, edit/save, approve as ready for human send, then complete automatically.
- Future fake incoming emails must use this workflow by default and must not expose a direct completion shortcut.

## Architecture Principles

- Keep UI code focused on rendering and collecting user actions.
- Keep fake backend actions, validation, workflow rules, and persistence in `src/api/mockApi.js`.
- Treat `mockApi.js` as the replaceable boundary for future Gmail, Outlook, OpenAI, auth, and database integrations.
- Keep data models close to future backend models where practical.
- Prefer reusable production-style scaffolding over one-off UI shortcuts.
- Use localStorage only for this prototype's fake/local persistence.

## Technology Direction

- Do not rewrite Courio into a new language or framework unless explicitly requested.
- Keep the current frontend in Vite.
- Prefer TypeScript for future frontend refactors.
- Keep the UI dependent on clear API contracts rather than mock implementation details.
- Keep `src/api/mockApi.js` clean and replaceable so a real backend can take over without rewriting the UI.
- Structure request parameters, responses, validation errors, IDs, statuses, and data models to resemble a future REST API.

### Future Production Target

- Frontend: TypeScript with Vite/React or Next.js.
- Backend: Django with Django REST Framework.
- Database: PostgreSQL.
- Do not add real Gmail, Outlook, or OpenAI integration until the mock workflows have been validated with users.
- A future Django API should be able to replace `mockApi.js` behind the same frontend-facing contracts.

## Demo Boundaries

- Do not connect Gmail, Outlook, OpenAI, authentication, or a real database unless explicitly requested.
- Do not add real sending behavior.
- Clearly label mock-only behavior when explaining changes.

## Billing Safety

- No surprise billing is a hard project rule.
- Do not add paid APIs, usage-based services, API keys, cloud databases, hosted backends, analytics, email providers, AI providers, or authentication providers unless the user explicitly approves the billing risk first.
- Do not add GitHub Actions, Codespaces setup, paid hosting, serverless functions, background jobs, or scheduled jobs unless the user explicitly approves the billing risk first.
- Keep prototype features fake/local by default.
- If a requested feature could create costs now or later, pause and explain the billing risk before implementation.
- Prefer static GitHub Pages deployment for sharing demos.
- Never commit secrets, tokens, API keys, OAuth credentials, billing account IDs, or service credentials.
