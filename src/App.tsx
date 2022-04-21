import React from 'react';
import './localization';
import MainNavigation from 'navigation';
import ThemeProvider from 'styles/themes/context/ThemeProvider';
import { THEME_NAMES } from 'styles/themes';

function App() {
  return (
    <ThemeProvider defaultTheme={THEME_NAMES.main}>
      <MainNavigation />
    </ThemeProvider>
  );
}

export default App;
