# BrightScope

**Search academic literature across open research indexes from one interface.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://gitcoder12.github.io/Brightscope/)
[![License](https://img.shields.io/badge/license-see%20LICENSE-lightgrey)](LICENSE)

BrightScope is a browser-based research discovery interface. It brings together metadata from open scholarly sources so users can search for papers without manually switching between several services.

## Features

- Unified paper search across supported open scholarly sources.
- Source-aware results with publication metadata and links.
- Author and research-record details where returned by the provider.
- Deduplication and normalization across result sources.
- Responsive single-page interface.

## Data Sources

The repository includes adapters for sources such as OpenAlex, Crossref, arXiv, and additional research or patent indexes. Returned fields depend on each provider; citation counts, abstracts, and author details may not be available for every record.

## Tech Stack

HTML · CSS · Vanilla JavaScript · OpenAlex · Crossref · arXiv · GitHub Pages

## Quick Start

```bash
git clone https://github.com/Gitcoder12/Brightscope.git
cd Brightscope
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. Some API adapters may require a compatible serverless deployment or proxy configuration; a static local server does not execute server-side JavaScript functions.

## Project Structure

```text
Brightscope/
├── index.html   # Browser interface
├── css/         # Application styles
├── js/          # Search and UI modules
└── api/         # Research-provider adapters
```

## Scope and Limitations

BrightScope depends on third-party public APIs. Results can be delayed, rate-limited, incomplete, or differently indexed across providers. It is a discovery aid, not a systematic-review protocol or a substitute for checking the publisher's record.

## License

See [LICENSE](LICENSE).
