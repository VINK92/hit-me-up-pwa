import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';

import useResize from 'hooks/useResize';

import Logo from 'components/Logo';

// import { setSideMenuToggle } from 'redux/sideMenu/reducers/actions';
// import { selectIsSideMenuOpen } from 'redux/sideMenu/selectors';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { HEADER_HEIGHT } from 'styles/constants';
import { StyledCloseIcon, StyledContainer, WhiteContainer, CONTENT_BORDER_RADIUS } from './styled';

type Props = {
  isMenu?: boolean;
  contentBackground?: string;
  contentScrollable?: boolean;
  headerContent?: React.ReactNode;
  withPadding?: boolean;
};

const CommonContainer: React.FC<Props> = ({
  children,
  isMenu = true,
  contentBackground,
  contentScrollable = false,
  headerContent,
  withPadding = true,
}) => {
  // const dispatch = useDispatch();
  const { height } = useResize();

  const headRef = useRef<HTMLDivElement | null>(null);
  const isSideMenuOpen = false; // useSelector(selectIsSideMenuOpen);

  const [contentHeight, setContentHeight] = useState(0);

  const handleMenuClick = () => {
    // dispatch(setSideMenuToggle());
  };

  useEffect(() => {
    if (headRef?.current?.offsetHeight) {
      setContentHeight(headRef?.current?.offsetHeight);
    }
  }, []);

  return (
    <Box height={height}>
      <StyledContainer ref={headRef}>
        {/**
         * HEADER_HEIGHT set without using pxToVh util due to small header height on small screen size
         */}
        <Box display="flex" justifyContent="space-between" alignItems="center" height={HEADER_HEIGHT}>
          <Logo type="light" />
          {isMenu && (
            <IconButton edge="end" size="small" disableRipple onClick={handleMenuClick}>
              {isSideMenuOpen ? <StyledCloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Box>
        {headerContent}
      </StyledContainer>
      <WhiteContainer
        height={height + CONTENT_BORDER_RADIUS - contentHeight}
        background={contentBackground}
        withPadding={withPadding}
        {...(contentScrollable ? { overflow: 'scroll' } : {})}
      >
        {children}
      </WhiteContainer>
    </Box>
  );
};

export default CommonContainer;
