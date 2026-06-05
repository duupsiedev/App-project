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

## Billing Safety

- No surprise billing is a hard project rule.
- Do not add paid APIs, usage-based services, API keys, cloud databases, hosted backends, analytics, email providers, AI providers, or authentication providers unless the user explicitly approves the billing risk first.
- Do not add GitHub Actions, Codespaces setup, paid hosting, serverless functions, background jobs, or scheduled jobs unless the user explicitly approves the billing risk first.
- Keep prototype features fake/local by default.
- If a requested feature could create costs now or later, pause and explain the billing risk before implementation.
- Prefer static GitHub Pages deployment for sharing demos.
- Never commit secrets, tokens, API keys, OAuth credentials, billing account IDs, or service credentials.
