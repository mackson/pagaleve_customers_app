import { 
  createContext, 
  useState, 
  useCallback, 
  useMemo, 
  useContext,
  ReactNode,
} from 'react';
import { ThemeProvider, CssBaseline, Box, Theme } from '@mui/material';
import { DarkTheme, LightTheme } from 'shared/themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
  theme:Theme;
}

type AppThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ( { children }:AppThemeProviderProps): JSX.Element => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(()=>{
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  },[]);

  const theme = useMemo(():Theme =>{
    if(themeName === 'light') return LightTheme;
    return DarkTheme;
  },[themeName]);

  return (
    <ThemeContext.Provider value={ { themeName, toggleTheme, theme } }>
      <ThemeProvider theme={theme}>
        <Box className="anim-el" width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
        <CssBaseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};