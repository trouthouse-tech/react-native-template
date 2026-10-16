# 009 - React Navigation (no Expo Router)

## Status

Accepted

## Forbidden

- `expo-router`, `app/_layout.tsx`, `useLocalSearchParams`, `Link` from `expo-router`

## Required stack

1. `index.ts` → `App.tsx` → `RootNavigator` (`src/nav/index.tsx`)
2. `NavigationContainer` with `ref={rootNavigationRef}`
3. Native stack: auth screens, `MAIN` (tabs), root-level detail screens
4. `createBottomTabNavigator` under `ROOT_ROUTES.MAIN`

## Types

- `ROOT_ROUTES` enum + `RootStackParamList` keyed by enum
- `MAIN_ROUTES` enum for tabs

## Imperative navigation

- `rootNavigationRef` + `navigateRoot(name)` for thunks
- `useRootNavigation()` — walks `getParent()` to reach root stack from inside tabs

## Bootstrap

`auth/loading` dispatches `bootstrapAppSessionThunk`, then `navigation.reset` in a `useEffect` when `currentAuthSession.isHydrated` and `currentOnboarding.isLoaded` are true (do not navigate inside the thunk on cold start).

Interactive auth screens use `navigation.navigate` between `AUTH_*` routes.

## Headers

Default `headerShown: false` for auth and main tabs; detail may use in-package header or stack header.

## References

- Roads: `roads-buyer-mobile/src/nav/`
