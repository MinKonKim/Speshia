import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import { userApi } from './api/user-api'
import { transforomToProviderEnum } from './utils'

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.provider = account.provider
      }
      try {
        console.log('user', user) // TODO: 어딘지는 모르겠는데, user가 undefined가 되는 경우가 있음
        await userApi.createUser({
          name: user?.name || '',
          email: user?.email || '',
          provider: transforomToProviderEnum(token.provider),
        })
      } catch (error) {
        console.error('DB에 저장 실패: ', error)
      }
      return token
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.user.accessToken = token.accessToken
        session.user.provider = token.provider
        session.user.id = token.userId as string
      }
      return session
    },
  },
}
