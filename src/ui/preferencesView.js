import { escapeHtml } from "./helpers.js";
import { createElement, Sun, Moon, Monitor, Upload, ImageOff, Undo2, Save, X } from "lucide";

function addIcon(element, shape) {
  if (!element) return;
  element.prepend(createElement(shape, { width: 18, height: 18, "aria-hidden": "true" }));
}

const sharedColors = { urgent: "#cf252c", invoice: "#397e28", lead: "#1254ed", pending: "#9a6700", default: "#687186" };

export function labelColor(category, preferences) {
  return preferences?.labelColors?.[category.id] || sharedColors[category.color] || sharedColors.default;
}

export function readableTextColor(hex) {
  const rgb = hex.slice(1).match(/../g).map(part => parseInt(part, 16) / 255);
  const [r, g, b] = rgb.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.179 ? "#000000" : "#ffffff";
}

export function renderPreferencesView(root, { form, categories, t, busy, onChange, onImage }) {
  if (!form) { root.replaceChildren(); return; }
  const p = key => t(`preferences.${key}`);
  root.innerHTML = `
    <form data-preferences-form class="preferences-form">
      <fieldset class="preferences-section" ${busy ? "disabled" : ""}>
        <legend>${p("theme")}</legend>
        <div class="theme-options">
          ${["light", "dark", "system"].map(theme => `<label><input type="radio" name="theme" value="${theme}" ${form.theme === theme ? "checked" : ""}><span data-theme-icon="${theme}">${p(theme)}</span></label>`).join("")}
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${busy ? "disabled" : ""}>
        <legend>${p("background")}</legend>
        <div class="background-controls">
          <div class="background-preview" role="img" aria-label="${p("preview")}"><span>${p("noImage")}</span></div>
          <div class="form-grid">
            <label class="image-picker"><span data-upload-icon>${busy ? p("uploading") : p("chooseImage")}</span><input type="file" data-preference-image accept="image/png,image/jpeg,image/webp" ${busy ? "disabled" : ""}></label>
            <small>${p("imageNote")}</small>
            <label>${p("dim")} <output data-dim-output>${form.backgroundDim}%</output><input type="range" name="backgroundDim" min="50" max="95" step="5" value="${form.backgroundDim}"></label>
            <button class="btn subtle" type="button" data-remove-background ${!form.backgroundImage || busy ? "disabled" : ""}>${p("removeImage")}</button>
          </div>
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${busy ? "disabled" : ""}>
        <legend>${p("labels")}</legend>
        <p class="subtitle">${p("categoryNote")}</p>
        <div class="preference-categories">
          ${categories.length ? categories.map(category => `<div class="preference-category">
            <span class="badge" data-color-preview="${escapeHtml(category.id)}">${escapeHtml(category.name)}</span>
            <label class="visibility-choice"><input type="checkbox" data-category-visible="${escapeHtml(category.id)}" ${!form.hiddenCategoryIds.includes(category.id) ? "checked" : ""} ${!category.active ? "disabled" : ""}>${category.active ? p("show") : p("archived")}</label>
            <div class="color-controls">
              <label><span class="sr-only">${p("color")}: ${escapeHtml(category.name)}</span><input type="color" data-label-color="${escapeHtml(category.id)}" value="${labelColor(category, form)}"></label>
              <button class="btn subtle icon-button" type="button" data-reset-label="${escapeHtml(category.id)}" title="${p("defaultColor")}" aria-label="${p("defaultColor")}: ${escapeHtml(category.name)}"></button>
            </div>
          </div>`).join("") : `<p class="empty-state">${p("empty")}</p>`}
        </div>
      </fieldset>
      <div class="actions preferences-actions">
        <button class="btn primary" type="submit" data-save-preferences ${busy ? "disabled" : ""}>${busy ? p("saving") : p("save")}</button>
        <button class="btn subtle" type="button" data-discard-preferences ${busy ? "disabled" : ""}>${p("cancel")}</button>
        <button class="btn subtle" type="button" data-reset-preferences ${busy ? "disabled" : ""}>${p("reset")}</button>
      </div>
    </form>`;
  for (const [theme, shape] of [["light", Sun], ["dark", Moon], ["system", Monitor]]) addIcon(root.querySelector(`[data-theme-icon="${theme}"]`), shape);
  addIcon(root.querySelector("[data-upload-icon]"), Upload);
  addIcon(root.querySelector("[data-remove-background]"), ImageOff);
  addIcon(root.querySelector("[data-save-preferences]"), Save);
  addIcon(root.querySelector("[data-discard-preferences]"), X);
  addIcon(root.querySelector("[data-reset-preferences]"), Undo2);
  root.querySelectorAll("[data-reset-label]").forEach(button => addIcon(button, Undo2));

  const preview = () => {
    const image = root.querySelector(".background-preview");
    image.style.backgroundImage = form.backgroundImage ? `url("${form.backgroundImage}")` : "none";
    image.style.setProperty("--image-shading", String(form.backgroundDim / 100));
    image.querySelector("span").textContent = form.backgroundImage ? p("preview") : p("noImage");
    root.querySelectorAll("[data-color-preview]").forEach(badge => {
      const category = categories.find(item => item.id === badge.dataset.colorPreview);
      const color = labelColor(category, form);
      badge.style.backgroundColor = color;
      badge.style.color = readableTextColor(color);
    });
  };
  preview();
  root.oninput = event => {
    const target = event.target;
    if (target.name === "theme") form.theme = target.value;
    else if (target.name === "backgroundDim") {
      form.backgroundDim = Number(target.value);
      root.querySelector("[data-dim-output]").textContent = `${form.backgroundDim}%`;
    } else if (target.dataset.labelColor) form.labelColors[target.dataset.labelColor] = target.value;
    else if (target.dataset.categoryVisible) {
      form.hiddenCategoryIds = form.hiddenCategoryIds.filter(id => id !== target.dataset.categoryVisible);
      if (!target.checked) form.hiddenCategoryIds.push(target.dataset.categoryVisible);
    } else return;
    onChange(form);
    preview();
  };
  root.onchange = event => {
    if (event.target.matches("[data-preference-image]")) onImage(event.target.files?.[0]);
  };
  root.onclick = event => {
    const button = event.target.closest("button");
    if (button?.dataset.resetLabel) {
      const id = button.dataset.resetLabel;
      delete form.labelColors[id];
      const color = labelColor(categories.find(category => category.id === id), form);
      root.querySelectorAll("[data-label-color]").forEach(input => { if (input.dataset.labelColor === id) input.value = color; });
      onChange(form);
      preview();
    }
  };
}

// Decode and resize locally. Never upload the file or retain its original bytes.
export async function prepareBackgroundImage(file) {
  if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 5 * 1024 * 1024) throw new Error("invalidImage");
  const bitmap = await createImageBitmap(file);
  try {
    if (!bitmap.width || !bitmap.height || bitmap.width * bitmap.height > 40000000) throw new Error("invalidImage");
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.82, 0.65, 0.45, 0.3]) {
      const image = canvas.toDataURL("image/jpeg", quality);
      if (image.length <= 700000) return image;
    }
    throw new Error("invalidImage");
  } finally { bitmap.close(); }
}
