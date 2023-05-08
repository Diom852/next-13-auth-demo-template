import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()
        const user = { id: '2', email: 'test', password: '123' }
        // If no error and we have user data, return it
        if (user.email && user) {
          
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    })
  ],
  pages: {
    signIn: '/'
  },
  session: {
    jwt: false,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {

    async session(session, user) {
      session.user = user;
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
