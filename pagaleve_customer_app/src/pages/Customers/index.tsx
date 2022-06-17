import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Header } from 'shared/components/Organisms/Header';
import { Main } from 'shared/components/Organisms/Main';
import { Sidebar } from 'shared/components/Organisms/Sidebar';
import { Footer } from 'shared/components/Molecules/Footer';
import { useAppThemeContext } from 'shared/contexts';

const Customers: React.FC = () => {
  const { theme } = useAppThemeContext();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const smallScreenActive = useMediaQuery(theme.breakpoints.up('sm'));
  const drawerWidth = 256;

  const handleDrawerToggle = ():void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {smallScreenActive ? null : (
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
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: theme.palette.background.default }}>
          <Main />
        </Box>
        <Box component="footer" sx={{ p: 2, bgcolor: theme.palette.background.default }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Customers;