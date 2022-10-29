import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBlock from 'components/SignupPage/mobile';
import { CreateUser } from 'redux/user/types';

const MobileSignupPage: React.FC = () => {
  const navigate = useNavigate();
  const onGoBackClick = () => {
    navigate(-1);
  };
  const onSubmitContinue = (values: CreateUser) => {
    return values;
  };
  return <ContentBlock onGoBackClick={onGoBackClick} onSubmitContinue={onSubmitContinue} />;
};

export default MobileSignupPage;
