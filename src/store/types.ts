import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';

import { store } from './store';
import type { RootState } from './reducer';

export type { RootState };
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, UnknownAction>;
