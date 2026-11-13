# Independent Model Audit Router — Brightscope

**Revision date:** 2026-11-13  
**Purpose:** Protect the original project, its real data, and maintainer credibility during independent model reviews.

## Non-negotiable data-integrity rules
1. Never replace real or user-provided data with fabricated, synthetic, generated, or placeholder records. Never silently swap an existing dataset, source file, fixture, API response, or user-provided content.
2. Before changing data, trace its origin and inspect Git history. Record exact path, prior commit, source, licence, collection date, and known limitations.
3. If a real source cannot be verified, preserve the existing source unchanged and mark affected fields as `unknown` or `unverified`. Do not invent an alternative.
4. Synthetic data is allowed only in clearly labelled tests, fixtures, examples, or explicitly requested demos. Keep it separate from production data and label it visibly.
5. Do not fabricate people, company relationships, government records, licences, inspections, citations, metrics, benchmark results, customers, deployments, endorsements, or contributors.
6. Never claim tests passed unless they ran successfully against the exact commit under review. Distinguish unit, mocked, integration, manual, CI, and production observations.

## README preservation policy
- Recover the last maintainer-authored README from Git history before editing.
- Preserve its original wording, sections, links, images, examples, and project-specific claims.
- Do not rewrite or replace the original README. Append a dated, clearly labelled **AI-maintained notes / engineering addendum** at the very bottom only.
- Keep the addendum secondary, factual, concise, and linked to code, tests, issues, commits or PRs.
- Flag unsupported claims for maintainer review; do not silently delete, invent, or rewrite them.

## Independent review agents
1. **Data provenance checker:** traces runtime datasets and official-looking fields to verifiable sources; detects fabricated rows, identifiers, dates, names, scores and silent substitutions.
2. **Code/architecture reviewer:** verifies documented commands, module paths, APIs, entry points, workflows and architecture against source.
3. **Security/privacy reviewer:** checks secrets, credentials, input handling, authentication/authorisation, data exposure, dependencies and privacy boundaries. Never reproduce secrets in reports.
4. **Test/reliability reviewer:** runs documented build/lint/test commands, checks edge cases and verifies exact-commit results.
5. **README/attribution reviewer:** compares README with its pre-AI Git-history baseline and checks licensing, attribution, links, installation and claims.
6. **Career/research reviewer:** checks recruiter-, researcher- and professor-facing claims for demonstrability, accuracy, scope and public evidence.

## Required review output
For each finding report: severity (**P0 blocker / P1 high / P2 medium / P3 low**); exact file and line/symbol; reproduction steps; expected vs actual; evidence (commit SHA, test output or public source); confirmed/suspected/unverifiable status; minimal proposed fix and regression test; and whether data or README history is affected.

## Required audit sequence
1. Record repository URL, default branch, exact HEAD SHA, repository type (original/fork), and current status.
2. Inspect AI-related commits and all relevant PRs. Classify as merged, open, closed-unmerged, reverted, or unverified.
3. Inventory runtime data, generated files, fixtures, data loaders, external APIs, and provenance.
4. Compare README with its protected pre-AI history baseline.
5. Run real install/build/lint/test commands; inspect CI for suppressed failures, skipped tests or false-green jobs.
6. Review security, privacy, accessibility, error handling, performance and reproducibility.
7. Audit public-facing claims and links. Company matches indicate potential skills fit only, not adoption or endorsement.
8. Publish findings. Do not merge, delete, force-push, overwrite datasets or change the original README without maintainer approval.

## Merge gate
- [ ] No fabricated data is presented as real or official.
- [ ] User-provided and verified data is preserved.
- [ ] Synthetic fixtures are labelled and isolated from runtime records.
- [ ] Public claims have accessible evidence.
- [ ] Tests/CI pass on the exact PR head or failures are disclosed.
- [ ] Original README is retained; AI addendum is at the bottom only.
- [ ] No secrets, private personal details, classified or confidential material is introduced.
- [ ] Licensing and upstream attribution are preserved.
- [ ] A second reviewer independently checks the diff.
- [ ] Maintainer approval is recorded.

## Repository-specific instruction
Repository: **Brightscope**. Start from its current source tree, README history, runtime data, tests, workflows, issues and open PRs. Do not infer capabilities from the repository name or roadmap. The repository owner has final approval; contribution counts, model confidence, generated documentation and green CI checks do not replace technical review.
