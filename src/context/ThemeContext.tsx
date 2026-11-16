import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    try {
      localStorage.removeItem('gm_theme');
      localStorage.removeItem('gm_v2_theme');
    } catch {
      // storage unavailable
    }

    const root = document.documentElement;
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
    root.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Locked to dark theme as requested
    setThemeState('dark');
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
