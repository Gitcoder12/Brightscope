export function sortByDate(items, newestFirst = true) {
  return [...items].sort((a,b) => {
    const da = a.date === 'Unknown' ? '' : a.date;
    const db = b.date === 'Unknown' ? '' : b.date;
    return newestFirst ? db.localeCompare(da) : da.localeCompare(db);
  });
}

export function sortByCitations(items) {
  return [...items].sort((a,b) => (b.citations || 0) - (a.citations || 0));
}
