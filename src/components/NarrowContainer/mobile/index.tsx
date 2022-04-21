import React from 'react';

import useResize from 'hooks/useResize';
import { StyledContainer } from './styled';

const NarrowContainer: React.FC = ({ children }) => {
  const { height } = useResize();

  return <StyledContainer height={height}>{children}</StyledContainer>;
};

export default NarrowContainer;
