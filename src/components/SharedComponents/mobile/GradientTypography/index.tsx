import React from 'react';
import { TypographyProps } from '@mui/material';
import { StyledTypography } from './styled';

interface Props {
  children: string;
  type?: 'dark' | 'light';
}

const GradientTypography: React.FC<Props & TypographyProps> = ({ children, type, ...rest }) => {
  const gradient = type || 'light';
  return (
    <StyledTypography {...rest} type={gradient}>
      {children}
    </StyledTypography>
  );
};
export default GradientTypography;
