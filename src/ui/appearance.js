import { createElement, Save, Plus, PencilLine, Archive, History, Check, Printer, LogOut } from "lucide";
import { readableTextColor } from "./preferencesView.js";

const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)");
function resolveTheme() {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.themePreference === "system"
    ? deviceTheme.matches ? "dark" : "light" : root.dataset.themePreference || "light";
}
deviceTheme.addEventListener("change", resolveTheme);

// Presentation only: never changes category metadata, permissions, or workflow.
export function applyAppearance(preferences, categories) {
  const root = document.documentElement;
  root.dataset.themePreference = preferences?.theme || "light";
  resolveTheme();
  root.classList.toggle("has-personal-background", Boolean(preferences?.backgroundImage));
  root.style.setProperty("--personal-background", preferences?.backgroundImage ? `url("${preferences.backgroundImage}")` : "none");
  root.style.setProperty("--image-shading", String((preferences?.backgroundDim ?? 80) / 100));
  document.querySelectorAll("[data-category-label]").forEach(badge => {
    const category = categories.find(item => item.name === badge.dataset.categoryLabel);
    const color = preferences?.labelColors?.[category?.id];
    if (color) {
      badge.style.backgroundColor = color;
      badge.style.color = readableTextColor(color);
      badge.style.borderColor = color;
    }
  });
  const controls = [
    ["[data-add-task],[data-add-employee],[data-add-category],[data-new-compose]", Plus],
    ["[data-edit-task],[data-edit-employee],[data-edit-category],[data-edit-rule]", PencilLine],
    ["[data-save-task-note],[data-save-settings],[data-save-employee],[data-save-category],[data-save-rule],[data-save-draft],[data-save-compose]", Save],
    ["[data-archive-email],[data-archive-filtered]", Archive],
    ["[data-review-task]", History], ["[data-approve-draft]", Check],
    ["[data-print-compose]", Printer], ["[data-logout-demo]", LogOut]
  ];
  controls.forEach(([selector, shape]) => document.querySelectorAll(selector).forEach(button => {
    if (button.querySelector("svg")) return;
    const icon = createElement(shape, { width: 18, height: 18, "aria-hidden": "true" });
    icon.classList.add("courio-icon");
    button.prepend(icon);
  }));
}
