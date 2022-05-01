import React from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';
import LinkComponent from 'components/SharedComponents/mobile/Link';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import { PATHS } from 'navigation/constants';
import { pxToVh } from 'utils/stylingUtils';
import { useNavigate } from 'react-router-dom';

interface WordEmptyStateProps {}

const WordEmptyState: React.FC<WordEmptyStateProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <Spacer size={24} />
      <Box height={pxToVh(200)} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h1" color="primary" textAlign="center">
          {t('wordListEmptyTitle')}
        </Typography>
      </Box>
      <Spacer size={16} />
      <Typography variant="h5" textAlign="center">
        {t('wordListEmptySubTitle')}
      </Typography>
      <Spacer size={16} />
      <Box display="flex" justifyContent="center">
        <LinkComponent onClick={() => navigate(PATHS.SELECT_WORDS)} text={t('wordAddLinkTitle')} />
      </Box>
    </>
  );
};

export default WordEmptyState;
