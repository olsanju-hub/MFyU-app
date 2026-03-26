import { toLogicalPath, withBasePath } from "./base-path.js";
import { stripTrailingSlash, withLeadingSlash } from "./utils.js";

const getAppSource = (appId) => `apps/${appId}/index.html`;

const APP_ROUTES = {
  "/": { kind: "app", appId: "inicio", source: getAppSource("inicio") },
  "/inicio": { kind: "app", appId: "inicio", source: getAppSource("inicio") },
  "/protocolos": { kind: "app", appId: "protocolos", source: getAppSource("protocolos") },
  "/procedimientos": { kind: "app", appId: "procedimientos", source: getAppSource("procedimientos") },
  "/herramientas": { kind: "app", appId: "herramientas", source: getAppSource("herramientas") },
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
