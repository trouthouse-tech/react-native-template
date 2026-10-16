import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthSessionState = {
  isHydrated: boolean;
  isAuthenticated: boolean;
  userId: string;
  email: string;
};

const initialState: AuthSessionState = {
  isHydrated: false,
  isAuthenticated: false,
  userId: '',
  email: '',
};

const currentAuthSessionSlice = createSlice({
  name: 'currentAuthSession',
  initialState,
  reducers: {
    setIsHydrated: (state, action: PayloadAction<boolean>) => {
      state.isHydrated = action.payload;
    },
    setSession: (
      state,
      action: PayloadAction<{ userId: string; email: string } | null>,
    ) => {
      const session = action.payload;
      state.isAuthenticated = !!session;
      state.userId = session?.userId ?? '';
      state.email = session?.email ?? '';
    },
    reset: () => initialState,
  },
});

export const CurrentAuthSessionActions = currentAuthSessionSlice.actions;
export default currentAuthSessionSlice.reducer;
