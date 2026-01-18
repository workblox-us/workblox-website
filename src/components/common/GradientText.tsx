import { Box, BoxProps } from '@mui/material';
import { tokens } from '@/utils/design-tokens';
import { ReactNode } from 'react';

interface GradientTextProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  gradient?: 'purple' | 'purpleDark' | 'purpleAlt' | 'purpleAltDark';
}

/**
 * Reusable gradient text component
 * Applies gradient color to text with WebKit background clip
 */
export function GradientText({
  children,
  gradient = 'purple',
  sx,
  ...props
}: GradientTextProps) {
  const gradientMap = {
    purple: tokens.gradients.textPurple,
    purpleDark: tokens.gradients.textPurpleDark,
    purpleAlt: tokens.gradients.textPurpleAlt,
    purpleAltDark: tokens.gradients.textPurpleAltDark,
  };

  return (
    <Box
      component='span'
      {...props}
      sx={{
        background: gradientMap[gradient],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
