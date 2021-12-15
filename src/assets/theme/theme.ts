/* eslint-disable no-unused-vars */
import { createTheme, styled } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    // common: {
    //   black: '#19192B',
    //   white: '#ffffff',
    // },
    // primary: {
    //   light: '#B3E5FC',
    //   main: '#03A9F4',
    //   dark: '#0288D1',
    //   contrastText: '#212121',
    // },
    // secondary: {
    //   main: '#607D8B', // omitting light and dark will calculate from main
    //   contrastText: '#757575',
    // },
    // grey: {
    //   500: '#bcbcbc',
    //   700: '#79797a',
    // },
    // info: {
    //   main: '#1bb2f1',
    // },
    // success: {
    //   main: '#00d589',
    // },
    // error: {
    //   main: '#832838',
    // },
    // background: {
    //   default: '#fff',
    //   paper: 'red',
    // },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#989898',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          // width: '60px!important',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#989898',
        },
      },
    },
  },
  typography: {
    fontFamily: '',
  },
});

export default theme;
