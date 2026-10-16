# 008 - Detail screen routing (Redux `current*`, no route params)

## Status

Accepted

## Context

Entity identity must not live in React Navigation `route.params` (no `itemId: string` on the stack). Mirrors nextjs-template static detail pages; mobile uses a **fixed** root stack screen name.

## Forbidden

```ts
// RootStackParamList
ITEM_DETAIL: { itemId: string }; // ❌
```

Reading `route.params.itemId` in the detail package. ❌

## Required

```ts
export enum ROOT_ROUTES {
  ITEM_DETAIL = 'ITEM_DETAIL',
}

export type RootStackParamList = {
  [ROOT_ROUTES.ITEM_DETAIL]: undefined;
};
```

### Open flow

1. Thunk loads or reads row from `dumps`.
2. `dispatch(CurrentItemActions.setCurrentItem(row))`.
3. `navigateRoot(ROOT_ROUTES.ITEM_DETAIL)`.

Detail package: `useAppSelector((state) => state.currentItem)` only.

`src/nav/root-screens.tsx` wraps the package and shows empty state when `currentItem.id === ''`.

## References

- [009 – React Navigation](./009-react-navigation.md)
- [001 – Redux patterns](./001-redux-patterns.md)
