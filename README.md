# BrightScope

BrightScope is an open research discovery platform that helps users search across academic literature from multiple sources through a single interface.

**Live Demo:** https://gitcoder12.github.io/Brightscope/

---

## Overview

BrightScope queries multiple open academic sources and returns unified results in one place.

Instead of searching multiple databases separately, users can search once and explore research from a single interface.

Current data sources:

* OpenAlex
* Crossref

No API keys are required.

---

## Core Features

* Unified research search
* Multi-source aggregation
* Research paper discovery
* Author information
* Source attribution
* Deduplicated results
* Mobile-friendly interface
* GitHub Pages deployment

---

## Example

Search:

```text
graphene battery
```

Results:

* Research papers
* Author information
* Publication metadata
* Source attribution

---

## Quick Start

```bash
git clone https://github.com/Gitcoder12/Brightscope.git
cd Brightscope

python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

---

## Roadmap

### V2 — Research Intelligence

* Top authors
* Top institutions
* Top topics
* Citation insights

### V3 — Research Analytics

* Trend detection
* Topic clustering
* Emerging research areas

### V4 — Patent Intelligence
 
* Patent search
* Inventor search
* Technology landscapes

### V5 — Innovation Engine

* Research gap detection
* Opportunity discovery
* Commercialization insights

---

## Technology Stack

* HTML
* CSS
* Vanilla JavaScript
* OpenAlex API
* Crossref API
* GitHub Pages

---

## Status

Current Version: **V1**

Active development.

---

## Goal

Make research discovery accessible to students, researchers, founders, inventors, and builders by providing a fast and open platform for exploring scientific knowledge.


---

## AI-maintained project notes (secondary — 2026-11-13)

This section supplements the maintainer-authored README above. The original text has been restored verbatim from Git-history baseline `146aeef987c2275811e5213fca50edb428bbbe56`; this addendum does not replace or certify the original claims.

- The source tree, runtime data and tests are the implementation source of truth. Do not treat roadmap items, draft PRs or AI-generated descriptions as shipped features.
- Preserve existing maintainer-provided data. Never replace real data with synthetic or placeholder records. Any test fixture must be clearly labelled and isolated from runtime data.
- Mark unverified sources, IDs, records, metrics and external claims as unknown/unverified rather than guessing.
- Verify installation, execution, tests and public claims against the exact current commit before presenting this project to recruiters, researchers or professors.
- See [MODEL_AUDIT_ROUTER.md](MODEL_AUDIT_ROUTER.md) for the independent multi-model review and merge gate.

---

## Engineering Audit & Handover — 2026-11-17

**Review scope:** default branch `main`; static inspection of `api/core.js`. Runtime tests were not executed.

### Confirmed findings
- `fetchWithTimeout()` returns the raw Fetch `Response` without checking `response.ok`. Callers must explicitly handle HTTP error statuses; otherwise error responses may be treated as successful payloads.
- `escapeHtml()` escapes ampersands and angle brackets, but not quotation marks. This is suitable only for text-node escaping; it must not be assumed safe for interpolated HTML attributes.
- The timeout helper clears its timer after the fetch resolves, but body parsing occurs later in callers and is not covered by this timeout.

### Next actions
1. Standardize HTTP status handling and error reporting in every API wrapper.
2. Use context-appropriate escaping or DOM text APIs; do not reuse this helper for HTML attributes.
3. Decide whether the timeout should cover response-body consumption, then add tests for non-2xx responses, timeouts, malformed JSON, and escaping contexts.

**Verification status:** shared utility inspection only; API integrations, browser behavior, and tests remain unverified.

---

## Examples Used
- Discovering research on graphene batteries
- Aggregating the same paper from OpenAlex and Crossref
- Comparing publication metadata and author records


---

## Comparison with Existing Open-Source Projects

BrightScope is documented as a unified research-discovery interface that aggregates academic metadata from sources such as OpenAlex and Crossref. The following projects provide relevant discovery, knowledge-graph and scholarly-workflow comparisons.

| Project | Established focus | Relationship to BrightScope |
|---|---|---|
| [Open Knowledge Maps](https://github.com/openknowledgemaps/orkg) | Visual discovery and exploration of scientific knowledge | Stronger emphasis on visual knowledge maps and structured research exploration; BrightScope's current distinction is a lightweight, multi-source search interface. |
| [Open Research Knowledge Graph (ORKG)](https://github.com/orkg/orkg) | Structured scholarly knowledge, comparisons and research contributions | A broader knowledge-graph approach; BrightScope currently focuses on paper discovery and metadata aggregation rather than authoring structured research contributions. |
| [Zotero](https://github.com/zotero/zotero) | Reference management, collection organization and citation workflows | Mature researcher-library workflow; BrightScope is positioned earlier in the discovery stage and is not a replacement for reference management. |

### Where BrightScope is different
- **Cross-source search in one interface:** its stated V1 purpose is to query multiple open scholarly metadata sources without requiring users to search each separately.
- **Lightweight deployment:** the README describes a browser-based application deployable through GitHub Pages, with no API keys required for its current OpenAlex/Crossref sources.
- **Discovery-first scope:** the current product is narrower than a full reference manager or scholarly knowledge graph.

### Where established projects are stronger
Zotero and ORKG have deeper workflows and mature ecosystems; Open Knowledge Maps has a specialized visual exploration approach. BrightScope should not claim better coverage, citation quality or research recommendations without comparative evaluation.

### Evidence and limitations
Document source attribution, retrieval time, deduplication rules, metadata conflicts and API failure behavior. The README labels author analytics, trend detection, patent intelligence and research-gap discovery as roadmap items; do not present them as shipped V1 capabilities unless verified in the current code. This is a scope comparison, not a benchmark or exhaustive product audit.
