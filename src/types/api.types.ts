import { PostgrestResponse } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export type ApiResponse<T> = {
  data: T // The data returned from the API
  status: number // HTTP status code of the response
  error?: string // Optional error message if the request failed
  total?: number // Optional total count for paginated responses
}

export type ApiDefault = {
  message: string
}

export type ApiResponsePromise<T> = Promise<NextResponse<T | ApiDefault>>

export type SupabaseResponse<T> = Promise<PostgrestResponse<T>>
