export const mockEmails = [
  {
    id: "email-1",
    subject: "Very unhappy about no response",
    sender: "Maya Chen",
    senderEmail: "maya@northstar-retail.ca",
    body: "I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",
    category: "Client complaint",
    urgency: "High",
    confidence: 94,
    suggestedAction: "Escalate to owner",
    requiresDraft: true,
    assignedTo: "emp-1",
    explanation: "Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",
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
    sender: "Alex Rivera",
    senderEmail: "alex@brightline-supplies.ca",
    body: "Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",
    category: "Accounting",
    urgency: "Medium",
    confidence: 89,
    suggestedAction: "Route to accounting",
    requiresDraft: true,
    assignedTo: "emp-2",
    explanation: "Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",
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
    sender: "Priya Nair",
    senderEmail: "priya@lakeside-catering.ca",
    body: "We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",
    category: "Sales",
    urgency: "Medium",
    confidence: 86,
    suggestedAction: "Prepare intake draft",
    requiresDraft: true,
    assignedTo: "emp-3",
    explanation: "Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",
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
    sender: "Tom Bennett",
    senderEmail: "tom@harbour-grill.ca",
    body: "Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",
    category: "Documents",
    urgency: "Low",
    confidence: 91,
    suggestedAction: "Apply payroll category",
    requiresDraft: true,
    assignedTo: "emp-4",
    explanation: "Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",
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
    sender: "Elena Morris",
    senderEmail: "elena@maple-therapy.ca",
    body: "I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",
    category: "Missing documents",
    urgency: "Medium",
    confidence: 88,
    suggestedAction: "Prepare follow-up draft",
    requiresDraft: true,
    assignedTo: "emp-2",
    explanation: "Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",
    thread: [
      "Client mentions March receipts but no attachments are present.",
      "Follow-up should request the missing files."
    ],
    summary: "March receipts appear to be missing. Prepare a concise document request.",
    draft: "Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"
  },
  {
    id: "email-6",
    subject: "Can we move tomorrow's appointment?",
    sender: "Jordan Lee",
    senderEmail: "jordan@greenway-landscaping.ca",
    body: "Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",
    category: "Scheduling",
    urgency: "Low",
    confidence: 82,
    suggestedAction: "Offer available times",
    requiresDraft: true,
    assignedTo: "emp-5",
    explanation: "Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",
    thread: [
      "Client asks to move an appointment from tomorrow to next Tuesday afternoon.",
      "No urgent sentiment or billing issue detected."
    ],
    summary: "Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",
    draft: "Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"
  }
];
