import React from 'react';
import { t } from 'i18next';

import { StyledTypography } from 'components/Logo/styled';

interface LogoProps {
  type: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <StyledTypography variant="logoUnderline" fontWeight="bold" type={type}>
      {t('logo')}
    </StyledTypography>
  );
};
export default Logo;
