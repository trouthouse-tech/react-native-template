import type { ApiResponse } from './types';

/**
 * Reads and validates JSON from an HTTP response body.
 */
export const parseApiJson = async <T>(res: Response, url: string): Promise<ApiResponse<T>> => {
  const text = await res.text();

  if (!text.trim()) {
    return {
      success: false,
      error: `Empty response from ${url}`,
    };
  }

  try {
    const parsed = JSON.parse(text) as unknown;

    if (typeof parsed !== 'object' || parsed === null || !('success' in parsed)) {
      return {
        success: false,
        error: `Invalid API response shape from ${url}`,
      };
    }

    const body = parsed as ApiResponse<T>;

    if (!body.success) {
      return {
        success: false,
        error: body.error ?? body.message ?? 'Request failed',
      };
    }

    return body;
  } catch {
    return {
      success: false,
      error: `Non-JSON response from ${url}`,
    };
  }
};
