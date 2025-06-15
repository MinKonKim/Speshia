'use client'

import { MainHeader } from './header'

export const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <div className="bg-primary bg-primary-500 h-2.5 w-full">
        {/* TODO: 공통 스타일링 추가 */}
        <h1 className="title">페이지 타이틀</h1>
        <h2 className="text-headline">섹션 제목</h2>
        <h3 className="text-title">모달 제목</h3>
        <p className="text-body">이건 일반 본문 텍스트입니다.</p>
        <span className="text-caption text-gray5">태그 설명</span>
      </div>
    </div>
  )
}
