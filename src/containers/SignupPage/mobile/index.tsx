import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBlock from 'components/SignupPage/mobile';

const MobileSignupPage: React.FC = () => {
  const navigate = useNavigate();
  const onGoBackClick = () => {
    navigate(-1);
  };
  return <ContentBlock onGoBackClick={onGoBackClick} />;
};

export default MobileSignupPage;
