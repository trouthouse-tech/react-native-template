/**
 * Root stack routes (React Navigation — no Expo Router).
 */

export enum ROOT_ROUTES {
  HOME = 'HOME',
}

export type RootStackParamList = {
  [ROOT_ROUTES.HOME]: undefined;
};
