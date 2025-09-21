import dbConnect from '@/lib/mongoose';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth';




interface Credentials {
  email: string;
  password: string;
}

const nextAuthOptions: NextAuthOptions = {


  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          return null;
        }
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (user && user.password && bcrypt.compareSync(credentials.password, user.password)) {
          return user
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  }
}

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };