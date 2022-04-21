import { Link } from 'react-router-dom';
import { styled, Typography } from '@mui/material';
import OutLink from '@mui/material/Link';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { pxToVh } from 'utils/stylingUtils';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[700],
  paddingTop: pxToVh(20.5),
  paddingBottom: pxToVh(20.5),
}));

export const ArrowIcon = styled(ArrowForward)(({ theme }) => ({
  fill: theme.palette.grey[500],
}));

export const StyledOutsideLink = styled(OutLink)(({ theme }) => ({
  color: theme.palette.grey[700],
  paddingTop: pxToVh(20.5),
  paddingBottom: pxToVh(20.5),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
}));
