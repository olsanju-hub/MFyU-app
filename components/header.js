import { withBasePath } from "../core/base-path.js";

export function createHeader({ title, subtitle, isOffline, searchValue = "", showContext = true, homeMode = false }) {
  const header = document.createElement("header");
  header.className = "shell-header";

  if (homeMode) {
    header.classList.add("is-home-header");
    header.innerHTML = `
      <div class="header-brand">
        <span class="header-brand-mark" aria-hidden="true">
          <img src="${withBasePath("/assets/images/logo.svg")}" alt="" />
        </span>
        <h2 class="header-title">${title}</h2>
      </div>
    `;
    return header;
  }

  header.innerHTML = `
    <div class="header-heading">
      <button class="icon-button shell-menu-button" type="button" data-action="toggle-drawer" aria-label="Abrir panel lateral">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16"></path>
        </svg>
      </button>
      <div>
        ${subtitle ? `<p class="header-kicker">${subtitle}</p>` : ""}
        <h2 class="header-title">${title}</h2>
      </div>
    </div>
    <div class="header-tools">
      <label class="global-search">
        <span class="global-search-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5"></circle>
            <path d="m16 16 5 5"></path>
          </svg>
        </span>
        <input type="search" value="${searchValue}" placeholder="Buscar protocolos, procedimientos, scores o fármacos" data-global-search-input autocomplete="off" />
      </label>
      <div class="header-actions">
        ${showContext ? '<button class="toolbar-button" type="button" data-action="toggle-context">Contexto</button>' : ""}
        <span class="status-pill${isOffline ? " is-offline" : ""}" data-offline-indicator>${isOffline ? "Offline" : "Sincronizada"}</span>
      </div>
    </div>
    <div class="search-suggestions" data-search-suggestions hidden></div>
  `;
  return header;
}
