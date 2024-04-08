import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import pool from '@/lib/db';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Add user data to the session object
      session.user = user;
      return session;
    },
    async signIn({ user }) {
      // Create or update a user record in the database
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const { rows } = await client.query(
          'INSERT INTO "User" (email, name, image) VALUES ($1, $2, $3) ON CONFLICT (email) DO UPDATE SET name = $2, image = $3 RETURNING id',
          [user.email, user.name, user.image]
        );
        const userId = rows[0].id;
        await client.query('COMMIT');
        user.id = userId;
        return true;
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }
    },
  },
});