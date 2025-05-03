import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProviderWrapper } from '@/components/providers/theme-provider-wrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-background" suppressHydrationWarning>
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
