// Note: This is a custom implementation inspired by next-themes, as direct package additions are restricted.
'use client';

import * as React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | undefined>(undefined);

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    try {
      return localStorage.getItem('theme') || defaultTheme;
    } catch (e) {
      return defaultTheme;
    }
  });

  const applyTheme = React.useCallback((themeValue: string) => {
    let newTheme = themeValue;
    if (newTheme === 'system' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      newTheme = systemTheme;
    }

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
  }, [enableSystem]);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  React.useEffect(() => {
    if (!enableSystem || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystem, theme, applyTheme]);

  const setTheme = (newTheme: string) => {
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // Ignore
    }
    setThemeState(newTheme);
  };

  const providerValue = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
