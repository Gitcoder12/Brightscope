# Brightscope — Activity Log

**Snapshot:** 2026-11-13

## Verified history

Issue #3 records the .env.example/Flask mismatch, missing template, deployment model inconsistency and public CORS proxy concern. No source files were changed in the issue: https://github.com/Gitcoder12/Brightscope/issues/3

## Current scope and limitations

Browser-based research discovery UI with adapters for OpenAlex, Crossref, arXiv and other providers, metadata normalisation and deduplication. The audit found a Python Flask app incorrectly stored as .env.example, a missing templates/index.html, GitHub Pages deployment mismatch and a public-proxy fetch monkeypatch to verify.

## Append-only record

| Date | Contributor / agent | Issue or PR | Files / scope | Validation method and environment | Result | Evidence / caveats |
|---|---|---|---|---|---|---|
| YYYY-MM-DD | name | link | paths | exact command | pass / fail / not run | evidence and limitation |

Record failed checks, regressions, reverts and manual-only verification. Do not claim deployment, real-time operation or production correctness without evidence.
