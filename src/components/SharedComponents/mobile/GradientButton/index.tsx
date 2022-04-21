import React from 'react';
import { ButtonProps } from '@mui/material';
import Button from '../Button';

interface GradientButtonProps extends ButtonProps {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const GradientButton: React.FC<GradientButtonProps> = ({ onClick, children, type, ...rest }) => {
  return (
    <Button variant="contained" onClick={onClick} type={type} gradient {...rest}>
      {children}
    </Button>
  );
};

export default GradientButton;
