import React from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import { ReactComponent as ErrorIcon } from 'assets/icons/errorCircle.svg';

interface WordErrorStateProps {}

const WordErrorState: React.FC<WordErrorStateProps> = () => {
  return (
    <>
      <Spacer size={156} />
      <Box display="flex" justifyContent="center">
        <ErrorIcon />
      </Box>
      <Spacer size={32} />
      <Typography variant="h5" textAlign="center">
        {t('wordListErrorSubtitle')}
      </Typography>
      <Spacer size={16} />
      <Typography component={Box} noWrap variant="bodyDefaultBook" color="grey.600" textAlign="center">
        {t('wordListErrorLabelFirst')}
      </Typography>
      <Typography component={Box} noWrap variant="bodyDefaultBook" color="grey.600" textAlign="center">
        {t('wordListPrrorLabelSecond')}
      </Typography>
    </>
  );
};

export default WordErrorState;
