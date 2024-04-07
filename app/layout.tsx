import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mindful Diabetes AI',
  description: 'Your Mindful Diabetes Education Companion',
};

import Providers from '../components/Providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* ... */}
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}