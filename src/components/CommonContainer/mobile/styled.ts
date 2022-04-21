import React from 'react';
import { styled, css } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { pxToVw } from 'utils/stylingUtils';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from 'styles/constants';

export const ROOT_CONTAINER_MARGIN = 20;
export const CONTENT_BORDER_RADIUS = 8;

export const StyledContainer = styled('div')(
  ({ theme }) => css`
    background: ${theme.palette.gradients?.primary};
    display: flex;
    flex-direction: column;
    padding-right: ${pxToVw(ROOT_CONTAINER_MARGIN)};
    padding-left: ${pxToVw(ROOT_CONTAINER_MARGIN)};
    padding-bottom: ${CONTENT_BORDER_RADIUS}px;
  `,
);

export const WhiteContainer = styled<React.FC<BoxProps & { background?: string; withPadding?: boolean }>>(Box)(
  ({ theme, background, withPadding }) => css`
    background: ${background || theme.palette.background.default};
    display: flex;
    flex-direction: column;
    padding-right: ${withPadding ? pxToVw(ROOT_CONTAINER_MARGIN) : 0};
    padding-left: ${withPadding ? pxToVw(ROOT_CONTAINER_MARGIN) : 0};
    border-top-left-radius: ${CONTENT_BORDER_RADIUS}px;
    border-top-right-radius: ${CONTENT_BORDER_RADIUS}px;
    margin-top: ${-CONTENT_BORDER_RADIUS}px;
  `,
);

export const StyledCloseIcon = styled(CloseIcon)`
  fill: ${colors.backgroundPrimary};
`;
