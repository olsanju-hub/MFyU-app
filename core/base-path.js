import { stripTrailingSlash, withLeadingSlash } from "./utils.js";

export const APP_BASE_URL = new URL("../", import.meta.url);
export const APP_BASE_HREF = APP_BASE_URL.pathname;
export const APP_BASE_PATH = APP_BASE_HREF === "/" ? "" : APP_BASE_HREF.replace(/\/$/, "");

export function withBasePath(path = "/") {
  const normalized = stripTrailingSlash(withLeadingSlash(path));

  if (!APP_BASE_PATH) {
    return normalized === "/" ? "/" : normalized;
  }

  return normalized === "/" ? `${APP_BASE_PATH}/` : `${APP_BASE_PATH}${normalized}`;
}

export function resolveAppUrl(path = "") {
  if (!path || path === "/") {
    return APP_BASE_URL.toString();
  }

  return new URL(String(path).replace(/^\/+/, ""), APP_BASE_URL).toString();
}

export function toLogicalPath(pathname = "/") {
  const rawPath = typeof pathname === "string" ? pathname.split(/[?#]/, 1)[0] : "/";
  let nextPath = rawPath || "/";

  if (APP_BASE_PATH && (nextPath === APP_BASE_PATH || nextPath.startsWith(`${APP_BASE_PATH}/`))) {
    nextPath = nextPath.slice(APP_BASE_PATH.length) || "/";
  }

  return stripTrailingSlash(withLeadingSlash(nextPath));
}
