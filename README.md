# Accessibility Baseline & Repository Architecture Audit

This repository documents an accessibility audit of a public-facing website and provides a maintainable monorepo-style full-stack project foundation.

## Audited Website

**DigiLocker**

The audit was performed using:

* Google Lighthouse
* Keyboard-only navigation

## Lighthouse Baseline

| Category       | Score |
| -------------- | ----: |
| Accessibility  |    82 |
| Performance    |    65 |
| Best Practices |    92 |
| SEO            |    83 |

## Key Accessibility Findings

The five priority issues identified during the audit are:

1. Buttons do not have accessible names — **High**
2. Image elements do not have `alt` attributes — **High**
3. Some elements have a `tabindex` value greater than 0 — **Medium**
4. Heading elements are not in a sequentially-descending order — **Medium**
5. Document does not have a main landmark — **Medium**

Detailed evidence, impact, remediation, and verification steps are documented in:

`docs/accessibility-audit.md`

## Repository Structure

```text
accessibility-architecture-audit/
├── client/
│   └── .gitkeep
├── server/
│   └── .gitkeep
├── docs/
│   ├── accessibility-audit.md
│   └── architecture.md
├── tests/
│   └── .gitkeep
└── README.md
```

## Architecture

The project follows a simple full-stack boundary:

```text
User
  ↓
Client
  ↓
HTTP API
  ↓
Server
  ↓
Data / Services
```

### Client

Responsible for:

* User interface
* Accessible interactions
* Form handling
* API communication

### Server

Responsible for:

* API endpoints
* Input validation
* Business logic
* Data and service access

### Docs

Contains:

* Accessibility audit
* Architecture documentation

### Tests

Reserved for:

* Unit tests
* Integration tests
* Accessibility tests

## First Vertical Feature Slice

The first planned feature is an **accessible document search**.

Flow:

```text
User enters search query
        ↓
Accessible search form
        ↓
GET /api/documents?query=...
        ↓
Server validates query
        ↓
Document service / mock data
        ↓
JSON response
        ↓
Accessible search results
```

## Accessibility Goals

The project foundation will follow accessible development practices including:

* Meaningful accessible names
* Appropriate alternative text
* Logical heading hierarchy
* Keyboard accessibility
* Semantic HTML
* Appropriate ARIA usage
* Clear focus states
* Main content landmark

## Local Setup

The project is designed to be developed using:

* Git
* Node.js
* VS Code or another code editor

Clone the repository:

```bash
git clone <repository-url>
cd accessibility-architecture-audit
```

The client and server directories will be expanded as implementation begins.

## Documentation

* [Accessibility Audit](docs/accessibility-audit.md)
* [Architecture](docs/architecture.md)

## Project Status

**Foundation and audit documentation in progress.**

The repository currently contains the accessibility audit, architecture documentation, and the initial client/server/test project structure.

