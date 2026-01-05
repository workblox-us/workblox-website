import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // purple-500
      light: '#c084fc',
      dark: '#7c3aed',
    },
    secondary: {
      main: '#3b82f6', // blue-500
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem',
        },
      },
    },
  },
});
