import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createClient } from './supabase'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const supabase = await createClient()
