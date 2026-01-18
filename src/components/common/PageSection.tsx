import { Box, Container, BoxProps } from '@mui/material';
import { useThemeColors } from '@/hooks/useThemeColors';
import { tokens } from '@/utils/design-tokens';
import { ReactNode } from 'react';

interface PageSectionProps extends Omit<BoxProps, 'children' | 'maxWidth'> {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  background?: 'primary' | 'secondary' | 'transparent';
  py?: number | { xs?: number; md?: number };
  noPadding?: boolean;
}

/**
 * Reusable page section wrapper
 * Provides consistent spacing and container behavior
 */
export function PageSection({
  children,
  maxWidth = 'lg',
  background = 'transparent',
  py,
  noPadding = false,
  sx,
  ...props
}: PageSectionProps) {
  const colors = useThemeColors();

  const bgMap = {
    primary: colors.bg.primary,
    secondary: colors.bg.secondary,
    transparent: 'transparent',
  };

  const defaultPy = py ?? (noPadding ? 0 : { xs: 6, md: 12 });

  return (
    <Box
      component='section'
      {...props}
      sx={{
        position: 'relative',
        bgcolor: bgMap[background],
        py: defaultPy,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Container>
    </Box>
  );
}
