export const mockRules = [
  {
    id: "rule-1",
    title: "Supplier invoice routing",
    desc: "Categorize supplier invoices and payment requests, then notify the accounting contact.",
    category: "Accounting",
    confidence: 91,
    explanation: "Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",
    impact: "Would have matched 31 messages this month.",
    matches: ["Invoice #1844 payment status", "Supplier payment confirmation"],
    on: true
  },
  {
    id: "rule-2",
    title: "Client escalation detection",
    desc: "Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",
    category: "Client complaint",
    confidence: 94,
    explanation: "Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",
    impact: "Would have flagged 4 high-risk threads in the last 14 days.",
    matches: ["Very unhappy about no response"],
    on: true
  },
  {
    id: "rule-3",
    title: "Quote request intake",
    desc: "Prepare standardized draft replies for new prospects requesting pricing or availability.",
    category: "Sales",
    confidence: 86,
    explanation: "Courio looks for pricing requests, new prospect language, and service-fit details.",
    impact: "Would have prepared 6 drafts this month.",
    matches: ["Quote request for monthly bookkeeping"],
    on: false
  },
  {
    id: "rule-4",
    title: "Missing document follow-up",
    desc: "Prepare client reminders when required documents are mentioned but not attached.",
    category: "Missing documents",
    confidence: 88,
    explanation: "Courio looks for missing attachment wording, receipt requests, and document follow-up language.",
    impact: "Useful for bookkeeping, accounting, insurance, and service teams.",
    matches: ["Missing March receipts"],
    on: false
  }
];
