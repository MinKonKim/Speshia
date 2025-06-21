import { getUser } from '@/modules/user'
import { NextResponse } from 'next/server'

export const GET = async (): Promise<NextResponse> => {
  try {
    const data = await getUser()
    const responsePayload = {
      data,
      status: 200,
      total: 1,
    }
    return NextResponse.json(responsePayload, {
      status: 200,
    })
  } catch (error) {
    console.error('Error fetching user:', error)
    const errorPayload = {
      data: null,
      status: 500,
      error: error,
    }
    return NextResponse.json(errorPayload, {
      status: 500,
    })
  }
}
