# React Native Template — Agent Rules

BEFORE implementing ANY feature, you MUST:
1. Read `.cursor/architecture/README.md`.
2. Read the relevant ADRs (**001–009**, **011–012**, **015**).
3. Follow documented patterns EXACTLY; if no pattern exists, add an ADR first.

## Redux — zero selector functions

- **No** `createSelector`, Reselect, `src/store/selectors/`, or `**/selectors.ts`.
- **`useAppSelector` only** as `(state) => state.<sliceKey>` — one whole top-level slice per call.
- **Derive** with `useMemo` in components.
- **No** view-models stored in Redux.

## Routing — detail screens without route params

- **Never** pass entity ids on `RootStackParamList` or read `route.params` for entity identity.
- **Use** `ROOT_ROUTES.*_DETAIL` on the root stack; detail reads **`current*`** from Redux.
- Open via thunk + `navigateRoot` ([008](./architecture/008-detail-screen-routing.md), [009](./architecture/009-react-navigation.md)).
- **No Expo Router** — no `app/` file-based routes.

## Utils — generic only

- `src/utils/{capability}/` — not `src/utils/{table}/`.
- Table/screen formatters live in **`src/packages/{feature}/`**.

## Non-negotiable rules

### Redux
1. Flat layers: `dumps/`, `current/`, `builders/`, `config/` per [001](./architecture/001-redux-patterns.md).
2. Manual thunks only (`AppThunk<Promise<200 | 400 | 500>>`); no `createAsyncThunk`.
3. Async side effects in thunks only, not components.
4. Form save thunks take no payload — read `current*` via `getState()` per [012](./architecture/012-package-form-inputs.md).

### Components
1. Thin `src/nav/**`; feature UI in `src/packages/<feature>/`.
2. Shared UI in `src/components/`.
3. Call thunks directly — no custom hooks that only wrap thunks.
4. `export const` for presentational components; `type` not `interface`.
5. Default export OK for React Navigation screen components per [002](./architecture/002-component-composition.md).

### Styling
1. `StyleSheet.create` after component per [003](./architecture/003-styling-rules.md).
2. Tokens in `src/theme/`.

### API
1. `src/api/**` only from thunks; JSDoc on API functions and thunks.

### Files
1. kebab-case, barrel `index.ts` per folder per [005](./architecture/005-file-organization.md).
2. Persisted entities in `src/model/{entity}.ts` per [011](./architecture/011-domain-models.md).

## Quick reference

- [001 – Redux patterns](./architecture/001-redux-patterns.md)
- [002 – Component composition](./architecture/002-component-composition.md)
- [006 – Constants & utilities](./architecture/006-constants-utilities.md)
- [007 – Starter layout](./architecture/007-starter-template-layout.md)
- [008 – Detail screen routing](./architecture/008-detail-screen-routing.md)
- [009 – React Navigation](./architecture/009-react-navigation.md)
- [004 – API integration](./architecture/004-api-integration.md)
- [005 – File organization](./architecture/005-file-organization.md)
- [011 – Domain models](./architecture/011-domain-models.md)
- [012 – Package form inputs](./architecture/012-package-form-inputs.md)
- [015 – No SQL functions](./architecture/015-no-sql-functions.md)
