import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBlock from 'components/LoginPage/mobile';
import { CreateUser } from 'redux/user/types';

const MobileLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const onGoBackClick = () => {
    navigate(-1);
  };
  const onSubmitContinue = (values: CreateUser) => {
    console.log('values', values);
  };
  return <ContentBlock onGoBackClick={onGoBackClick} onSubmitContinue={onSubmitContinue} />;
};

export default MobileLoginPage;
