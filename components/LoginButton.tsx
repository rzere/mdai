'use client';

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      className="bg-white text-indigo-600 px-4 py-2 rounded-md"
      onClick={() => signIn('google')}
    >
      Login
    </button>
  );
}