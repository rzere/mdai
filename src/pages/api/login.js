// pages/api/login.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Insert or update the user's login information in the User table
      await sql`INSERT INTO "User" (username, login_time) VALUES (${email}, NOW()) ON CONFLICT (username) DO UPDATE SET login_time = NOW();`;

      res.status(200).json({ message: 'Login logged successfully' });
    } catch (error) {
      console.error('Error logging login:', error);
      res.status(500).json({ error: 'Error logging login' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}