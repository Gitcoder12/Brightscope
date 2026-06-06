import { escapeHtml } from '../api/core.js';

export function renderResults(container, items) {
  if (!items.length) {
    container.innerHTML = '<div class="empty-message">No results. Try another query.</div>';
    return;
  }
  container.innerHTML = `<div style="margin-bottom:12px;"><strong>${items.length} results</strong></div>` +
    items.map(item => `
      <div class="result-card">
        <div class="result-title"><a href="${escapeHtml(item.url)}" target="_blank">${escapeHtml(item.title)}</a></div>
        <div class="result-details">
          <span class="badge-source">${escapeHtml(item.source)}</span>
          <span>📅 ${escapeHtml(item.date)}</span>
          <span>${item.type === 'patent' ? '⚖️ Patent' : '📖 Paper'}</span>
          ${item.citations ? `<span>📊 ${item.citations} citations</span>` : ''}
        </div>
        <div class="abstract">${escapeHtml(item.abstract) || 'No abstract available.'}</div>
      </div>
    `).join('');
}

export function updateDashboard(containerId, items, type = 'papers') {
  // Simplified for brevity – implement full author/topic extraction as needed
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `<div class="empty-message">${items.length} ${type} loaded</div>`;
}
