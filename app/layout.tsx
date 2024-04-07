import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from '../components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mindful Diabetes AI',
  description: 'Your Mindful Diabetes Education Companion',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}