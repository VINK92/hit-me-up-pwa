import React from 'react';
import { HorizontalSpace, VerticalSpace } from './styled';
import { Units } from './types';

interface Props {
  size: number;
  unit?: Units;
  isHorizontal?: boolean;
}

/*
  Takes size in px (from mockup), and converts it to the target unit (by default vh/vw)
*/
const Spacer: React.FC<Props> = ({ size, isHorizontal = false, unit = isHorizontal ? Units.vw : Units.vh }) => {
  const Space = isHorizontal ? HorizontalSpace : VerticalSpace;
  return <Space size={size} unit={unit} />;
};

export default Spacer;
