import { resolveAppUrl, withBasePath } from "../core/base-path.js";

const ICONS = {
  inicio: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-4.75V14h-5.5v7H4.5A1.5 1.5 0 0 1 3 19.5z"></path>
    </svg>
  `,
  protocolos: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18.5a1.5 1.5 0 0 0-1.5-1.5H6.5A3.5 3.5 0 0 1 3 15.5V7a2.5 2.5 0 0 1 2-2.45"></path>
      <path d="M7 6h9M7 10h9M7 14h6"></path>
    </svg>
  `,
  procedimientos: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.5 4.5 5 5M8 21l-5-5 11-11 5 5Z"></path>
      <path d="M13 6 18 11"></path>
    </svg>
  `,
  herramientas: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h5l2 8 2-16 2 8h5"></path>
    </svg>
  `,
  vademecum: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 4.5v15M14 4.5v15M7 7.5h10M7 16.5h10"></path>
      <rect x="4" y="2.5" width="16" height="19" rx="3"></rect>
    </svg>
  `,
  buscar: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5"></circle>
      <path d="m16 16 5 5"></path>
    </svg>
  `,
  favoritos: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3.5 2.7 5.48 6.05.88-4.38 4.27 1.03 6.03L12 17.34 6.6 20.16l1.03-6.03-4.38-4.27 6.05-.88Z"></path>
    </svg>
  `,
};

function renderItem(item, currentPath) {
  const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));

  return `
    <a class="nav-item${isActive ? " is-active" : ""}" href="${withBasePath(item.path)}">
      <span class="nav-icon">${ICONS[item.id] || ""}</span>
      <span class="nav-label">${item.label}</span>
    </a>
  `;
}

export function createNav({ items, currentPath }) {
  const aside = document.createElement("aside");
  aside.className = "shell-sidebar";
  aside.innerHTML = `
    <div class="brand-block">
      <div class="brand-mark">
        <img src="${resolveAppUrl("assets/images/logo.svg")}" alt="" />
      </div>
      <div>
        <p class="brand-kicker">Biblioteca clínica</p>
        <h1 class="brand-title">MFyU aap</h1>
      </div>
    </div>
    <nav class="main-nav" aria-label="Navegación principal">
      ${items.map((item) => renderItem(item, currentPath)).join("")}
    </nav>
    <div class="sidebar-note">
      <p>Shell persistente, navegación clínica estable y módulos HTML independientes.</p>
    </div>
  `;
  return aside;
}

export function createBottomNav({ items, currentPath }) {
  const nav = document.createElement("nav");
  nav.className = "bottom-nav";
  nav.setAttribute("aria-label", "Navegación principal móvil");
  nav.innerHTML = items
    .filter((item) => item.id !== "buscar")
    .map((item) => {
      const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
      return `
        <a class="bottom-nav-item${isActive ? " is-active" : ""}" href="${withBasePath(item.path)}" aria-label="${item.label}" title="${item.label}">
          <span class="nav-icon">${ICONS[item.id] || ""}</span>
        </a>
      `;
    })
    .join("");

  return nav;
}
