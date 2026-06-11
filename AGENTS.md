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

## User Trust Rule

When uncertain, choose the option that increases user trust.

Prefer:

- Clarity over cleverness.
- Confirmation over assumption.
- Transparency over automation.

Trust is a core Courio feature.

## Architecture Principles

- Keep UI code focused on rendering and collecting user actions.
- Keep fake backend actions, validation, workflow rules, and persistence in `src/api/mockApi.js`.
- Treat `mockApi.js` as the replaceable boundary for future Gmail, Outlook, OpenAI, auth, and database integrations.
- Keep data models close to future backend models where practical.
- Prefer reusable production-style scaffolding over one-off UI shortcuts.
- Use localStorage only for this prototype's fake/local persistence.

## State Management Rule

There must be a single source of truth for every piece of business data.

Avoid duplicated:

- Draft state
- Workflow state
- Approval state
- Employee state
- Settings state

When in doubt, the API/state layer owns the data and the UI renders it.

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

## Future-Proofing Requirements

Courio's current build is the foundation for the future production product, not a disposable prototype.

- Do not create throwaway code when a reusable production-style solution is reasonable.
- Do not bypass the existing architecture for convenience.
- Prefer extending existing systems over creating parallel systems.
- Avoid duplicate sources of truth.
- Avoid hardcoded workflow logic in UI components.
- Avoid tightly coupling screens to local mock implementations.
- Design new features so a future backend can replace the mock layer with minimal frontend changes.

The architecture should allow:

- Gmail or Outlook integrations to replace mock email data.
- Django APIs to replace `src/api/mockApi.js`.
- PostgreSQL to replace localStorage.
- Authentication to be added later.
- These replacements without requiring a full frontend rewrite.

## Data Model Stability

Avoid changing existing IDs, statuses, workflow states, and API contracts without good reason.

When modifying data structures:

- Prefer extending models over replacing them.
- Maintain backward compatibility where practical.
- Explain contract-breaking changes before implementation.
- Include a migration or compatibility strategy for persisted local data when applicable.

Future integrations will depend on stable models and predictable contracts.

## Migration Mindset

Assume every mock feature may eventually become a real feature.

When building mock functionality:

- Use realistic data structures.
- Use realistic statuses.
- Use realistic IDs.
- Use realistic API contracts.
- Preserve boundaries that allow mock implementations to be replaced rather than untangled from the UI.

Avoid mock implementations that would need to be completely rewritten later.

## Design Preservation Rules

The current Courio visual design direction is approved. Do not redesign the application unless explicitly requested.

Allowed improvements:

- Spacing
- Alignment
- Typography hierarchy
- Accessibility
- Responsiveness
- Drawer and modal behavior
- Status indicators
- Empty states
- Loading states
- Consistency improvements

Not allowed without explicit approval:

- Replacing the overall layout
- Replacing the navigation structure
- Replacing the visual identity
- Replacing the design language
- Rebuilding the interface from scratch

Improve the design. Do not reinvent the design.

## Scope Discipline

When implementing changes:

- Prefer improving existing workflows before adding new workflows.
- Prefer completing partially implemented features before introducing new features.
- Avoid adding features that solve hypothetical future problems.
- Focus on the current roadmap and validated user needs.

A smaller, complete feature is preferred over a larger unfinished feature.

## Change Conservatism

When modifying existing systems:

- Prefer small incremental changes over large rewrites.
- Do not rewrite working systems without a clear benefit.
- Preserve existing behavior unless the change explicitly intends to alter it.
- Keep changes closely scoped to the requested workflow and affected modules.

## Planning Requirements

Before large changes:

1. Explain the proposed solution.
2. Identify risks.
3. Identify affected files.
4. Explain the architectural impact.
5. Explain the future production impact.

Before introducing new dependencies:

- Explain why they are needed.
- Explain the future maintenance impact.
- Explain billing implications when applicable.

## Testing Requirements

For workflow-related changes:

- Identify affected workflows.
- Provide manual testing steps.
- Explain expected behavior.
- Verify localStorage persistence when applicable.
- Run `npm run build` before completion.
- Report any test that could not be performed and the remaining risk.

Do not mark a checkpoint complete without describing how it was tested.

## Factory Dad Test

Evaluate every feature against this question:

> Would this help a busy business owner process their inbox faster and with more confidence?

If the answer is unclear, reconsider the feature.

The primary user is not a developer. The primary user is a business owner or manager dealing with inbox overload.

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
