import { useState, ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Header } from 'shared/components/Organisms/Header';
import { Sidebar } from 'shared/components/Organisms/Sidebar';
import { Footer } from 'shared/components/Molecules/Footer';
import { useAppThemeContext } from 'shared/contexts';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }:MainLayoutProps) : JSX.Element => {
  const { theme } = useAppThemeContext();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const smallScreenActive = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = 220;

  const handleDrawerToggle = ():void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {smallScreenActive && (
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}
        <Sidebar
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { sm: 'block', xs: 'none' } }}
        />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1,  py: 2, px: 3, bgcolor: theme.palette.background.default, overflow:'auto' }}>
          {children}
        </Box>
        <Box component="footer" sx={{ p: 2, bgcolor: theme.palette.background.default }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};