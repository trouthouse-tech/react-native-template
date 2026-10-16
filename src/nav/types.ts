/**
 * Root navigation types (React Navigation — no Expo Router).
 * Detail screens take no params; use Redux current* slices.
 */

export enum ROOT_ROUTES {
  LOADING = 'LOADING',
  AUTH_LANDING = 'AUTH_LANDING',
  AUTH_SIGNIN = 'AUTH_SIGNIN',
  AUTH_SIGNUP = 'AUTH_SIGNUP',
  AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD',
  ONBOARDING = 'ONBOARDING',
  MAIN = 'MAIN',
  ITEM_DETAIL = 'ITEM_DETAIL',
}

export type RootStackParamList = {
  [ROOT_ROUTES.LOADING]: undefined;
  [ROOT_ROUTES.AUTH_LANDING]: undefined;
  [ROOT_ROUTES.AUTH_SIGNIN]: undefined;
  [ROOT_ROUTES.AUTH_SIGNUP]: undefined;
  [ROOT_ROUTES.AUTH_FORGOT_PASSWORD]: undefined;
  [ROOT_ROUTES.ONBOARDING]: undefined;
  [ROOT_ROUTES.MAIN]: undefined;
  [ROOT_ROUTES.ITEM_DETAIL]: undefined;
};
