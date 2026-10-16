import AsyncStorage from '@react-native-async-storage/async-storage';

import { appConfig } from '@/src/store/config/app-config';

export type StoredSession = {
  userId: string;
  email: string;
  onboardingComplete: boolean;
};

/**
 * Reads persisted mock session from device storage.
 */
export const readStoredSession = async (): Promise<StoredSession | null> => {
  const raw = await AsyncStorage.getItem(appConfig.sessionStorageKey);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as StoredSession;
  } catch {
    return null;
  }
};

/**
 * Persists mock session for template bootstrap.
 */
export const writeStoredSession = async (session: StoredSession): Promise<void> => {
  await AsyncStorage.setItem(appConfig.sessionStorageKey, JSON.stringify(session));
};

/**
 * Clears persisted session.
 */
export const clearStoredSession = async (): Promise<void> => {
  await AsyncStorage.removeItem(appConfig.sessionStorageKey);
};
