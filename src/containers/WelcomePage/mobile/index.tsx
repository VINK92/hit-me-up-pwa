import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBlock from 'components/WelcomePage/mobile';
import { PATHS } from 'navigation/constants';

const MobileWelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const onSigupClick = () => {
    navigate(PATHS.SIGN_UP);
  };
  const onLiginClick = () => {
    navigate(PATHS.LOG_IN);
  };
  return <ContentBlock onSigupClick={onSigupClick} onLiginClick={onLiginClick} />;
};

export default MobileWelcomePage;
