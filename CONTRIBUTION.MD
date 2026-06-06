# Contributing to BrightScope

## Adding a New Data Source
1. Create a fetch function in a new `sources/your_source.js` file
2. Return results in the standard format: `{ title, url, summary, date, category }`
3. Add it to the main search pipeline
4. Update README with the new source

## Standard Result Format
```json
{
  "title": "Paper or patent title",
  "url": "https://source.url",
  "summary": "Brief description",
  "date": "2025-01-01",
  "category": "research | patent | innovation"
}
