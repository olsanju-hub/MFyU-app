export function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function slugify(value = "") {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function titleFromSection(section = "") {
  const titles = {
    inicio: "Inicio",
    "atencion-primaria": "Atención Primaria",
    urgencias: "Urgencias",
    protocolos: "Protocolos",
    procedimientos: "Procedimientos",
    herramientas: "Herramientas",
    vademecum: "Vademécum",
    buscar: "Buscar",
    favoritos: "Favoritos",
  };

  return titles[section] || "MFyU aap";
}

export function safeJsonParse(value, fallback) {
  if (value == null || value === "") {
    return fallback;
  }

  try {
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    return parsed == null ? fallback : parsed;
  } catch (error) {
    return fallback;
  }
}

export function groupBy(items, selector) {
  return items.reduce((groups, item) => {
    const key = typeof selector === "function" ? selector(item) : item[selector];

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);
    return groups;
  }, {});
}

export function unique(items) {
  return [...new Set(items)];
}

export function formatTimestamp(timestamp) {
  if (!timestamp) {
    return "";
  }

  const date = new Date(timestamp);

  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function createFragment(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content;
}

export function matchesQuery(haystack, query) {
  return normalizeText(haystack).includes(normalizeText(query));
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function sumNumbers(values = []) {
  return values.reduce((total, value) => total + Number(value || 0), 0);
}

export function withLeadingSlash(path = "/") {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function stripTrailingSlash(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function isExternalUrl(value = "") {
  return /^https?:\/\//i.test(value);
}

export function createElement(tagName, className, html) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof html === "string") {
    element.innerHTML = html;
  }

  return element;
}
