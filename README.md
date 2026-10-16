<p align="center">
  <a href="https://trouthousetech.com" title="TroutHouseTech — visit trouthousetech.com">
    <img src="./docs/trouthousetech-logo.png" alt="TroutHouseTech logo" width="72" height="72" />
  </a>
</p>

<p align="center">
  <strong>Sponsored by <a href="https://trouthousetech.com">TroutHouseTech</a></strong><br />
  <sub>Open-source starter from the TroutHouseTech team.</sub>
</p>

---

# tht-react-native-template

Expo + **React Native** starter aligned with **nextjs-template** ADRs and **Roads** mobile navigation:

- **React Navigation** (native stack + bottom tabs) — **no Expo Router**
- **Redux Toolkit** with flat `dumps/` / `current/` / `builders/` / `thunks/`
- **Auth shell** (loading → landing → sign-in → onboarding) + **2 tabs** + sample **detail** screen via `currentItem`

Architecture: [`.cursor/architecture/README.md`](./.cursor/architecture/README.md)  
Agent rules: [`.cursor/rules/AGENTS.md`](./.cursor/rules/AGENTS.md)

Related templates:

- [nextjs-template](https://github.com) — ADRs **010** (Server Component Express reads) and **014** (Stripe Checkout return) live there only
- **express-server-template** — pair with `EXPO_PUBLIC_API_URL` when adding a backend

## Prerequisites

- Node.js LTS
- `npx expo` (no global install required)
- Xcode / Android Studio for simulators

## Get started

```bash
npm install
npm start
```

Copy `.env.example` to `.env` when wiring an API.

## Mock auth

- **Sign in** with any non-empty email + password.
- Email containing `onboarded` skips the onboarding screen (e.g. `you@onboarded.dev`).
- **Sign out** from the Settings tab.

## Project layout

| Path | Role |
| --- | --- |
| `index.ts` | Registers root; imports `react-native-gesture-handler` first |
| `App.tsx` | `SafeAreaProvider`, Redux `Provider`, `RootNavigator` |
| `src/nav/` | `NavigationContainer`, auth stack, tabs, `root-screens`, `navigateRoot` |
| `src/packages/` | Feature screens (`auth/`, `home/`, `settings/`, `item-detail-page/`) |
| `src/store/` | Redux layers + thunks |
| `src/api/` | `requestApi` + `EXPO_PUBLIC_API_URL` |
| `src/model/` | Persisted entity types |
| `src/theme/` | Shared colors |

## Path aliases

`@/*` maps to the repo root (`tsconfig.json`).

## Learn more

- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
