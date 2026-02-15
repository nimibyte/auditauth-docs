# Contributing to AuditAuth Documentation

Thank you for helping improve the official AuditAuth documentation.

This repository is public and serves as a production reference for teams integrating AuditAuth. Prioritize accuracy, clarity, and version correctness in every contribution.

## Scope of Contributions

Contributions are welcome for:
- Documentation fixes and clarifications
- Structural improvements to navigation and discoverability
- Missing integration examples and implementation guidance
- Consistency updates across `beta` and `v1`

Out of scope for this repository:
- Product feature requests without documentation impact
- Private/internal implementation details
- Security disclosures (use `SECURITY.md`)

## Before You Start

1. Check open issues and existing pull requests to avoid duplicate work.
2. For significant or structural changes, open an issue first.
3. Confirm target version: `beta`, `v1`, or both.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and validate your changes in context.

## Writing Standards

- Prefer concise, direct, technical language.
- Use normative terms when behavior is required:
  - `MUST`, `MUST NOT` for hard requirements
  - `SHOULD`, `SHOULD NOT` for strong recommendations
- Keep terminology consistent with existing docs.
- Avoid speculative statements and unverifiable claims.
- Do not include secrets, private endpoints, or customer data.

## Versioning Rules

- `beta` is preview guidance and may evolve.
- `v1` is stable guidance for production adoption.
- Breaking documentation changes should land in `beta` first and move to `v1` once validated.

## Pull Request Workflow

1. Create a scoped branch from the active default branch.
2. Keep commits focused and logically grouped.
3. Run checks before opening a PR:

```bash
npm run lint
npm run build
```

4. Open a PR using the repository template.
5. Include in the PR description:
   - Why this change is needed
   - Which version(s) are impacted
   - Any migration or compatibility notes

## Review Criteria

A PR is generally approved when it is:
- Accurate and aligned with documented architecture contracts
- Clear for the intended technical audience
- Correctly versioned (`beta` and/or `v1`)
- Free of build/lint regressions

## Code of Conduct

By participating, you agree to collaborate respectfully and constructively.
