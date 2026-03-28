importScripts("./core/precache-manifest.js");

const CACHE_NAME = "mfyu-aap-shell-v6";
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

function isFreshAssetPath(path) {
  return (
    !path ||
    path === "index.html" ||
    path === "404.html" ||
    path === "manifest.json" ||
    /\.(?:html|js|css|json)$/i.test(path)
  );
}

async function updateCache(request, response) {
  if (!response || !response.ok) {
    return;
  }

  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}

async function networkFirst(request, fallbackUrl) {
  try {
    const response = await fetch(request);
    updateCache(request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);

    if (cached) {
      return cached;
    }

    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);

      if (fallback) {
        return fallback;
      }
    }

    throw error;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);

  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  updateCache(request, response);
  return response;
}

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
    event.respondWith(networkFirst(event.request, PRECACHE_INDEX_URL));
    return;
  }

  const relativePath = toScopedRelativePath(url.pathname);
  const cacheOnlyAssets =
    PRECACHE_PATHS.includes(relativePath) ||
    relativePath.startsWith("assets/");

  if (isFreshAssetPath(relativePath)) {
    event.respondWith(networkFirst(event.request, relativePath.endsWith(".html") ? PRECACHE_INDEX_URL : null));
    return;
  }

  if (cacheOnlyAssets) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  event.respondWith(networkFirst(event.request));
});
