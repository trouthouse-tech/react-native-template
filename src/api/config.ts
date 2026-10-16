/**
 * Returns Express API base URL without trailing slash.
 */
export const getApiBaseUrl = (): string => {
  const raw = process.env.EXPO_PUBLIC_API_URL?.trim() ?? '';
  return raw.replace(/\/$/, '');
};
