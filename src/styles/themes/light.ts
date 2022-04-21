import createBasicTheme from './createBasicTheme';
import { colors } from '../constants';

const lightTheme = createBasicTheme({
  palette: {
    primary: {
      main: colors.primaryDefault,
    },
  },
});

export default lightTheme;
