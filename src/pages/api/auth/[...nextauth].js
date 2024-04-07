import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import prisma from '@/lib/prisma'; // Import the existing Prisma instance

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default NextAuth({
  adapter: PrismaAdapter(prisma), // Use the imported Prisma instance
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});



const prisma = global.prisma || new PrismaClient();