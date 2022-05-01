import React from 'react';
import { t } from 'i18next';
import { Box } from '@mui/material';
import CommonContainer from 'components/CommonContainer/mobile';
import ArrowBack from 'components/SharedComponents/mobile/ArrowBack';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import GradientTypography from 'components/SharedComponents/mobile/GradientTypography';
import { CreateUser } from 'redux/user/types';
import CustomForm from 'components/CustomForm';

interface SignupPageProps {
  onGoBackClick: () => void;
  onSubmitContinue: (values: CreateUser) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onGoBackClick, onSubmitContinue }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const handleSubmit = () => {
    onSubmitContinue({ email, password });
  };
  return (
    <CommonContainer isMenu={false}>
      <Spacer size={16} />
      <Box>
        <ArrowBack onClick={onGoBackClick} />
      </Box>

      <GradientTypography type="light" variant="h2" textAlign="center">
        {t('signUp')}
      </GradientTypography>

      <Spacer size={100} />
      <CustomForm
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        initialValues={{ email, password }}
      />
    </CommonContainer>
  );
};

export default SignupPage;
