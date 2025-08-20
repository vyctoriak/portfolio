'use client';

import type React from 'react';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n/types';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: Record<string, any>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  locale,
  translations,
}: {
  children: React.ReactNode;
  locale: Locale;
  translations: Record<string, any>;
}) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [currentTranslations, setCurrentTranslations] = useState<Record<string, any>>(translations);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentLocale(locale);
    setCurrentTranslations(translations);
  }, [locale, translations]);

  const setLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    const pathWithoutLocale = pathname.replace(/^\/(en|pt-br)/, '');

    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = currentTranslations;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale: currentLocale,
        setLocale,
        t,
        translations: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
