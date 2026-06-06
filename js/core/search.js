import { searchCrossref } from '../api/crossref.js';
import { searchOpenAlex } from '../api/openalex.js';
import { searchArxiv } from '../api/arxiv.js';
import { searchPatents } from '../api/patents.js';
import { searchPubMed } from '../api/pubmed.js';
import { searchDOAJ } from '../api/doaj.js';

export async function aggregateAll(query, sources = ['crossref','openalex','arxiv','patents','pubmed','doaj']) {
  const promises = [];
  if (sources.includes('crossref')) promises.push(searchCrossref(query).catch(e => []));
  if (sources.includes('openalex')) promises.push(searchOpenAlex(query).catch(e => []));
  if (sources.includes('arxiv')) promises.push(searchArxiv(query).catch(e => []));
  if (sources.includes('patents')) promises.push(searchPatents(query).catch(e => []));
  if (sources.includes('pubmed')) promises.push(searchPubMed(query).catch(e => []));
  if (sources.includes('doaj')) promises.push(searchDOAJ(query).catch(e => []));
  const results = await Promise.all(promises);
  return results.flat();
}
