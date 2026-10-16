import { createNavigationContainerRef } from '@react-navigation/native';

import type { RootStackParamList } from './types';

export const rootNavigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Navigates on the root stack when the container is mounted and ready.
 */
export const navigateRoot = (name: keyof RootStackParamList): void => {
  if (!rootNavigationRef.isReady()) {
    return;
  }
  rootNavigationRef.navigate(name);
};
