const colors = {
  primaryDefault: '#F99E9E',
  primaryDefaultDisabled: '#77AAAF',
  primaryDark: '#0B4D4D',
  primaryLight: '#87CCCC',
  primaryLight2: '#E7F2F2',
  primaryMostLighter: '#ECF5F5',

  secondaryDefault: '#703370',
  secondaryDark: '#4D194D',
  secondaryDarkDisabled: '#8C839B',
  secondaryLight: '#DBBDDB',
  secondaryLight2: '#F1EBF1',

  errorDefault: '#D43636',
  errorDark: '#A23030',
  errorLight: '#F99E9E',
  errorLight2: '#FBEBEB',

  warningDefault: '#F6851D',
  warningDark: '#D6530A',
  warningLight: '#F6CA92',
  warningLight2: '#FEF3E8',

  successDefault: '#00875A',
  successDark: '#006644',
  successLight: '#ABF5D1',
  successLight2: '#E5F3EE',

  infoDefault: '#0F56B3',
  infoDark: '#0A3977',
  infoLight: '#8AB9F6',
  infoLight2: '#E7EEF7',

  textPrimary: '#193f64',
  textSecondary: '#4f4f52',
  textDisabled: '#8D8D8D',

  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#FBFBFD',
  backgroundWhiteTransparent0: 'rgba(255, 255, 255, 0)',
  backgroundWhiteTransparent05: 'rgba(255, 255, 255, 0.5)',
  backgroundWhiteTransparent07: 'rgba(255, 255, 255, 0.07)',
  backgroundGrayTransparent008: 'rgba(225, 225, 225, 0.08)',
  backgroundGrayTransparent055: 'rgba(28, 28, 28, 0.55)',
  backgroundGrayTransparent1: 'rgba(28, 28, 28, 0.15)',
  backgroundGray700Transparent09: 'rgba(28, 28, 28, 0.9)',
  backgroundBlackTransparent008: 'rgba(0, 0, 0, 0.08)',

  grey700: '#1C1C1C',
  grey600: '#707070',
  grey500: '#8D8D8D',
  grey400: '#BABABA',
  grey300: '#DEDEDE',
  grey200: '#E8E8E8',
  grey100: '#F4F4F4',
  grey50: '#F7F7F7',

  transparent: 'transparent',
};

const gradients = {
  primary: `linear-gradient(135deg, ${colors.warningLight}, ${colors.secondaryLight})`,
  primaryDisabled: `linear-gradient(90deg, ${colors.textPrimary}, ${colors.textDisabled})`,
};

const shadows = {
  primary: '0px 4px 8px rgba(0, 119, 106, 0.14), 0px 8px 16px rgba(0, 119, 106, 0.14)',
};

/**
 * Design header height
 */
const HEADER_HEIGHT = 56;

export { colors, gradients, shadows, HEADER_HEIGHT };
