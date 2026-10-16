export enum MAIN_ROUTES {
  HOME = 'HOME',
  SETTINGS = 'SETTINGS',
}

export type MainTabParamList = {
  [MAIN_ROUTES.HOME]: undefined;
  [MAIN_ROUTES.SETTINGS]: undefined;
};
