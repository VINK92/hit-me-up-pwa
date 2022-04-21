import React from 'react';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { pxToVw } from 'utils/stylingUtils';
import { ArrowIcon, StyledLink, StyledOutsideLink, StyledTypography } from './styled';

interface Props {
  to?: string;
  href?: string;
  title: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  hideDivider?: boolean;
  hideArrowIcon?: boolean;
  onClick?: () => void;
}

const ContentBlock: React.FC<Props> = ({
  to,
  href,
  title,
  icon,
  rightIcon = <ArrowIcon fontSize="inherit" />,
  hideArrowIcon = false,
  hideDivider = false,
  onClick,
}) => (
  <ListItem
    onClick={onClick}
    component={href ? StyledOutsideLink : StyledLink}
    to={to}
    href={href}
    target={href ? '_blank' : '_self'}
    divider={!hideDivider}
    secondaryAction={
      !hideArrowIcon && (
        <IconButton edge="end" size="small" disableRipple>
          {rightIcon}
        </IconButton>
      )
    }
    disableGutters
    disablePadding
  >
    <Box display="flex" alignItems="center" justifyContent="center" mr={pxToVw(16)}>
      {icon}
    </Box>
    <ListItemText disableTypography>
      <StyledTypography variant="subtitleMedium">{title}</StyledTypography>
    </ListItemText>
  </ListItem>
);

export default ContentBlock;
