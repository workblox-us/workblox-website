import { Box } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

interface WorkbloxLogoProps {
  size?: number;
}

export function WorkbloxLogo({ size = 28 }: WorkbloxLogoProps) {
  const colors = useThemeColors();

  return (
    <Box
      component='img'
      src={colors.isDark ? '/images/logo_white.svg' : '/images/logo.svg'}
      alt='Workblox'
      sx={{
        height: size, // adjust
        width: 'auto',
        display: 'block',
      }}
    />
  );
}
