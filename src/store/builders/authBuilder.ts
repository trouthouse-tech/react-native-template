import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AuthBuilderState = {
  signInError: string;
  status: 'idle' | 'submitting';
};

const initialState: AuthBuilderState = {
  signInError: '',
  status: 'idle',
};

const authBuilderSlice = createSlice({
  name: 'authBuilder',
  initialState,
  reducers: {
    setSignInError: (state, action: PayloadAction<string>) => {
      state.signInError = action.payload;
    },
    setStatus: (state, action: PayloadAction<AuthBuilderState['status']>) => {
      state.status = action.payload;
    },
    reset: () => initialState,
  },
});

export const AuthBuilderActions = authBuilderSlice.actions;
export default authBuilderSlice.reducer;
