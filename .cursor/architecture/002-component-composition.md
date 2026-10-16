# 002 - Component Composition (React Native)

## Status

Accepted

## Context

Feature UI, navigation wiring, and shared components for **tht-react-native-template**.

## Decision

### 1) Nav files are thin wrappers

`src/nav/index.tsx` and `src/nav/tabs/index.tsx` only register screens and `screenOptions`. No business logic, no API calls.

`src/nav/root-screens.tsx` may read Redux and render a package (adapter pattern from Roads buyer mobile).

### 2) Feature code in `src/packages/{feature}/`

Same package layout as nextjs-template ADR 002 (`table/row/`, `inputs/`, zero-prop modals). See [012](./012-package-form-inputs.md).

### 3) Shared UI in `src/components/`

Cross-feature only.

### 4) Dispatch thunks directly

No custom hooks that only wrap thunks.

### 5) Package entry

`index.tsx` with `export const FeatureName` for tab screens. **Default export** is allowed for screens registered in React Navigation (`LoadingScreen`, etc.).

### 6) Detail screens

Use root stack route + `current*` — not `route.params`. See [008](./008-detail-screen-routing.md).

### 7) `export const` and `type` for props

Prefer named exports for presentational components; use `type` not `interface`.

### 8) JSDoc

Required on thunks, API functions, and default-exported screen components.

## Consequences

Predictable ownership: nav vs packages vs components.
