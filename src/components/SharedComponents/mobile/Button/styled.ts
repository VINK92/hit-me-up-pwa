import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { pxToRem } from 'utils/stylingUtils';
import { colors } from 'styles/constants';

export const StyledButton = styled<React.FC<ButtonProps & { gradient?: boolean }>>(Button, {
  shouldForwardProp: props => !['gradient'].includes(props as string),
})(({ theme, variant, gradient, disabled }) => {
  let background = '';
  if (variant === 'outlined') {
    background = '#fff';
  }
  if (gradient && theme.palette.gradients) {
    background = theme.palette.gradients.primary;
  }
  if (variant === 'contained' && !gradient) {
    background = colors.backgroundGrayTransparent008;
  }
  return css`
    width: 100%;
    height: ${pxToRem(52)};
    border-radius: 8px;
    background: ${background};
    box-shadow: ${theme.customShadows?.primary};
    /* &:hover {
      background: ${background};
    } */

    &.Mui-disabled {
      color: white;
      background: ${disabled && gradient && theme.palette.gradients
        ? theme.palette.gradients.primaryDisabled
        : 'inherit'};
    }
  `;
});
