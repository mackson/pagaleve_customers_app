import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import AttachMoneySharp from '@mui/icons-material/AttachMoneySharp';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import { useAppThemeContext } from 'shared/contexts';

export const Sidebar = (props: DrawerProps):JSX.Element => {
  const { ...other } = props;

  const { themeName } = useAppThemeContext();

  const mainMenu = [
    {
      id: 'Portal',
      children: [
        {
          id: 'Customers',
          icon: <PeopleIcon />,
          active: true,
          url: '/customers',
        },
        { id: 'Operations', icon: <DnsRoundedIcon />, url: '/customers', },
        { id: 'Wallet', icon: <AttachMoneySharp />, url: '/customers', },
        { id: 'Migrations', icon: <SettingsEthernetIcon />, url: '/customers', },
        {
          id: 'Settings',
          icon: <SettingsInputComponentIcon />,
          url: '/customers',
        },
      ],
    },
  ];

  const menuItemStyle = {
    py: '10px',
    px: 3,
    color: themeName === 'light' ? 'rgba(63, 63, 63, 0.7)' : '#fff',
    borderRadius:'0 20px 20px 0',
    marginBottom: 1,
    '&:hover': {
      bgcolor: themeName === 'light' ? 'rgba(121, 121, 121, 0.164)' : '#312d4a',
    },
    '&:focus': {
      bgcolor: themeName === 'light' ? 'rgba(121, 121, 121, 0.164)'  : 'rgba(83, 73, 97, 0.1)',
    },
    '&.Mui-selected': {
      color: themeName === 'light' ? '#4a148c' : '#d4bbf9',
      bgcolor: themeName === 'light' ? 'rgba(121, 121, 121, 0.164)'  : '#312d4a',
    },
    '&.Mui-selected:hover': {
      color: themeName === 'light' ? '#4c1c86' : '#b89fdd',
      bgcolor: themeName === 'light' ? 'rgba(43, 43, 43, 0.164)'  : '#413c61',
    },
  };

  const menuItemCategoryStyle = {
    py: 4,
    px: 3,
    fontSize: 22,
  };
  
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...menuItemCategoryStyle}}>
          {themeName === 'light' ? <img src="/pagaleve-logo.svg" alt="logo" /> : <img src="/pagaleve-logo-dark.svg" alt="logo" />}
        </ListItem>
       
        {mainMenu.map(({ id, children }) => (
          <Box key={id} paddingRight={2} marginTop={1} >
            {children.map(({ id: childId, icon, active, url }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={menuItemStyle} href={url}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};