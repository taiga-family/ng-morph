# Contributing

Thanks for your interest in contributing to ng-morph.

ng-morph is an Angular and Nx workspace for code mutations built on TypeScript tooling. The most useful contributions
are focused, include tests when behavior changes, and keep formatting, linting, spelling, build, and test checks green.

## Getting Started

1. Install Node.js and npm.
2. Fork and clone the repository.
3. Install dependencies with npm.

```bash
git clone https://github.com/<your-username>/ng-morph.git
cd ng-morph
npm install
git checkout -b your-change
```

## Local Checks

The CI workflow runs formatting, style, lint, spelling, build, and tests. Before opening a pull request, run the
relevant checks locally:

```bash
npm run format:check
npm run stylelint
npm run lint
npm run cspell
npm run build
npm run test
```

For formatting changes, use:

```bash
npm run format
npm run stylelint -- --fix
npm run lint -- --fix
```

## Pull Requests

Please keep pull requests focused and include:

- what changed
- why the change is needed
- which local checks you ran
- whether the change affects the library, demo app, build tooling, or documentation

When changing code mutation behavior, add or update tests that cover the affected TypeScript or Angular pattern.
