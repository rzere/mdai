'use client';

import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';

export default function Chat() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-indigo-600 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Mindful Diabetes AI</h1>
            <p className="text-white">Your trusted companion for Type 3 Diabetes</p>
            <LoginButton />
          </div>
        </header>

        {/* Login Message */}
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <p className="text-gray-600">Please log in to access the chat.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Mindful Diabetes AI</h1>
          <p className="text-white">Your trusted companion for Type 3 Diabetes</p>
        </div>
      </header>

      {/* Chat Container */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <p className="text-center text-gray-500">
            Ask me about Type 3 diabetes...
          </p>
        </div>
      </main>
    </div>
  );
}