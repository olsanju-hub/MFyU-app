import { toLogicalPath, withBasePath } from "./base-path.js";
import { stripTrailingSlash, withLeadingSlash } from "./utils.js";

const getAppSource = (appId) => `apps/${appId}/index.html`;

const APP_ROUTES = {
  "/": { kind: "app", appId: "inicio", source: getAppSource("inicio") },
  "/inicio": { kind: "app", appId: "inicio", source: getAppSource("inicio") },
  "/atencion-primaria": { kind: "app", appId: "atencion-primaria", source: getAppSource("atencion-primaria") },
  "/urgencias": { kind: "app", appId: "urgencias", source: getAppSource("urgencias") },
  "/atencion-primaria/protocolos": {
    kind: "app",
    appId: "protocolos",
    source: getAppSource("protocolos"),
    contextCarePath: "atencion-primaria",
    title: "Protocolos de Atención Primaria",
    subtitle: "Listado rápido para consulta ambulatoria, seguimiento y derivación razonada.",
  },
  "/atencion-primaria/procedimientos": {
    kind: "app",
    appId: "procedimientos",
    source: getAppSource("procedimientos"),
    contextCarePath: "atencion-primaria",
    title: "Procedimientos de Atención Primaria",
    subtitle: "Técnicas útiles en consulta con lectura directa y operativa.",
  },
  "/atencion-primaria/herramientas": {
    kind: "app",
    appId: "herramientas",
    source: getAppSource("herramientas"),
    contextCarePath: "atencion-primaria",
    title: "Herramientas de Atención Primaria",
    subtitle: "Scores, cálculos y ayudas diagnósticas priorizadas para consulta y seguimiento.",
  },
  "/urgencias/protocolos": {
    kind: "app",
    appId: "protocolos",
    source: getAppSource("protocolos"),
    contextCarePath: "urgencias",
    title: "Protocolos de Urgencias",
    subtitle: "Listado rápido para valoración aguda, red flags y decisión inmediata.",
  },
  "/urgencias/procedimientos": {
    kind: "app",
    appId: "procedimientos",
    source: getAppSource("procedimientos"),
    contextCarePath: "urgencias",
    title: "Procedimientos de Urgencias",
    subtitle: "Técnicas críticas y de soporte inmediato para box y atención urgente.",
  },
  "/urgencias/herramientas": {
    kind: "app",
    appId: "herramientas",
    source: getAppSource("herramientas"),
    contextCarePath: "urgencias",
    title: "Herramientas de Urgencias",
    subtitle: "Cálculos, scores y apoyos diagnósticos para decisión rápida en paciente agudo.",
  },
  "/protocolos": {
    kind: "app",
    appId: "protocolos",
    source: getAppSource("protocolos"),
    requiresContextSelection: true,
    title: "Protocolos",
    subtitle: "Elige primero el contexto asistencial antes de abrir el listado.",
  },
  "/procedimientos": {
    kind: "app",
    appId: "procedimientos",
    source: getAppSource("procedimientos"),
    requiresContextSelection: true,
    title: "Procedimientos",
    subtitle: "Elige primero el contexto asistencial antes de abrir el listado.",
  },
  "/herramientas": {
    kind: "app",
    appId: "herramientas",
    source: getAppSource("herramientas"),
    requiresContextSelection: true,
    title: "Herramientas",
    subtitle: "Elige primero el contexto asistencial antes de abrir el listado.",
  },
  "/vademecum": { kind: "app", appId: "vademecum", source: getAppSource("vademecum") },
  "/buscar": { kind: "app", appId: "buscar", source: getAppSource("buscar") },
  "/favoritos": { kind: "app", appId: "favoritos", source: getAppSource("favoritos") },
};

export class Router {
  constructor({ registry, onRouteChange }) {
    this.registry = registry;
    this.onRouteChange = onRouteChange;
    this.handleClick = this.handleClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
  }

  start() {
    document.addEventListener("click", this.handleClick);
    window.addEventListener("popstate", this.handlePopState);
    this.onRouteChange(this.resolve(toLogicalPath(window.location.pathname)));
  }

  resolve(pathname = "/") {
    const normalizedPath = stripTrailingSlash(withLeadingSlash(pathname));

    if (APP_ROUTES[normalizedPath]) {
      return {
        path: normalizedPath,
        ...APP_ROUTES[normalizedPath],
      };
    }

    const entry =
      this.registry.byRoute.get(normalizedPath) ||
      this.registry.bySourcePath.get(normalizedPath) ||
      this.findByApproximatePath(normalizedPath);

    if (entry) {
      return {
        kind: "content",
        appId: entry.section,
        path: normalizedPath,
        source: entry.sourcePath,
        entry,
      };
    }

    return {
      kind: "not-found",
      appId: "buscar",
      path: normalizedPath,
      source: getAppSource("buscar"),
    };
  }

  findByApproximatePath(pathname) {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments.length ? segments[segments.length - 1] : null;
    const section = segments[0];

    if (!lastSegment) {
      return null;
    }

    return this.registry.entries.find((entry) => {
      if (section && entry.section !== section) {
        return false;
      }

      return entry.slug === lastSegment || entry.slug.startsWith(lastSegment) || lastSegment.startsWith(entry.slug);
    });
  }

  navigate(path, options = {}) {
    const normalizedPath = this.normalizeInputPath(path);
    const route = this.resolve(normalizedPath);
    const browserPath = withBasePath(route.path);

    if (options.replace) {
      window.history.replaceState({}, "", browserPath);
    } else if (window.location.pathname !== browserPath) {
      window.history.pushState({}, "", browserPath);
    }

    this.onRouteChange(route);
  }

  normalizeInputPath(path) {
    if (!path) {
      return "/";
    }

    if (typeof path === "string" && /^https?:\/\//i.test(path)) {
      return toLogicalPath(new URL(path).pathname);
    }

    if (typeof path === "string" && path.startsWith("/")) {
      return toLogicalPath(path);
    }

    return stripTrailingSlash(withLeadingSlash(path));
  }

  handleClick(event) {
    const link = event.target.closest("a[href]");

    if (!link) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || link.target === "_blank" || /^https?:\/\//i.test(href)) {
      return;
    }

    event.preventDefault();
    const nextUrl = new URL(href, document.baseURI);
    this.navigate(nextUrl.pathname + nextUrl.search + nextUrl.hash);
  }

  handlePopState() {
    this.onRouteChange(this.resolve(toLogicalPath(window.location.pathname)));
  }
}
