import { fetchWithTimeout } from './core.js';

export async function searchDOAJ(query, limit = 10) {
  // DOAJ API requires API key for production, but we use public search endpoint (no key needed for basic)
  // This endpoint may have CORS; we'll use a proxy if needed.
  const url = `https://doaj.org/api/search/articles/${encodeURIComponent(query)}?pageSize=${limit}`;
  try {
    const res = await fetchWithTimeout(url);
    if (!res.ok) return [];
    const data = await res.json();
    const results = data.results || [];
    return results.map(r => ({
      title: r.bibjson?.title || 'Untitled',
      abstract: (r.bibjson?.abstract || '').slice(0, 400),
      url: r.bibjson?.url?.[0] || '#',
      date: r.bibjson?.year || 'Unknown',
      source: 'DOAJ',
      type: 'paper',
      citations: 0,
      authors: r.bibjson?.author?.map(a => a.name).join(', ') || 'Unknown'
    }));
  } catch (err) {
    console.warn('DOAJ error', err);
    return [];
  }
}
