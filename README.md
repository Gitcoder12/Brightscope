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

## Open BrightScope locally (VS Code)

1. Clone the repository and open the folder in VS Code:

```bash
git clone https://github.com/Gitcoder12/Brightscope.git
cd Brightscope
```

2. Start a local static web server from the repository root:

```bash
python -m http.server 8000
```

3. Open **http://localhost:8000** in your browser.
4. Keep the terminal running while using the site; press **Ctrl+C** to stop the server.

No npm installation or build step is required. An internet connection is needed for the OpenAlex and Crossref requests and externally hosted fonts.

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
