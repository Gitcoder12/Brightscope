// patentsView.js – Real API wrapper for US patents (PatentsView)
// Documentation: https://patentsview.org/apis

export async function searchPatents(query, limit = 10) {
  if (!query || query.trim() === '') return [];

  // Build PatentsView API request (search in patent title, abstract, assignee)
  const payload = {
    q: `(_text_any:${escapePatentsViewQuery(query)})`,
    f: ["patent_id", "patent_title", "patent_abstract", "patent_date", "assignee_organization", "inventor_name_first", "inventor_name_last"],
    o: { per_page: limit, matched_subentities_only: true }
  };

  const url = 'https://api.patentsview.org/patents/query';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const patents = data.patents || [];
    
    return patents.map(patent => {
      const assignee = patent.assignees?.[0]?.assignee_organization || 'Unknown Assignee';
      const inventors = patent.inventors?.map(i => `${i.inventor_name_first || ''} ${i.inventor_name_last || ''}`.trim()).filter(Boolean).join(', ') || 'Unknown';
      const date = patent.patent_date ? patent.patent_date.slice(0,4) : 'Unknown';
      const title = patent.patent_title || 'Untitled Patent';
      const abstract = patent.patent_abstract || 'No abstract available.';
      const patentNumber = patent.patent_id || '';
      const urlLink = patentNumber ? `https://patents.google.com/patent/${patentNumber}` : '#';
      
      return {
        title: title,
        abstract: abstract.slice(0, 400),
        url: urlLink,
        date: date,
        source: `Patent · ${assignee}`,
        type: 'patent',
        inventors: inventors,
        number: patentNumber,
        citations: 0  // PatentsView doesn't provide citation count directly in simple query
      };
    });
  } catch (err) {
    console.error('PatentsView API error:', err);
    return [];
  }
}

// Helper: escape query for PatentsView's _text_any syntax
function escapePatentsViewQuery(str) {
  // Remove characters that might break the query syntax
  return str.replace(/[^\w\s]/g, ' ').trim();
}
