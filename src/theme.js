import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#feecefff ',
      light: '#070707ff',
      dark: '#b4b8bdff',
      contrastText: '#535353ff',
    },
    secondary: {
      main: '#12141aff',
      contrastText: '#ffffffff',
    },
    background: {
      default: '#fefefe ',
      paper: '#fff1f3 ',
    },
    typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e2c9c9ff', 
      contrastText: '#000000ff',
    },
    background: {
      default: '#121212', 
      paper: '#1e1e1e',     
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
  },
});

