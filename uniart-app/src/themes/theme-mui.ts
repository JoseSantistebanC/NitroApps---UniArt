import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const typos = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Roboto',
  '"Helvetica Neue"',
  'Calibri',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const whites = {
  dark: '#DEEAF4',
  main: '#F2F6F9',
  light: '#FFF',
};

const blacks = {
  dark: '#000',
  main: '#002845',
  light: '#798F9F',
};


const themeMui = createTheme({
  palette: {
    primary: {
      light: '#ff7695',
      main: '#ea4067',
      dark: '#b2003d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#76fdfa',
      main: '#37C9C7',
      dark: '#009896',
      contrastText: blacks.main,
    },
    info: {
      main: '#FFD073',
      contrastText: blacks.main,
    }
  },
  status: {
    danger: blacks.main,
  },
  typography: {
    fontFamily: '"Maven Pro",' + typos,
    fontSize: 12,
    h1: {
      textAlign: "center" ,
      color: "inherit",
      marginBottom: "1rem",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    h6: { fontSize: '0.9rem', },
  },
  components: {
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
      styleOverrides: {
        root: {
          width: "fit-content",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '1.5rem',
        },
      },
    },
    MuiAppBar:{
      styleOverrides: {
        root: {
          backgroundColor: whites.main,
          color: blacks.main,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: whites.main,
          color: blacks.main,
          columnGap: "0.5rem",
          rowGap: "0.5rem",
          padding: "0px",
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          alignItems: "center",
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          padding: "2rem",
          textAlign: "center",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }
      }
    },
  },
});

themeMui.typography.h2.fontFamily = themeMui.typography.h3.fontFamily
  = themeMui.typography.h4.fontFamily = themeMui.typography.h5.fontFamily
  = themeMui.typography.h6.fontFamily = '"Share Tech",' + typos;



export {themeMui, whites, blacks};