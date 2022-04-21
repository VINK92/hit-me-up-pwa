import { styled, css } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background: ${theme.palette.gradients?.primary};
  `,
);
