import { combineReducers } from '@reduxjs/toolkit';

import app from './config/appSlice';
import items from './dumps/items';
import currentAuthSession from './current/auth-session';
import currentOnboarding from './current/onboarding';
import currentItem from './current/item';
import authBuilder from './builders/authBuilder';

const rootReducer = combineReducers({
  app,
  items,
  currentAuthSession,
  currentOnboarding,
  currentItem,
  authBuilder,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
