import { NextRequest } from 'next/server'
import { ApiResponsePromise } from '@/types'
import { getSpaceInfo, SpaceDto } from '@/modules/space'

/**
 * 특정 공간의 정보를 조회하는 API
 * @param _req
 * @param { params: { spaceId: string } }
 * @returns
 */
export const GET = async (
  _req: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<SpaceDto | undefined> => {
  const { spaceId } = params

  try {
    const spaceInfo = await getSpaceInfo(spaceId)

    // 데이터를 찾지 못한 경우 404 Not Found 반환
    if (!spaceInfo || !spaceInfo.data) {
      return {
        data: undefined,
        status: 404,
        error: `Space with ID '${spaceId}' not found.`,
      }
    }

    // 성공 시 200 OK 와 함께 데이터 반환
    return {
      data: spaceInfo.data,
      status: 200,
      total: 1,
    }
  } catch (error) {
    // 서버 에러 로깅
    console.error(`[API ERROR] Failed to get space ${spaceId}:`, error)

    // 서버 내부 오류 시 500 Internal Server Error 반환
    return {
      data: undefined,
      status: 500,
      error: error instanceof Error ? error.message : 'An unexpected error occurred.',
    }
  }
}

/**
 * 특정 공간의 정보를 생성(Create) 또는 전체 교체하는 API
 * @param req
 * @param { params: { spaceId: string } }
 * @returns
 */
export const PUT = async (
  req: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<SpaceDto | undefined> => {
  const { spaceId } = params

  try {
    const body = await req.json()
    // TODO: body에 대한 유효성 검사 (zod, joi 등 활용)

    // TODO: spaceId와 body를 사용하여 데이터베이스에 공간 정보를 생성하거나 전체 수정하는 로직 구현
    // const createdSpace = await createOrUpdateSpace(spaceId, body);

    // 성공 시 201 Created 또는 200 OK 와 함께 데이터 반환
    return {
      // data: createdSpace,
      data: undefined, // 임시
      status: 201,
    }
  } catch (error) {
    console.error(`[API ERROR] Failed to PUT space ${spaceId}:`, error)
    return {
      data: undefined,
      status: 500,
      error: error instanceof Error ? error.message : 'An unexpected error occurred.',
    }
  }
}

/**
 * 특정 공간의 정보를 일부 수정(Update)하는 API
 * @param req
 * @param { params: { spaceId: string } }
 * @returns
 */
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<SpaceDto | undefined> => {
  const { spaceId } = params

  try {
    // TODO: 먼저 해당 spaceId의 리소스가 존재하는지 확인 (getSpaceInfo 등 활용)
    // const existingSpace = await getSpaceInfo(spaceId);
    // if (!existingSpace || !existingSpace.data) {
    //   return {
    //     data: undefined,
    //     status: 404,
    //     error: `Space with ID '${spaceId}' not found.`,
    //   };
    // }

    const body = await req.json()
    // TODO: body에 대한 유효성 검사

    // TODO: spaceId와 body를 사용하여 데이터베이스에서 공간 정보를 수정하는 로직 구현
    // const updatedSpace = await updateSpace(spaceId, body);

    // 성공 시 200 OK 와 함께 데이터 반환
    return {
      // data: updatedSpace,
      data: undefined, // 임시
      status: 200,
    }
  } catch (error) {
    console.error(`[API ERROR] Failed to PATCH space ${spaceId}:`, error)
    return {
      data: undefined,
      status: 500,
      error: error instanceof Error ? error.message : 'An unexpected error occurred.',
    }
  }
}

/**
 * 특정 공간을 삭제(Delete)하는 API
 * @param _req
 * @param { params: { spaceId: string } }
 * @returns
 */
export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<undefined> => {
  const { spaceId } = params

  try {
    // TODO: 먼저 해당 spaceId의 리소스가 존재하는지 확인
    // const existingSpace = await getSpaceInfo(spaceId);
    // if (!existingSpace || !existingSpace.data) {
    //   return {
    //     data: undefined,
    //     status: 404,
    //     error: `Space with ID '${spaceId}' not found.`,
    //   };
    // }

    // TODO: spaceId를 사용하여 데이터베이스에서 공간 정보를 삭제하는 로직 구현
    // await deleteSpace(spaceId);

    // 성공 시 200 OK 또는 204 No Content 응답
    return {
      data: undefined,
      status: 200,
    }
  } catch (error) {
    console.error(`[API ERROR] Failed to DELETE space ${spaceId}:`, error)
    return {
      data: undefined,
      status: 500,
      error: error instanceof Error ? error.message : 'An unexpected error occurred.',
    }
  }
}
