import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ROOT_CONTAINER_MARGIN } from 'components/CommonContainer/mobile/styled';
import { pxToVw, pxToRem } from 'utils/stylingUtils';

export const StyledContainer = styled(Box)(
  css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding-left: ${pxToVw(ROOT_CONTAINER_MARGIN)};
    padding-right: ${pxToVw(ROOT_CONTAINER_MARGIN)};
    padding-top: ${pxToRem(24)};
    padding-bottom: ${pxToRem(50)};
  `,
);
