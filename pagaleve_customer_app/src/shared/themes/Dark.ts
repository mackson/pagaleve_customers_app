import { createTheme, Theme } from '@mui/material';

const BaseTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#352f5d',
      main: '#cbc5e7',
      dark: '#1e1a33',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#cbc5e7',
      main: '#9552f8',
      dark: '#1e1a33',
      contrastText: '#ffffff'
    },
    background:{
      paper:'#28243c',
      default: '#1e1a33',
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

export const DarkTheme: Theme = {
  ...BaseTheme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#28243c',
          boxShadow: 'rgba(19, 8, 34, 0.3) 2px 2px 5px 2px'
        },
      },
    },
   
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: BaseTheme.spacing(1),
        },
        indicator: {
          height: 3,
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
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(83, 73, 97, 0.7)',
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
          color: 'inherit',
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