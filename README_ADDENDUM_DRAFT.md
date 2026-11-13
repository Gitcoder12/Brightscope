# Brightscope — README Explanation Draft

> Review this draft against the default-branch implementation before incorporating it into README.md.

## In plain language

A research search page that lets a user look for academic papers across several open scholarly indexes from one place.

## Current implementation

Browser-based research discovery UI with adapters for OpenAlex, Crossref, arXiv and other providers, metadata normalisation and deduplication. The audit found a Python Flask app incorrectly stored as .env.example, a missing templates/index.html, GitHub Pages deployment mismatch and a public-proxy fetch monkeypatch to verify.

## Technical view

Describe the real source adapters, data schema, browser/backend boundaries, error paths, provenance fields and dependency versions. Do not imply that a planned provider, API or map is already available.

## How to try it

Use the exact commands from README.md. Provide one example query or data record, the expected visible result and how a user can tell when a source is unavailable.

## Limitations and trust

Explain incomplete coverage, stale or sample data, external provider limits and any untrusted intermediaries. Never imply that indexed results are exhaustive or independently verified.

## Contributing

Start from FEATURE_UPGRADE_PLAN.md and the existing contribution guide; record all verified work in ACTIVITY_LOG.md.
