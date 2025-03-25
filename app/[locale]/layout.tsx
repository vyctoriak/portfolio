import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { getTranslations } from "@/lib/i18n/server"
import { LanguageProvider } from "@/lib/i18n/client"
import type { Locale } from "@/lib/i18n/types"
// import { ThemeProviderWrapper } from "@/components/providers/theme-provider-wrapper"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vyctoria Karina | Software Developer",
  description: "Portfolio of Vyctoria Karina, Software Developer",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;
  const translations = await getTranslations(locale);

  return (
    <LanguageProvider locale={locale} translations={translations}>
      {children}
      <Toaster />
    </LanguageProvider>
  );
}

