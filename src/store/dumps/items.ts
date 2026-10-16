import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Item } from '@/src/model';

type ItemsState = Record<string, Item>;

const initialState: ItemsState = {};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    upsertItems: (state, action: PayloadAction<Item[]>) => {
      for (const item of action.payload) {
        state[item.id] = item;
      }
    },
    resetItems: () => initialState,
  },
});

export const ItemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
