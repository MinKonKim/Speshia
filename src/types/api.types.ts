export type ApiResponse<T> = {
  data: T // The data returned from the API
  status: number // HTTP status code of the response
  error?: string // Optional error message if the request failed
  total?: number // Optional total count for paginated responses
}
export type ApiResponsePromise<T> = Promise<ApiResponse<T>>

export type ApiDefault = {
  message: string
}
