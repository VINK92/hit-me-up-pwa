import { styled, css } from '@mui/material/styles';

import Button from 'components/SharedComponents/mobile/Button';
import { Typography } from '@mui/material';

export const LightTypography = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.background.default};
  `,
);

export const TransparentTypography = styled(LightTypography)`
  opacity: 0.7;
`;

export const ButtonWithDarkText = styled(Button)(
  ({ theme }) => css`
    color: ${theme.palette.primary.dark};
    border: none;
  `,
);

export const StyledTypography = styled(Typography)(
  ({ theme }) => css`
    background: ${theme.palette.gradients?.primary};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
);
