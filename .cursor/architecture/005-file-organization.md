# 005 - File Organization (React Native)

## Status

Accepted

## Canonical `src/` tree

```text
src/
  nav/           # React Navigation only (no Expo Router app/)
  packages/      # feature screens and UI
  components/    # cross-feature UI
  theme/         # Colors, spacing tokens
  store/         # Redux (dumps, current, builders, config, thunks)
  api/           # HTTP clients
  model/         # persisted entity types
  utils/         # generic capability helpers only
```

## Forbidden

- `app/` directory for file-based routing (Expo Router)
- `src/features/`, `src/domains/`, `src/app/`
- `src/store/selectors/` or `**/selectors.ts`

## Conventions

- kebab-case filenames; one primary export per file
- `type` not `interface`
- Barrel `index.ts` in subfolders (`store/thunks/auth/index.ts`)
- Import alias `@/*` from repo root (`tsconfig.json`)

## References

- [006 – Constants & utilities](./006-constants-utilities.md)
- [011 – Domain models](./011-domain-models.md)
