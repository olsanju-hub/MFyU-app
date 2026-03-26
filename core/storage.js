import { safeJsonParse } from "./utils.js";

const FAVORITES_KEY = "mfyu:favorites";
const HISTORY_KEY = "mfyu:history";
const PREFERENCES_KEY = "mfyu:preferences";
const HISTORY_LIMIT = 24;
const DEFAULT_PREFERENCES = {
  drawerOpen: true,
  lastSearch: "",
};
const memoryStorage = new Map();

function readRaw(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return memoryStorage.has(key) ? memoryStorage.get(key) : null;
  }
}

function writeRaw(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    memoryStorage.set(key, value);
  }
}

function readArray(key) {
  const parsed = safeJsonParse(readRaw(key), []);
  return Array.isArray(parsed) ? parsed : [];
}

function write(key, value) {
  writeRaw(key, JSON.stringify(value));
}

function readObject(key, fallback) {
  const parsed = safeJsonParse(readRaw(key), fallback);

  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    return { ...fallback };
  }

  return {
    ...fallback,
    ...parsed,
  };
}

export class AppStorage {
  getFavorites() {
    return readArray(FAVORITES_KEY);
  }

  isFavorite(entryId) {
    return this.getFavorites().includes(entryId);
  }

  toggleFavorite(entryId) {
    const favorites = this.getFavorites();
    const next = favorites.includes(entryId)
      ? favorites.filter((id) => id !== entryId)
      : [entryId, ...favorites];

    write(FAVORITES_KEY, next);
    return next;
  }

  getHistory() {
    return readArray(HISTORY_KEY);
  }

  pushHistory(entry) {
    if (!entry || !entry.id) {
      return this.getHistory();
    }

    const history = this.getHistory().filter((item) => item.id !== entry.id);
    const next = [{ ...entry, visitedAt: Date.now() }, ...history].slice(0, HISTORY_LIMIT);
    write(HISTORY_KEY, next);
    return next;
  }

  clearHistory() {
    write(HISTORY_KEY, []);
  }

  getPreferences() {
    return readObject(PREFERENCES_KEY, DEFAULT_PREFERENCES);
  }

  setPreference(key, value) {
    const next = {
      ...this.getPreferences(),
      [key]: value,
    };

    write(PREFERENCES_KEY, next);
    return next;
  }
}
