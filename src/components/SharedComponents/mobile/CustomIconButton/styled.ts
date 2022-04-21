import { Box } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { pxToRem } from 'utils/stylingUtils';
import { colors } from 'styles/constants';

export const StyledBox = styled(Box)(css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};
  background: ${colors.backgroundWhiteTransparent07};
`);
