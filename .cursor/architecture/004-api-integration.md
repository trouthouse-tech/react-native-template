# 004 - API Integration (React Native)

## Status

Accepted

## Objective

Mobile apps call **Express** (or other backends) directly from `src/api/`. There is no Next.js BFF in this template.

## Required rules

1. API functions live in `src/api/{domain}/` only (one operation per file on Roads apps).
2. Use `requestApi<T>` from `src/api/_shared/`; results are `ApiResult<T>` with `httpStatus`.
3. Components never call `src/api/**`; thunks only.
4. Thunks map failures with `mapApiFailureToThunkStatus` or explicit `httpStatus === 400`.
5. JSDoc on exported API functions and thunks.

## Layout

```text
src/
  api/
    config.ts              # getApiBaseUrl() from EXPO_PUBLIC_API_URL
    _shared/
      types.ts
      request-api.ts
      parse-api-json.ts
      map-api-failure-to-thunk-status.ts
    {domain}/
      get-by-id.ts
  store/thunks/
```

## Env

```bash
# .env — EXPO_PUBLIC_API_URL=https://your-api.example.com
```

## Consequences

Pair with **express-server-template** when adding a real backend. For Server Component / marketing fetch patterns see **nextjs-template** ADR 010 (not duplicated here).
