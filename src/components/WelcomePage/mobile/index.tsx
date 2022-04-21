import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Logo from 'components/Logo';
import Spacer from 'components/Spacer';
import Button from 'components/SharedComponents/mobile/Button';
import GradientContainer from 'components/GradientContainer/mobile';
import NarrowContainer from 'components/NarrowContainer/mobile';
import FixedContainer from 'components/SharedComponents/mobile/FixedContainer';
import { colors } from 'styles/constants';
import { ButtonWithDarkText, StyledTypography } from 'components/WelcomePage/mobile/styled';

interface WelcomePageProps {}

const WelcomePage: React.FC<WelcomePageProps> = () => {
  const { t } = useTranslation();
  return (
    <GradientContainer>
      <NarrowContainer>
        <Logo type="light" />
        <Spacer size={195} />
        <Typography variant="h1" color={colors.backgroundPrimary}>
          {t('welcomePageTitle')}
        </Typography>
        <Spacer size={24} />
        <Typography variant="bodyDefaultBook" color={colors.backgroundSecondary}>
          {t('welcomePageTitle')}
        </Typography>
        <FixedContainer>
          <ButtonWithDarkText variant="outlined" onClick={() => {}} type="button">
            <StyledTypography variant="buttonLarge">{t('signUp')}</StyledTypography>
          </ButtonWithDarkText>
          <Spacer size={16} />
          <Button variant="contained" onClick={() => {}} type="button">
            <Typography variant="buttonLarge">{t('login')}</Typography>
          </Button>
        </FixedContainer>
      </NarrowContainer>
    </GradientContainer>
  );
};

export default WelcomePage;
