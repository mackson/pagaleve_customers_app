import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAppThemeContext } from 'shared/contexts';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export const Header = (props: HeaderProps):JSX.Element  => {
  const { onDrawerToggle } = props;
  const { toggleTheme } = useAppThemeContext();
  const [themeSelected, setThemeSelected] = useState<boolean>(false);

  const changeTheme = ():void => {
    toggleTheme();
    setThemeSelected(!themeSelected);
  };
    
  return (
    <React.Fragment>
      <AppBar sx={{ bgcolor: 'transparent' }} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography color="primary" variant="h5" component="h1">
                Customers
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Change Theme">
                <IconButton color="primary" onClick={changeTheme}>
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="primary">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="primary" sx={{ p: 0.5 }}>
                <Avatar src="/1.png" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};