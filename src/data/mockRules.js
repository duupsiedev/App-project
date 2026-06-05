export const mockRules = [
  {
    id: "rule-1",
    title: "Supplier invoice routing",
    desc: "Categorize supplier invoices and payment requests, then notify the accounting contact.",
    impact: "Would have matched 31 messages this month.",
    on: true
  },
  {
    id: "rule-2",
    title: "Client escalation detection",
    desc: "Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",
    impact: "Would have flagged 4 high-risk threads in the last 14 days.",
    on: true
  },
  {
    id: "rule-3",
    title: "Quote request intake",
    desc: "Prepare standardized draft replies for new prospects requesting pricing or availability.",
    impact: "Would have prepared 6 drafts this month.",
    on: false
  },
  {
    id: "rule-4",
    title: "Missing document follow-up",
    desc: "Prepare client reminders when required documents are mentioned but not attached.",
    impact: "Useful for bookkeeping, accounting, insurance, and service teams.",
    on: false
  }
];
