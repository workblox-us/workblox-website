'use client';
import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
} from "@mui/material";

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial load from storage and system preference
    const savedMode = localStorage.getItem('theme-mode') as PaletteMode;
    if (savedMode) {
      setMode(savedMode);
      document.documentElement.classList.toggle('dark', savedMode === 'dark');
      document.documentElement.dataset.theme = savedMode;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme-mode', mode);
      document.documentElement.dataset.theme = mode;
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#a855f7",
          light: "#c084fc",
          dark: "#7c3aed",
        },
        secondary: {
          main: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },
        background: {
          default: mode === "dark" ? "#000000" : "#ffffff",
          paper: mode === "dark" ? "#0a0a0a" : "#f9fafb",
        },
        text: {
          primary: mode === "dark" ? "#ffffff" : "#111827",
          secondary: mode === "dark" ? "#9ca3af" : "#6b7280",
        },
      },
      typography: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: 14,
        h1: {
          fontSize: "4rem",
          fontWeight: 500,
          lineHeight: 1.2,
          "@media (max-width:900px)": {
            fontSize: "3rem",
          },
        },
        h2: {
          fontSize: "3rem",
          fontWeight: 500,
          lineHeight: 1.3,
          "@media (max-width:900px)": {
            fontSize: "2rem",
          },
        },
        h3: {
          fontSize: "2rem",
          fontWeight: 500,
          lineHeight: 1.4,
          "@media (max-width:900px)": {
            fontSize: "1.5rem",
          },
        },
        body1: {
          fontSize: "1rem",
          lineHeight: 1.6,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: "0.75rem",
              padding: "0.75rem 1.5rem",
            },
          },
        },
      },
    });
  }, [mode]);

  // Prevent hydration mismatch by returning null or a consistent skeleton
  // until the client-side state is synchronized with localStorage
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}