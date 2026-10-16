# Architecture Documentation

ADRs for **tht-react-native-template** and React Native apps created from it.

## ADR index

### Shared conventions (001–009, 011–012, 015)

1. [001 – Redux patterns](./001-redux-patterns.md) — Flat layers, manual thunks, zero selector functions.
2. [002 – Component composition](./002-component-composition.md) — Thin nav, `src/packages/`.
3. [003 – Styling rules](./003-styling-rules.md) — `StyleSheet.create` + `src/theme`.
4. [004 – API integration](./004-api-integration.md) — `src/api/`, thunks only.
5. [005 – File organization](./005-file-organization.md) — kebab-case, no Expo Router `app/`.
6. [006 – Constants and utilities](./006-constants-utilities.md) — Generic formatters only.
7. [007 – Starter template layout](./007-starter-template-layout.md) — Shipped folders and growth path.
8. [008 – Detail screen routing](./008-detail-screen-routing.md) — `ROOT_ROUTES.*_DETAIL`, no route params.
9. [009 – React Navigation](./009-react-navigation.md) — No Expo Router.
11. [011 – Domain models](./011-domain-models.md) — `src/model/{entity}.ts`.
12. [012 – Package form inputs](./012-package-form-inputs.md) — `inputs/{field}`, zero-prop modals.
15. [015 – No SQL functions](./015-no-sql-functions.md) — Client does not own schema.

### In nextjs-template only

- **010** — Public Express reads via Server Components.
- **014** — Stripe Checkout return page.

## How to use

1. Open the ADR for your feature.
2. Follow patterns exactly.
3. Add ADRs when architecture changes and update this index.
