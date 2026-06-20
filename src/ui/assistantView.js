import { escapeHtml } from "./helpers.js";

export const ASSISTANT_SUGGESTIONS = [
  "Triage",
  "Urgent emails",
  "Drafts needing approval",
  "Invoices",
  "Generate digest",
  "Create invoice rule",
  "Reset demo data"
];

export function renderAssistantView({ assistantOpen, assistantMessages, assistantBusy }) {
  const messages = assistantMessages.length
    ? assistantMessages
    : [{ id: "assistant-loading", role: "assistant", text: "Loading assistant history..." }];

  return `
    <div class="assistant ${assistantOpen ? "open" : ""}">
      ${assistantOpen ? `
        <div class="assistant-panel" aria-label="Courio assistant">
          <div class="assistant-header">
            <div>
              <strong>Courio assistant</strong>
              <span>Fake/local commands</span>
            </div>
            <button class="btn subtle" data-assistant-toggle>Close</button>
          </div>
          <div class="assistant-messages">
            ${messages.map((message) => `
              <div class="assistant-message ${message.role === "user" ? "user" : "bot"}">
                ${escapeHtml(message.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${assistantBusy ? "disabled" : ""}>
            <button class="btn primary" type="submit" ${assistantBusy ? "disabled" : ""}>${assistantBusy ? "Working..." : "Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${ASSISTANT_SUGGESTIONS.map((suggestion) => `
              <button class="assistant-chip" data-assistant-command="${escapeHtml(suggestion)}" ${assistantBusy ? "disabled" : ""}>
                ${escapeHtml(suggestion)}
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `;
}
