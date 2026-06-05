export const mockEmails = [
  {
    id: "email-1",
    subject: "Very unhappy about no response",
    sender: "Client account",
    category: "Urgent",
    suggestedAction: "Escalate to owner",
    status: "Open",
    thread: [
      "Client followed up twice about an unanswered service issue.",
      "The last message uses negative sentiment and asks for owner attention."
    ],
    summary: "Client is frustrated by delayed response. Recommend owner review today.",
    draft: "Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."
  },
  {
    id: "email-2",
    subject: "Invoice #1844 payment status",
    sender: "Supplier",
    category: "Accounting",
    suggestedAction: "Route to accounting",
    status: "Open",
    thread: [
      "Supplier asks whether invoice #1844 has been scheduled for payment.",
      "Invoice appears related to recurring monthly services."
    ],
    summary: "Supplier is requesting a payment-status update for invoice #1844.",
    draft: "Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."
  },
  {
    id: "email-3",
    subject: "Quote request for monthly bookkeeping",
    sender: "New lead",
    category: "Sales",
    suggestedAction: "Prepare intake draft",
    status: "Open",
    thread: [
      "New prospect requested pricing for monthly bookkeeping.",
      "They mentioned six employees and monthly receipt volume."
    ],
    summary: "New lead is asking for bookkeeping pricing. Intake details are partially available.",
    draft: "Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"
  },
  {
    id: "email-4",
    subject: "Payroll documents attached",
    sender: "Restaurant client",
    category: "Documents",
    suggestedAction: "Apply payroll category",
    status: "Open",
    thread: [
      "Client attached payroll documents for this period.",
      "Message should be categorized for payroll review."
    ],
    summary: "Payroll documents are attached and ready to route to payroll workflow.",
    draft: "Hi, thanks. We received the payroll documents and will review them for the current period."
  },
  {
    id: "email-5",
    subject: "Missing March receipts",
    sender: "Existing client",
    category: "Accounting",
    suggestedAction: "Prepare follow-up draft",
    status: "Open",
    thread: [
      "Client mentions March receipts but no attachments are present.",
      "Follow-up should request the missing files."
    ],
    summary: "March receipts appear to be missing. Prepare a concise document request.",
    draft: "Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"
  }
];
