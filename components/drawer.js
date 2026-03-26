import { withBasePath } from "../core/base-path.js";
import { formatTimestamp } from "../core/utils.js";

function renderDrawerList(items = [], emptyText) {
  if (!items.length) {
    return `<p class="drawer-empty">${emptyText}</p>`;
  }

  return `
    <div class="drawer-list">
      ${items
        .map(
          (item) => `
            <a class="drawer-link" href="${withBasePath(item.route)}">
              <strong>${item.title}</strong>
              <span>${item.meta}</span>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

export function createDrawer({ title, sections }) {
  const aside = document.createElement("aside");
  aside.className = "context-drawer";
  aside.innerHTML = `
    <div class="drawer-head">
      <p class="drawer-kicker">Panel contextual</p>
      <h3>${title}</h3>
    </div>
    ${sections
      .map((section) => {
        if (section.type === "links") {
          return `
            <section class="drawer-section">
              <div class="drawer-section-head">
                <h4>${section.title}</h4>
              </div>
              ${renderDrawerList(section.items, section.emptyText)}
            </section>
          `;
        }

        return `
          <section class="drawer-section">
            <div class="drawer-section-head">
              <h4>${section.title}</h4>
            </div>
            <div class="drawer-chip-list">
              ${section.items.map((item) => `<button class="drawer-chip" type="button" data-filter="${item.value}">${item.label}</button>`).join("")}
            </div>
          </section>
        `;
      })
      .join("")}
  `;

  return aside;
}

export function mapHistoryToDrawerItems(items = []) {
  return items.map((item) => ({
    route: item.route,
    title: item.title,
    meta: `${item.sectionLabel} · ${formatTimestamp(item.visitedAt)}`,
  }));
}

export function mapRegistryToDrawerItems(items = []) {
  return items.map((item) => ({
    route: item.route,
    title: item.title,
    meta: `${item.category}${item.summary ? ` · ${item.summary}` : ""}`,
  }));
}
