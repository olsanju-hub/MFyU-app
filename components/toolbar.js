import { withBasePath } from "../core/base-path.js";

export function createToolbar({ entry, isFavorite }) {
  const toolbar = document.createElement("section");
  toolbar.className = "content-toolbar";

  const actionButtons = [
    `
      <button class="toolbar-button${isFavorite ? " is-active" : ""}" type="button" data-action="toggle-favorite" data-entry-id="${entry.id}">
        ${isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
      </button>
    `,
  ];

  if (entry.algorithmId) {
    actionButtons.push(`
      <button class="toolbar-button is-primary" type="button" data-action="open-algorithm" data-algorithm-id="${entry.algorithmId}">
        Abrir algoritmo
      </button>
    `);
  }

  if (entry.externalReferenceUrl) {
    actionButtons.push(`
      <a class="toolbar-button" href="${entry.externalReferenceUrl}" target="_blank" rel="noreferrer">
        Referencia oficial
      </a>
    `);
  }

  toolbar.innerHTML = `
    <div class="toolbar-copy">
      <div class="breadcrumb">
        <a href="${withBasePath(`/${entry.section}`)}">${entry.sectionLabel}</a>
        <span>/</span>
        <span>${entry.category}</span>
      </div>
      <div class="toolbar-tags">
        <span class="eyebrow-tag">${entry.kindLabel}</span>
        ${entry.algorithmId ? '<span class="eyebrow-tag">Algoritmo</span>' : ""}
        ${entry.section === "vademecum" ? '<span class="eyebrow-tag">CIMA/AEMPS</span>' : ""}
      </div>
    </div>
    <div class="toolbar-actions">
      ${actionButtons.join("")}
    </div>
  `;

  return toolbar;
}
