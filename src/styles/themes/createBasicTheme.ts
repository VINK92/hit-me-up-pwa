import React from 'react';
import { createTheme, ThemeOptions, Theme, css } from '@mui/material/styles';
import MalloryMPBook from '../../assets/fonts/MalloryMP/Mallory-MP-Book.ttf';
import MalloryMPBookItalic from '../../assets/fonts/MalloryMP/Mallory-MP-Book-Italic.ttf';
import MalloryMPMedium from '../../assets/fonts/MalloryMP/Mallory-MP-Medium.ttf';
import MalloryMPMediumItalic from '../../assets/fonts/MalloryMP/Mallory-MP-Medium-Italic.ttf';

declare module '@mui/material/styles' {
  interface Palette {
    gradients?: {
      primary: string;
      primaryDisabled: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary: string;
    };
  }
  interface PaletteColor {
    light2?: string;
  }
  interface SimplePaletteColorOptions {
    light2?: string;
  }
  interface Theme {
    customShadows?: {
      primary: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      primary: string;
    };
  }
  interface TypographyVariants {
    bodyDefaultBook: React.CSSProperties;
    bodyDefaultMedium: React.CSSProperties;
    bodySmallBook: React.CSSProperties;
    bodySmallMedium: React.CSSProperties;
    subtitleBook: React.CSSProperties;
    subtitleMedium: React.CSSProperties;
    captionMedium: React.CSSProperties;
    overlineDefaultMedium: React.CSSProperties;
    overlineSmallMedium: React.CSSProperties;
    buttonSmall: React.CSSProperties;
    buttonMedium: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    bodyDefaultMediumUnderline: React.CSSProperties;
    bodySmallMediumUnderline: React.CSSProperties;
    logoUnderline: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyDefaultBook?: React.CSSProperties;
    bodyDefaultMedium?: React.CSSProperties;
    bodySmallBook?: React.CSSProperties;
    bodySmallMedium?: React.CSSProperties;
    subtitleBook?: React.CSSProperties;
    subtitleMedium?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
    overlineDefaultMedium?: React.CSSProperties;
    overlineSmallMedium?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
    buttonMedium?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    bodyDefaultMediumUnderline?: React.CSSProperties;
    bodySmallMediumUnderline?: React.CSSProperties;
    logoUnderline?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
    bodyDefaultBook: true;
    bodyDefaultMedium: true;
    bodySmallBook: true;
    bodySmallMedium: true;
    subtitleBook: true;
    subtitleMedium: true;
    captionMedium: true;
    overlineDefaultMedium: true;
    overlineSmallMedium: true;
    buttonSmall: true;
    buttonMedium: true;
    buttonLarge: true;
    bodyDefaultMediumUnderline: true;
    bodySmallMediumUnderline: true;
    logoUnderline: true;
  }
}

const createBasicTheme = (options: ThemeOptions): Theme =>
  createTheme({
    components: {
      // @ts-ignore
      MuiCssBaseline: {
        styleOverrides: css`
          @font-face {
            font-family: 'MalloryMPBook';
            font-weight: 400;
            font-style: normal;
            src: url(${MalloryMPBook});
          }
          @font-face {
            font-family: 'MalloryMPBookItalic';
            font-weight: 400;
            font-style: italic;
            src: url(${MalloryMPBookItalic});
          }
          @font-face {
            font-family: 'MalloryMPMedium';
            font-weight: 400;
            font-style: normal;
            src: url(${MalloryMPMedium});
          }
          @font-face {
            font-family: 'MalloryMPMediumItalic';
            font-weight: 400;
            font-style: italic;
            src: url(${MalloryMPMediumItalic});
          }
          *:focus {
            outline: none;
          }
        `,
      },
    },
    ...options,
  });

export default createBasicTheme;
