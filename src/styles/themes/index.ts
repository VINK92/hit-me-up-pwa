/* eslint-disable no-unused-vars */
import { Theme } from '@mui/material/styles';
import lightTheme from './light';
import mainTheme from './main';
import createBasicTheme from './createBasicTheme';

export enum THEME_NAMES {
  main = 'main',
  light = 'light',
}

export type THEMES = {
  [key in keyof typeof THEME_NAMES | string]: Theme;
};

const themes: THEMES = {
  [THEME_NAMES.main]: mainTheme,
  [THEME_NAMES.light]: lightTheme,
};

export { createBasicTheme };

export default themes;
