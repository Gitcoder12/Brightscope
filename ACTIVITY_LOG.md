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

## Portfolio documentation rollout — 2026-11-13

- Documentation PR: https://github.com/Gitcoder12/Brightscope/pull/4
- Added project-specific feature roadmap, company-fit map, two-level README guide and README quality checklist.
- Added or preserved contributor instructions and bounded agent/skills guidance as shown in the PR diff.
- Added plain-language and technical/research explanations to the README while retaining the existing setup and feature description.
- Validation: documentation/source review only; no application runtime test or deployment is claimed by this documentation PR.
- Status: draft PR, not merged.
