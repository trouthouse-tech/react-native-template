export { store } from './store';
export type { RootState } from './reducer';
export type { AppDispatch, AppThunk } from './types';
export { useAppDispatch, useAppSelector } from './hooks';
export { setAppReady, incrementTapCount, resetTapCount } from './appSlice';
