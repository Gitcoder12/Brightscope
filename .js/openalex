export async function searchOpenAlex(query) {

    const url =
        `https://api.openalex.org/works?search=${encodeURIComponent(query)}&per-page=20`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("OpenAlex request failed");
    }

    const data = await response.json();

    return (data.results || []).map(item => ({
        title: item.display_name || "Untitled",
        authors: item.authorships?.map(a =>
            a.author?.display_name
        ).join(", ") || "Unknown",
        year: item.publication_year || "",
        link: item.id || "#",
        source: "OpenAlex"
    }));
}
