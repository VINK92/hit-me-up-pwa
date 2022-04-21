import React from 'react';
import { ReactComponent as ArrowBackIcon } from 'assets/icons/arrowBack.svg';
import { StyledButton } from './styled';

type ArrowBackProps = {
  onClick: () => void;
};

const ArrowBack: React.FC<ArrowBackProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <ArrowBackIcon />
  </StyledButton>
);

export default ArrowBack;
