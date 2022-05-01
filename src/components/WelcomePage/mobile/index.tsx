import React from 'react';
import { t } from 'i18next';
import { Typography } from '@mui/material';
import Logo from 'components/Logo';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import Button from 'components/SharedComponents/mobile/Button';
import GradientContainer from 'components/GradientContainer/mobile';
import NarrowContainer from 'components/NarrowContainer/mobile';
import FixedContainer from 'components/SharedComponents/mobile/FixedContainer';
import { colors } from 'styles/constants';
import { ButtonWithDarkText, StyledTypography } from 'components/WelcomePage/mobile/styled';

interface WelcomePageProps {
  onSigupClick: () => void;
  onLiginClick: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSigupClick, onLiginClick }) => {
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
          {t('welcomePageSubtitle')}
        </Typography>
        <FixedContainer>
          <ButtonWithDarkText variant="outlined" onClick={onSigupClick} type="button">
            <StyledTypography variant="buttonLarge">{t('signUp')}</StyledTypography>
          </ButtonWithDarkText>
          <Spacer size={16} />
          <Button variant="contained" onClick={onLiginClick} type="button">
            <Typography variant="buttonLarge">{t('login')}</Typography>
          </Button>
        </FixedContainer>
      </NarrowContainer>
    </GradientContainer>
  );
};

export default WelcomePage;
