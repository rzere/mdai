'use client';

import { useSession } from 'next-auth/react';
import { useChat } from 'ai/react';
import LoginButton from '../components/LoginButton';

export default function Page() {
  const { data: session } = useSession();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

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
          {messages.length > 0 ? (
            <div className="space-y-4 mb-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-4 rounded-lg ${
                    m.role === 'user' ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}
                >
                  <span className="font-semibold">
                    {m.role === 'user' ? 'You: ' : 'Mindful Diabetes AI: '}
                  </span>
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Ask me about Type 3 diabetes...
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex">
            <input
              className="flex-grow p-2 border border-gray-300 rounded-l"
              value={input}
              placeholder="Type your message..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}