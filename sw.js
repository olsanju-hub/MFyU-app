importScripts("./core/precache-manifest.js");

const CACHE_NAME = "mfyu-aap-shell-v3";
const APP_SCOPE_URL = new URL("./", self.location.href);
const APP_SCOPE_PATH = APP_SCOPE_URL.pathname;
const PRECACHE_PATHS = (self.__MFYU_PRECACHE || []).map((path) => {
  if (!path || path === "/") {
    return "index.html";
  }

  return String(path).replace(/^\/+/, "");
});
const PRECACHE_URLS = PRECACHE_PATHS.map((path) => new URL(path, APP_SCOPE_URL).toString());
const PRECACHE_INDEX_URL = new URL("index.html", APP_SCOPE_URL).toString();

function toScopedRelativePath(pathname) {
  let nextPath = pathname || "/";

  if (APP_SCOPE_PATH !== "/" && nextPath.startsWith(APP_SCOPE_PATH)) {
    nextPath = nextPath.slice(APP_SCOPE_PATH.length) || "/";
  }

  return nextPath.replace(/^\/+/, "");
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        }),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            return response;
          }

          return caches.match(PRECACHE_INDEX_URL);
        })
        .catch(() => caches.match(PRECACHE_INDEX_URL)),
    );
    return;
  }

  const relativePath = toScopedRelativePath(url.pathname);
  const cacheFirst =
    PRECACHE_PATHS.includes(relativePath) ||
    relativePath.startsWith("content/") ||
    relativePath.startsWith("apps/") ||
    relativePath.startsWith("core/");

  if (cacheFirst) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) {
          return cached;
        }

        return fetch(event.request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        });
      }),
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
