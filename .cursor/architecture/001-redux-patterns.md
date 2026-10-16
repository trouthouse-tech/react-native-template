# 001 - Redux Patterns (React Native)

## Status

Accepted

## Context

Mandatory Redux patterns for **tht-react-native-template** and apps created from it. Same flat-layer model as [nextjs-template](https://github.com) ADR 001; navigation side effects use `navigateRoot` per [009](./009-react-navigation.md) and [008](./008-detail-screen-routing.md).

## Decision

### 1) Manual thunks only

Do not use `createAsyncThunk`.

### 2) Thunk signature: `AppThunk<Promise<200 | 400 | 500>>`

Form save thunks take no arguments; read `getState().current*`. See [012](./012-package-form-inputs.md).

### 3) Flat layers

| Layer | Location |
|-------|----------|
| Dumps | `src/store/dumps/{entity}.ts` |
| Current | `src/store/current/{entity}.ts` |
| Builders | `src/store/builders/{feature}Builder.ts` |
| Config | `src/store/config/` |

Register each as a **top-level** key in `combineReducers`.

### 4) Navigation in thunks

Opening detail screens: set `current*`, then `navigateRoot(ROOT_ROUTES.*_DETAIL)` from `src/nav/root-navigation-ref.ts`. Not in reducers.

### 5) Zero selector functions

`useAppSelector((state) => state.<sliceKey>)` only — no transforms inside the callback. Derive with `useMemo` in components.

### 6) Logic-free reducers

Validation and branching live in thunks.

## Consequences

Same as nextjs-template ADR 001: explicit async flow, stable thunk status codes, predictable onboarding for Roads-style mobile apps.

## References

- [008 – Detail screen routing](./008-detail-screen-routing.md)
- [009 – React Navigation](./009-react-navigation.md)
