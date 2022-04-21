import React from 'react';
import { Typography, Box } from '@mui/material';
import { pxToRem } from 'utils/stylingUtils';
import { StyledBox } from './styled';

interface CustomIconButtonProps {
  onClick: () => void;
  title: string;
  color: string;
  icon: React.ReactNode;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ onClick, title, color, icon }) => {
  return (
    <Box width={pxToRem(56)} color={color} display="flex" flexDirection="column" onClick={onClick}>
      <StyledBox>{icon}</StyledBox>
      <Typography textAlign="center" variant="bodySmallMedium" color="inherit">
        {title}
      </Typography>
    </Box>
  );
};

export default CustomIconButton;
