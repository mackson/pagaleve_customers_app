import { createTheme, Theme } from '@mui/material';

const BaseTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#00f3ac',
      main: '#28b38a',
      dark: '#18664f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00f3ac',
      main: '#28b38a',
      dark: '#18664f',
      contrastText: '#fff'
    },
    background:{
      paper:'#ffffff',
      default: '#dee6e3',
    },
  },
 
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
   
  },
});

export const LightTheme:Theme = {
  ...BaseTheme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          boxShadow: 'rgb(58 53 65 / 10%) 2px 2px 10px 2px'
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: BaseTheme.spacing(1),
        },
        indicator: {
          height: 6,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: BaseTheme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [BaseTheme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: BaseTheme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: BaseTheme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: BaseTheme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};