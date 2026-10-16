# 012 – Package form inputs (React Native)

## Status

Accepted

## Context

Same rules as nextjs-template ADR 012; RN uses `TextInput`, `Pressable`, and `Modal` instead of HTML inputs.

## Decision

1. `src/packages/{feature}/{form}/inputs/{field}/index.tsx` — one field reads whole `current*` slice, writes via `patchCurrent*`.
2. Form shell dispatches `saveXThunk()` with no arguments.
3. Modals take no props; visibility from builder + `current.id`.
4. Lists: `FlatList` + `row/index.tsx` (not HTML tables).
5. Use `KeyboardAvoidingView` in form shells when needed.

## Related

- [001 – Redux patterns](./001-redux-patterns.md)
