import React from 'react';
import { styled, css } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const StyledTypography = styled<React.FC<TypographyProps & { type: 'dark' | 'light' }>>(Typography)(
  ({ theme, type }) => css`
    background: ${type === 'dark' ? theme.palette.gradients?.primaryDisabled : theme.palette.background.default};
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 1px solid white;
  `,
);
