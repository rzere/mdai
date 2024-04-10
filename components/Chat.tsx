'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useChat } from 'ai/react';
import Link from 'next/link';

export default function Chat() {
const { data: session } = useSession();
const { messages, input, handleInputChange, handleSubmit } = useChat();

if (!session) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      {/* Header */}
      <header className="bg-[#0d1338] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Mindful Diabetes AI</h1>
            <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://mindfuldiabetes.org"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-1 flex max-w-fit items-center justify-center space-x-10 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            by Mindful Diabetes Inc.
          </p>
        </a>
        </div>
          </div>
          
          <button
          className="bg-white text-[#0d1338] px-4 py-2 rounded-md"
            onClick={() => {
              signIn("google");
            }}
          >   
              <>
                <p>Sign In with Google</p>
              </>
          </button>
        
        </div>
        </header>

        {/* Login Message */}
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <p className="text-2xl font-bold">Please log in to access mdAI.</p>
        </main>
        {/* Blog Link */}
        <div className="bg-[#0d1338] py-4 mt-auto text-center">
        <Link href="https://mindfuldiabetes.org/guide/#recent" className="text-white underline">
        For more information, visit our blog.
        </Link>
    </div>
        {/* Footer */}
        <footer className="bg-[#0d1338] py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
        <p className="text-white">2024 | Stoic.ist</p>
        </div>
    </footer>
    </div>
    );
}

return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    {/* Header */}
    <header className="bg-[#0d1338] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Mindful Diabetes AI</h1>
        <button
            className="bg-white text-[#0d1338] px-4 py-2 rounded-md"
            onClick={() => signOut()}
        >
            Logout
        </button>
        </div>
    </header>

    {/* Chat Container */}
    <main className="flex justify-center items-center w-full h-screen bg-gray-50">
  <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full mx-4">
    {messages.length > 0 ? (
      <div className="space-y-4 mb-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-lg ${
              m.role === 'user' ? 'bg-blue-100' : 'bg-green-100'
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

    <form onSubmit={handleSubmit} className="flex w-full mt-4">
      <input
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={input}
        placeholder="Type your message..."
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
  </div>
    </main>
            {/* Blog Link */}
        <div className="bg-[#0d1338] py-4 mt-auto text-center">
        <Link href="https://mindfuldiabetes.org/guide/#recent" className="text-white underline">
        For more information, visit our blog.
        </Link>
    </div>
            {/* Footer */}
            <footer className="bg-[#0d1338] py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
        <p className="text-white">2024 | Stoic.ist</p>
        </div>
    </footer>
    </div>
);
}