<p align="center">
  <a href="https://trouthousetech.com" title="TroutHouseTech — visit trouthousetech.com">
    <img src="./docs/trouthousetech-logo.png" alt="TroutHouseTech logo" width="72" height="72" />
  </a>
</p>

<p align="center">
  <strong>Sponsored by <a href="https://trouthousetech.com">TroutHouseTech</a></strong><br />
  <sub>Open-source starter from the TroutHouseTech team. Learn more at <a href="https://trouthousetech.com">trouthousetech.com</a>.</sub>
</p>

---

# tht-react-native-template

Expo + **React Native** starter that uses **React Navigation** (no Expo Router), **Redux Toolkit**, and **typed `react-redux` hooks**—aligned with the TroutHouseTech / Roads mobile pattern (`App.tsx` → `RootNavigator`, `src/store`, `src/nav`, `src/packages/*`).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) via `npx` (no global install required)
- For device builds: [Xcode](https://developer.apple.com/xcode/) (iOS) and/or [Android Studio](https://developer.android.com/studio) (Android)

## Get started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm start
   ```

   Or: `npx expo start`

3. **Open the app** from the terminal UI: iOS simulator, Android emulator, Expo Go, or a [development build](https://docs.expo.dev/develop/development-builds/introduction/).

## Project layout

| Path | Role |
| --- | --- |
| `index.ts` | Registers the root component; imports `react-native-gesture-handler` first. |
| `App.tsx` | `SafeAreaProvider`, Redux `Provider`, `StatusBar`, `RootNavigator`. |
| `src/nav/` | `NavigationContainer`, native stack, route enums / param lists. |
| `src/store/` | `configureStore`, `app` slice, `useAppDispatch` / `useAppSelector`. |
| `src/packages/` | Feature screens and UI (e.g. `home`). |

## Redux

Global UI and bootstrap flags live in **`src/store/appSlice.ts`**. Add slices in `src/store/`, register them in **`src/store/reducer.ts`**, and use **`AppThunk`** from **`src/store/types.ts`** for async logic (same idea as other TroutHouseTech apps).

## Path aliases

Imports use **`@/*`** from repo root (see `tsconfig.json`), e.g. `@/src/store`, `@/src/nav`.

## Brand asset in this repo

The README hero logo is **`docs/trouthousetech-logo.png`** (512×512 PNG, sourced from the TroutHouseTech web app asset). Replace or update that file if the brand mark changes.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
