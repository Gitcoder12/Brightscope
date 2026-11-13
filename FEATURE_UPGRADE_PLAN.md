# Brightscope — Feature Upgrade Plan

**Snapshot:** 2026-11-13

## Objective

A research search page that lets a user look for academic papers across several open scholarly indexes from one place.

## P0 — scope, correctness and safety

- [ ] Separate static frontend configuration from any backend code; replace .env.example with true secret-free variables.
- [ ] Remove or redesign public-proxy routing only after proving which requests use it; never silently route user queries through an untrusted proxy.

## P1 — core user experience

- [ ] Add per-provider timeout, rate-limit, provenance, deduplication and partial-failure handling.
- [ ] Add citation export and stable paper identifiers with tests.

## P2 — evaluation and scale

- [ ] Evaluate recall and deduplication against a labelled query set.
- [ ] Add reproducible search snapshots and author/venue metadata quality checks.

## Collaborator work packages

1. Data and API contract validation with fixture-based tests.
2. One bounded user workflow with documented expected output.
3. Provider/source failure handling and provenance.
4. Evaluation with a labelled set and a reproducible baseline.

## Definition of done

- [ ] Clean setup works exactly as documented.
- [ ] Tests cover normal, missing, malformed and boundary inputs.
- [ ] External data is attributed and limitations are visible.
- [ ] Main README and activity log reflect the actual implementation.
