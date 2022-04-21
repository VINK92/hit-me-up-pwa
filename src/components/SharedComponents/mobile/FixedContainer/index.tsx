import React from 'react';
import { StyledContainer } from './styled';

interface FixedContainerProps {
  children: React.ReactNode;
}

const FixedContainer: React.FC<FixedContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default FixedContainer;
