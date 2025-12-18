'use client';

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type ThemeColor = 'default' | 'green' | 'orange';

interface ThemeContextType {
  themeColor: ThemeColor;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const getThemeColor = (path: string): ThemeColor => {
    if (path.includes('/drum-and-bass') || path.includes('/resident-1')) {
      return 'green';
    }
    if (path.includes('/techno') || path.includes('/resident-2')) {
      return 'orange';
    }
    return 'default';
  };

  const themeColor = getThemeColor(pathname);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-default', 'theme-green', 'theme-orange');
    root.classList.add(`theme-${themeColor}`);
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{ themeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
