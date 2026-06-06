// arXiv API wrapper – returns preprints with proxy fallbacks
const PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://thingproxy.freeboard.io/fetch/'
];

async function fetchWithTimeout(url, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

async function fetchArxivWithProxy(query, proxyIndex = 0) {
  if (proxyIndex >= PROXIES.length) throw new Error('All arXiv proxies failed');
  const arxivUrl = `https://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(query)}&max_results=15&sortBy=submittedDate&sortOrder=descending`;
  const proxyUrl = PROXIES[proxyIndex] + encodeURIComponent(arxivUrl);
  const response = await fetchWithTimeout(proxyUrl, 10000);
  if (!response.ok) throw new Error(`Proxy ${proxyIndex+1} HTTP ${response.status}`);
  const text = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'text/xml');
  const entries = xml.querySelectorAll('entry');
  if (entries.length === 0) return [];
  const results = [];
  for (let entry of entries) {
    const title = entry.querySelector('title')?.textContent?.trim() || 'Untitled';
    const summary = entry.querySelector('summary')?.textContent?.trim()?.slice(0, 400) || '';
    const link = entry.querySelector('id')?.textContent || '#';
    let date = entry.querySelector('published')?.textContent?.slice(0,10) || '';
    // fallback to year only
    const year = date.split('-')[0] || '';
    results.push({
      title: title,
      summary: summary,
      url: link,
      date: date,
      year: year,
      source: 'arXiv',
      category: 'preprint'
    });
  }
  return results;
}

export async function searchArxiv(query) {
  let lastError;
  for (let i = 0; i < PROXIES.length; i++) {
    try {
      const results = await fetchArxivWithProxy(query, i);
      if (results.length > 0) return results;
    } catch (err) {
      lastError = err;
      console.warn(`arXiv proxy ${i+1} failed: ${err.message}`);
    }
  }
  console.error('All arXiv proxies failed', lastError);
  return [];
} 
