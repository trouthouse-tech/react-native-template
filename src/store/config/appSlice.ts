import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  isReady: boolean;
  tapCount: number;
};

const initialState: AppState = {
  isReady: false,
  tapCount: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppReady: (state, action: PayloadAction<boolean>) => {
      state.isReady = action.payload;
    },
    incrementTapCount: (state) => {
      state.tapCount += 1;
    },
    resetTapCount: (state) => {
      state.tapCount = 0;
    },
  },
});

export const { setAppReady, incrementTapCount, resetTapCount } = appSlice.actions;
export default appSlice.reducer;
