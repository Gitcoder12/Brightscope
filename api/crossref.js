import { fetchWithTimeout } from './core.js';

export async function searchCrossref(query, limit = 15) {
  const url = `https://api.crossref.org/works?query=${encodeURIComponent(query)}&rows=${limit}&sort=relevance`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`Crossref HTTP ${res.status}`);
  const data = await res.json();
  const items = data.message?.items || [];
  return items.map(item => ({
    title: item.title?.[0] || 'Untitled',
    abstract: (item.abstract || '').replace(/<[^>]*>/g, '').slice(0, 400),
    url: item.URL || (item.DOI ? `https://doi.org/${item.DOI}` : '#'),
    date: item.issued?.['date-parts']?.[0]?.[0] || 'Unknown',
    source: 'Crossref',
    type: 'paper',
    citations: item['is-referenced-by-count'] || 0,
    authors: item.author?.map(a => `${a.given || ''} ${a.family || ''}`.trim()).join(', ') || 'Unknown'
  }));
}
