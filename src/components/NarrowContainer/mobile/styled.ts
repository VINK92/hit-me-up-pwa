import { styled, css } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { pxToVh, pxToVw } from 'utils/stylingUtils';

export const StyledContainer = styled(Box)(css`
  display: flex;
  flex-direction: column;
  padding: ${pxToVh(32)} ${pxToVw(30)} ${pxToVh(75)};
`);
