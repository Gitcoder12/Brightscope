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
