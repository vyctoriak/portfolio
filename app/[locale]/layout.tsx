import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getTranslations } from '@/lib/i18n/server';
import { LanguageProvider } from '@/lib/i18n/client';
import type { Locale } from '@/lib/i18n/types';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from '@/components/providers/theme-provider-wrapper';
import { ErrorBoundary } from '@/components/error-boundary';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vyctoria Karina | Software Developer',
  description: 'Portfolio of Vyctoria Karina, Software Developer',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const translations = await getTranslations(locale);

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-background" suppressHydrationWarning>
        <LanguageProvider locale={locale} translations={translations}>
          <ThemeProviderWrapper
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <ErrorBoundary>{children}</ErrorBoundary>
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </ThemeProviderWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
