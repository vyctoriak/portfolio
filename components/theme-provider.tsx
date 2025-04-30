'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
  attribute?: string;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  storageKey = 'theme',
  attribute = 'class',
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  const resolvedTheme = !mounted ? defaultTheme : theme;

  useEffect(() => {
    const root = window.document.documentElement;

    if (resolvedTheme === 'system' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      return;
    }

    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
  }, [resolvedTheme, enableSystem]);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem(storageKey) as Theme | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    } else if (enableSystem) {
      setThemeState('system');
    }
  }, [storageKey, enableSystem]);

  const setTheme = React.useCallback(
    (theme: Theme) => {
      setThemeState(theme);
      localStorage.setItem(storageKey, theme);
    },
    [storageKey]
  );

  const value = {
    theme: resolvedTheme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
