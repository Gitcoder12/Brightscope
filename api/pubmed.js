export async function searchPatents(query, limit = 10) {
  if (!query.trim()) return [];
  const payload = {
    q: `(_text_any:${query.replace(/[^\w\s]/g, ' ')})`,
    f: ["patent_id", "patent_title", "patent_abstract", "patent_date", "assignee_organization"],
    o: { per_page: limit, matched_subentities_only: true }
  };
  try {
    const res = await fetch('https://api.patentsview.org/patents/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const patents = data.patents || [];
    return patents.map(p => {
      const assignee = p.assignees?.[0]?.assignee_organization || 'Unknown Assignee';
      const patentNumber = p.patent_id || '';
      return {
        title: p.patent_title || 'Untitled Patent',
        abstract: (p.patent_abstract || 'No abstract.').slice(0, 400),
        url: patentNumber ? `https://patents.google.com/patent/${patentNumber}` : '#',
        date: p.patent_date ? p.patent_date.slice(0,4) : 'Unknown',
        source: `Patent · ${assignee}`,
        type: 'patent',
        citations: 0,
        authors: assignee
      };
    });
  } catch (err) {
    console.error('Patents error', err);
    return [];
  }
}
