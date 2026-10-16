import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type OnboardingState = {
  isLoaded: boolean;
  isComplete: boolean;
};

const initialState: OnboardingState = {
  isLoaded: false,
  isComplete: false,
};

const currentOnboardingSlice = createSlice({
  name: 'currentOnboarding',
  initialState,
  reducers: {
    setOnboardingLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setOnboardingComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    reset: () => initialState,
  },
});

export const CurrentOnboardingActions = currentOnboardingSlice.actions;
export default currentOnboardingSlice.reducer;
