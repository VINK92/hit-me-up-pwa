import React from 'react';
import { Box } from '@mui/material';
import CommonContainer from 'components/CommonContainer/mobile';
import ArrowBack from 'components/SharedComponents/mobile/ArrowBack';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import CustomForm from 'components/CustomForm';
import GradientTypography from 'components/SharedComponents/mobile/GradientTypography';
import { t } from 'i18next';
import { CreateUser } from 'redux/user/types';

interface LoginPageProps {
  onGoBackClick: () => void;
  onSubmitContinue: (values: CreateUser) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onGoBackClick, onSubmitContinue }) => {
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
        {t('login')}
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

export default LoginPage;
