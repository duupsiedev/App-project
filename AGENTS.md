# Courio Project Rules

Courio is a mock-functional AI email workflow assistant for small businesses.

## Product Principles

- Never auto-send emails.
- Human approval is always required before anything is ready for send.
- Approved means "ready for human send", not sent.
- Always explain why Courio suggested an action, category, rule, or escalation.
- Keep language simple, calm, and trustworthy for non-technical small business owners.
- Preserve workflow integrity: one email, one workflow, one draft state.

## Architecture Principles

- Keep UI code focused on rendering and collecting user actions.
- Keep fake backend actions, validation, workflow rules, and persistence in `src/api/mockApi.js`.
- Treat `mockApi.js` as the replaceable boundary for future Gmail, Outlook, OpenAI, auth, and database integrations.
- Keep data models close to future backend models where practical.
- Prefer reusable production-style scaffolding over one-off UI shortcuts.
- Use localStorage only for this prototype's fake/local persistence.

## Demo Boundaries

- Do not connect Gmail, Outlook, OpenAI, authentication, or a real database unless explicitly requested.
- Do not add real sending behavior.
- Clearly label mock-only behavior when explaining changes.
