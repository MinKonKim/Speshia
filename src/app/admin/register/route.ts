import { NextResponse } from 'next/server'
import axios from 'axios'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { AdminInsertDto, insertAdmin } from '@/modules/admin'

// TODO: 실제 DB 연결 로직 (예: Prisma, Supabase) 추가 필요
// import { db } from '@/lib/db'

export async function POST(req: Request): ApiResponsePromise<ApiDefault> {
  try {
    const { businessNumber, userId } = await req.json()

    // 국세청 사업자 진위 확인 API 요청
    // const validateRes = await axios.post(
    //   `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${process.env.NTS_API_KEY}&returnType=JSON`,
    //   {
    //     b_no: [businessNumber],
    //   },
    //   {
    //     headers: { 'Content-Type': 'application/json' },
    //   }
    // )

    // const result = validateRes.data.data[0]

    // if (result.b_stt === '계속사업자') {
    //   // DB에 admin 생성 (예: Prisma)
    //   // await db.admin.create({
    //   //   data: { userId, businessNumber, verified: true },
    //   // })
    //   //TODO : db에 어드민 정보 저장하는 로직 생성

    //   return NextResponse.json({ success: true, message: '사업자 등록 완료!' })
    // } else {
    //   return NextResponse.json(
    //     { success: false, message: '유효하지 않은 사업자등록번호입니다.' },
    //     { status: 400 }
    //   )
    // }
    const adminData: AdminInsertDto = {
      user_id: userId,
      business_number: businessNumber,
    }
    const res = await insertAdmin(adminData)

    if (res.error) {
      return NextResponse.json({ message: res.statusText }, { status: res.status })
    }

    return NextResponse.json(
      {
        message: ' 관리자 등록을 완료했습니다.',
      },
      { status: res.status }
    )
  } catch (error) {
    console.error('사업자 등록 오류:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
