import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { EMPTY_ITEM, type Item } from '@/src/model';

const currentItemSlice = createSlice({
  name: 'currentItem',
  initialState: EMPTY_ITEM,
  reducers: {
    setCurrentItem: (_state, action: PayloadAction<Item>) => action.payload,
    patchCurrentItem: (state, action: PayloadAction<Partial<Item>>) => ({
      ...state,
      ...action.payload,
    }),
    resetCurrentItem: () => EMPTY_ITEM,
  },
});

export const CurrentItemActions = currentItemSlice.actions;
export default currentItemSlice.reducer;
