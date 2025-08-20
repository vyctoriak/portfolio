import { translations } from './translations';
import { locales } from '@/middleware';
import type { Locale } from '@/lib/i18n/types';

export async function getTranslations(locale: Locale) {
  if (locale in translations) {
    return translations[locale as keyof typeof translations];
  }

  // Fallback to English if locale not found
  return translations.en;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const localeSegment = segments[1];

  if (localeSegment && locales.includes(localeSegment as Locale)) {
    return localeSegment as Locale;
  }

  return 'en';
}
