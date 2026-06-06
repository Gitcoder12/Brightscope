export async function searchCrossref(query) {

    const url =
        `https://api.crossref.org/works?query=${encodeURIComponent(query)}&rows=20`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Crossref request failed");
    }

    const data = await response.json();

    return (data.message.items || []).map(item => ({
        title: item.title?.[0] || "Untitled",
        authors: item.author?.map(a =>
            `${a.given || ""} ${a.family || ""}`.trim()
        ).join(", ") || "Unknown",
        year: item.published?.["date-parts"]?.[0]?.[0] || "",
        link: item.URL || "#",
        source: "Crossref"
    }));
}
