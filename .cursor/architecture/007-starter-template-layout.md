# 007 - Starter Template Layout (React Native)

## Status

Accepted

## Shipped layout (day one)

```text
App.tsx                    # SafeAreaProvider, Redux Provider, RootNavigator
src/nav/                   # root stack + tabs
src/packages/auth/         # loading, landing, signin, signup, forgot-password, onboarding
src/packages/home/         # tab 1
src/packages/settings/     # tab 2
src/packages/item-detail-page/
src/store/                 # dumps, current, builders, config, thunks
src/api/_shared/           # requestApi stub
src/model/item.ts          # example entity
src/theme/
```

## Growth path

| Step | Add |
|------|-----|
| Catalog data | `src/store/dumps/{entity}.ts` |
| Detail screen | `src/store/current/{entity}.ts` + `ROOT_ROUTES.*_DETAIL` |
| UI flags | `src/store/builders/{feature}Builder.ts` |
| HTTP | `src/api/{domain}/` + thunks |

## Tooling

- `npm run lint` — `eslint-config-expo`
- Entry: `index.ts` registers `App` via `expo`

## References

- [001 – Redux patterns](./001-redux-patterns.md)
- express-server-template for backend pairing
