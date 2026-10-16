export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
};

/** API response plus HTTP status from the wire (`0` = network failure). */
export type ApiResult<T> = ApiResponse<T> & { httpStatus: number };
