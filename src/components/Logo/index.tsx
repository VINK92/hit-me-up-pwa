import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledTypography } from 'components/Logo/styled';

interface LogoProps {
  type: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <StyledTypography variant="logoUnderline" fontWeight="bold" type={type}>
      {t('logo')}
    </StyledTypography>
  );
};
export default Logo;
