<p align="center">
  <img src="./public/logo.png" alt="AuditAuth Logo" width="120" />
</p>

<h1 align="center">AuditAuth Official Documentation</h1>

<p align="center">
  Public documentation source for the AuditAuth identity control plane.
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Docs Framework: Nextra](https://img.shields.io/badge/Docs-Nextra-000000.svg)](https://nextra.site/)
[![Runtime: Next.js](https://img.shields.io/badge/Runtime-Next.js-000000.svg)](https://nextjs.org/)

Official public documentation source for **AuditAuth**, the identity control plane for modern applications.

This repository powers the documentation site and maintains versioned content for:
- `beta` - preview and evolving specifications
- `v1` - stable documentation line

## Purpose

This repository exists to provide a single, authoritative source of truth for AuditAuth implementation guidance, architecture contracts, and integration behavior.

It is intended for:
- Platform and backend engineers integrating AuditAuth
- Security and governance teams reviewing identity controls
- Technical leaders validating operational and audit guarantees

## Platform Overview

AuditAuth centralizes identity-critical capabilities across application boundaries:
- Managed authentication and identity-provider orchestration
- Access and refresh token issuance
- Session lifecycle management and enforcement contracts
- Identity governance and auditable event history
- Identity-aware observability for operational visibility

Applications integrate through SDKs and enforce identity state at runtime; they do not re-implement authentication internally.

## Documentation Scope

The documentation covers:
- Product architecture and trust boundaries
- Identity and session lifecycle contracts
- Governance and audit event model
- Observability model and telemetry expectations
- Integration tracks (web, React, Next.js, backend)
- Billing/application-state model (where applicable)

The documentation does not replace product-level authorization design or business policy modeling in consuming systems.

## Stack

- [Next.js](https://nextjs.org/)
- [Nextra](https://nextra.site/) (`nextra-theme-docs`)
- MDX-based documentation content

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the local docs server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Quality Standard

All merged documentation updates should meet these criteria:
- Technically accurate and version-scoped
- Normative language where behavior is required (`MUST`, `MUST NOT`, `SHOULD`)
- Consistent with the platform architecture and enforcement model
- Written for production use, not tutorial-only scenarios

## Scripts

```bash
npm run dev    # Run local development server
npm run lint   # Run lint checks
npm run build  # Build production site
npm run start  # Serve production build
```

## Repository Layout

- `app/beta/` - beta documentation
- `app/v1/` - stable documentation
- `public/` - static assets
- `mdx-components.ts` - shared MDX component mappings

## Branch and Version Policy

- `beta` content may evolve as contracts are validated
- `v1` content represents stable guidance for production adoption
- Breaking documentation changes should be introduced in `beta` first, then promoted to `v1` when stabilized

## Versioning Model

Documentation is versioned at the route level. The docs UI includes a selector to switch between supported versions (`beta`, `v1`).

## Contribution Guidelines

We welcome contributions that improve clarity, correctness, and completeness.

For full contribution workflow, standards, and review expectations, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Recommended workflow:
1. Open an issue for significant or structural changes.
2. Create a scoped branch with focused commits.
3. Validate quality gates before opening a PR:

```bash
npm run lint
npm run build
```

PRs are expected to include:
- Clear rationale (why the change matters)
- Version impact (`beta`, `v1`, or both)
- Any migration or compatibility notes when semantics change

## Public Repository Notes

- Treat all content as public and reusable under MIT license terms
- Do not include secrets, internal endpoints, credentials, or private customer information
- Prefer stable references and avoid undocumented implementation details

## Support

- For bugs or documentation defects: open a GitHub Issue in this repository
- For security-sensitive topics: use private disclosure channels (see below)

## Security Reporting

Do not report vulnerabilities in public issues.

Use private disclosure channels (for example, GitHub Security Advisories) for security-sensitive reports.

For full policy and response expectations, see [`SECURITY.md`](./SECURITY.md).

## License

MIT - see [`LICENSE`](./LICENSE).
