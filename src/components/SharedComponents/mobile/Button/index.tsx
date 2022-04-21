import React from 'react';
import { ButtonProps } from '@mui/material';
import { StyledButton } from './styled';

interface Props extends ButtonProps {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  gradient?: boolean;
}

const Button: React.FC<Props> = ({ onClick, children, type, gradient, ...rest }) => {
  return (
    <StyledButton onClick={onClick} type={type} gradient={gradient} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
