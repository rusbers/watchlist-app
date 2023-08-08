import { createTheme } from '@mui/material';
import shades from './shades';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: shades.primary[400],
    },
    secondary: {
      main: shades.secondary[500],
    },
    ternary: {
      main: shades.tertary[500],
    },
    success: {
      main: shades.success[500],
    },
    error: {
      main: shades.error[500],
    },
    warning: {
      500: shades.warning[500],
    },
    neutral: {
      grey: {
        50: shades.neutral.grey[50],
        100: shades.neutral.grey[100],
        200: shades.neutral.grey[200],
        300: shades.neutral.grey[300],
        400: shades.neutral.grey[400],
        700: shades.neutral.grey[700],
        800: shades.neutral.grey[800],
        800.8: shades.neutral.grey[800.8],
        900.8: shades.neutral.grey[900.8],
      },
      black: {
        30: shades.neutral.black[30],
        65: shades.neutral.black[65],
        100: shades.neutral.black[100],
      },
      white: {
        100: shades.neutral.white[100],
      },
    },
    background: {
      default: shades.neutral.grey[900],
    },
    text: {
      primary: shades.neutral.grey[300],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(', '),
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(/src/assets/images/background/bg.png)`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: '50% -160px',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        },
      },
    },
  },
});

export default theme;
