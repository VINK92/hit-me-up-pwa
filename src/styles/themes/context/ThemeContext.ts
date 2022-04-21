import React, { useContext } from 'react';
import { THEME_NAMES } from '..';

type SetThemeFunction = (v: keyof typeof THEME_NAMES | string) => void;
export type ThemeContextValue = [keyof typeof THEME_NAMES | string, SetThemeFunction];

const ThemeContext = React.createContext<ThemeContextValue>(['main', () => {}]);

const useThemeContext = (): ThemeContextValue => useContext(ThemeContext);

export { ThemeContext };
export default useThemeContext;
