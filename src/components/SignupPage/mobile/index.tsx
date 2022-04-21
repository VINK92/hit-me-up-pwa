import React from 'react';
import { Box } from '@mui/material';
import CommonContainer from 'components/CommonContainer/mobile';
import ArrowBack from 'components/SharedComponents/mobile/ArrowBack';
import Spacer from 'components/SharedComponents/mobile/Spacer';

interface SignupPageProps {
  onGoBackClick: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onGoBackClick }) => {
  return (
    <CommonContainer isMenu>
      <Spacer size={16} />
      <Box>
        <ArrowBack onClick={onGoBackClick} />
      </Box>
    </CommonContainer>
  );
};

export default SignupPage;
