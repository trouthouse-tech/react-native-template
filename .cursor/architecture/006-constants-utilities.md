# 006 - Constants & Utilities (React Native)

## Status

Accepted

## Context

Same rules as nextjs-template ADR 006: `src/utils/{capability}/` only (`date/`, `string/`, `number/`). No `src/utils/orders/` or entity-specific formatters.

Entity-specific display logic lives in `src/packages/{feature}/`.

Utilities must be pure: no Redux, no hooks, no `fetch`.

## References

- nextjs-template ADR 006 for examples (replace web table rows with `FlatList` row components in packages).
