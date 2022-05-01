/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link, Typography, TypographyPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyDefaultBook'
  | 'bodyDefaultMedium'
  | 'bodySmallBook'
  | 'bodySmallMedium'
  | 'subtitleBook'
  | 'subtitleMedium'
  | 'captionMedium'
  | 'overlineDefaultMedium'
  | 'overlineSmallMedium'
  | 'buttonSmall'
  | 'buttonMedium'
  | 'buttonLarge'
  | 'bodyDefaultMediumUnderline'
  | 'bodySmallMediumUnderline'
  | 'button'
  | 'inherit';

type LinkComponentProps = {
  onClick?: () => void;
  href?: string;
  target?: string;
  text: string;
  variant?: OverridableStringUnion<Variant, TypographyPropsVariantOverrides>;
  color?: string;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
  onClick,
  href,
  target,
  text,
  variant = 'bodyDefaultMedium',
  color = 'primary',
}) => {
  return (
    <Typography variant={variant} color={color} align="center">
      <Link color="inherit" href={href} target={target} onClick={onClick}>
        {text}
      </Link>
    </Typography>
  );
};

export default LinkComponent;
