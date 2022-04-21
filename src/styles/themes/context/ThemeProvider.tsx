import React, { createContext, useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import defaultThemes, { THEMES, THEME_NAMES } from '..';
import { ThemeContextValue } from './ThemeContext';

export const ThemeContext = createContext({});

type ThemeProviderProps = {
  themes?: THEMES;
  defaultTheme: keyof typeof THEME_NAMES | string;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ themes = {}, defaultTheme, children }) => {
  const [themeName, setThemeName] = useState(defaultTheme);
  const value: ThemeContextValue = useMemo(() => [themeName, setThemeName], [themeName]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={themes[themeName] || defaultThemes[themeName]}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  themes: {},
};

export default ThemeProvider;
