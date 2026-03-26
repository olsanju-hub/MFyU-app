import { normalizeText } from "./utils.js";

function scoreEntry(entry, query) {
  const normalizedQuery = normalizeText(query);
  const title = normalizeText(entry.title);
  const keywords = normalizeText(entry.keywords || "");
  const summary = normalizeText(entry.summary || "");
  let score = 0;

  if (title === normalizedQuery) {
    score += 100;
  }

  if (title.startsWith(normalizedQuery)) {
    score += 60;
  }

  if (title.includes(normalizedQuery)) {
    score += 35;
  }

  if (keywords.includes(normalizedQuery)) {
    score += 20;
  }

  if (summary.includes(normalizedQuery)) {
    score += 10;
  }

  if (entry.section === "vademecum") {
    score += 2;
  }

  return score;
}

export class SearchEngine {
  constructor({ registry, storage }) {
    this.registry = registry;
    this.storage = storage;
  }

  search(query, options = {}) {
    const normalizedQuery = normalizeText(query);
    const favorites = new Set(this.storage.getFavorites());
    const history = new Set(this.storage.getHistory().map((entry) => entry.id));

    const filter = options.filter || "todos";
    const base = this.registry.entries.filter((entry) => {
      if (filter === "todos") {
        return true;
      }

      if (filter === "favoritos") {
        return favorites.has(entry.id);
      }

      if (filter === "historial") {
        return history.has(entry.id);
      }

      return entry.section === filter;
    });

    const result = (normalizedQuery
      ? base
          .map((entry) => ({
            ...entry,
            score: scoreEntry(entry, normalizedQuery),
          }))
          .filter((entry) => entry.score > 0)
      : base.map((entry) => ({ ...entry, score: 1 })))
      .map((entry) => ({
        ...entry,
        isFavorite: favorites.has(entry.id),
        isRecent: history.has(entry.id),
      }))
      .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, "es"));

    return result.slice(0, options.limit || 120);
  }

  suggest(query, limit = 8) {
    if (!normalizeText(query)) {
      return [];
    }

    return this.search(query, { limit }).slice(0, limit);
  }
}
