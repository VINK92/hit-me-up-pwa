import { styled } from '@mui/material/styles';
import { pxToRem, pxToVh, pxToVw } from 'utils/stylingUtils';
import { Units } from './types';

type Props = {
  size: number;
  unit: Units;
};

const px = (value: number) => `${value}px`;
const pxToUnit = (unit: Units, value: number) => {
  const mapper = {
    [Units.px]: px,
    [Units.rem]: pxToRem,
    [Units.vh]: pxToVh,
    [Units.vw]: pxToVw,
  };
  return mapper[unit](value);
};

export const HorizontalSpace = styled('div')<Props>`
  width: ${({ size, unit }) => pxToUnit(unit, size)};
`;

export const VerticalSpace = styled('div')<Props>`
  padding-top: ${({ size, unit }) => pxToUnit(unit, size)};
`;
