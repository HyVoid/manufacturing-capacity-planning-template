import type {Metadata} from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Labor Economics & Capacity Planning Engine',
  description: 'A professional and dynamic labor economics and capacity planning engine for manufacturing operations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen bg-[#F5F5F2] text-[#1A1A2E] selection:bg-[#2251FF]/20">
        {children}
      </body>
    </html>
  );
}
