export function dedupeByTitle(items) {
  const seen = new Map();
  for (const item of items) {
    const key = item.title.toLowerCase();
    if (!seen.has(key)) seen.set(key, item);
  }
  return Array.from(seen.values());
}
