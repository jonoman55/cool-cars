/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { Login, Logout } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ToolTip } from '../controls/ToolTip';
import {
  Drawer,
  DrawerHeader,
  List,
  ThemeListSubheader,
  ToggleButtonText,
  colorStyles,
  toggleButtonGroupStyles,
  toggleButtonStyles,
} from '../styled/Sidebar.styled';
import { appActions } from '../../reducers/appSlice';
import { themeActions } from '../../reducers/themeSlice';
import { useAuth, usePathname } from '../../hooks';
import { linkItems, themeItems } from '../../constants';

/**
 * Sidebar
 */
const Sidebar = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const theme = useTheme();
  const pathname = usePathname();
  // const auth = useAuth();

  const [alignment, setAlignment] = useState('');

  const { themeMode } = useSelector((state) => state.theme);

  const { drawerOpen } = useSelector((state) => state.app);

  const themeText = useMemo(
    () => (themeMode === 'light' ? 'Light Mode' : 'Dark Mode'),
    [themeMode]
  );

  useEffect(() => {
    if (alignment === '') {
      setAlignment(themeMode);
    }
  }, [alignment, themeMode]);

  const selectedItem = useCallback((to) => pathname === to, [pathname]);

  const selectedTheme = useCallback(
    (mode) => () => {
      dispatch(themeActions.setThemeMode(mode));
      dispatch(themeActions.switchThemeMode(mode));
    },
    [dispatch]
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    dispatch(appActions.setDrawerOpen(open));
  };

  const handleThemeChange = (_e, newAlignment) => {
    setAlignment(newAlignment);
  };

  // const handleLogout = () => {
  //   if (!auth) navigate('/');
  //   else {
  //     // logout function to be implemented
  //   }
  // };

  const list = () => (
    <Box
      sx={{ width: 240 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List component="nav" disablePadding>
        {linkItems.map(({ id, name, to, icon }) => (
          <ToolTip
            key={id}
            title={name}
            placement="right"
            sx={{ width: '100%' }}
            component={
              <ListItemButton
                component={Link}
                to={to}
                selected={selectedItem(to)}
                divider
              >
                <ListItemIcon sx={colorStyles}>{icon}</ListItemIcon>
                <ListItemText primary={name} sx={colorStyles} />
              </ListItemButton>
            }
          />
        ))}
      </List>
      <List
        subheader={
          drawerOpen && <ThemeListSubheader>Theme Mode</ThemeListSubheader>
        }
        disablePadding
      >
        <ListItem divider disableGutters disablePadding={!drawerOpen}>
          {drawerOpen ? (
            <ToggleButtonGroup
              value={alignment}
              onChange={handleThemeChange}
              exclusive
              fullWidth
              aria-label="theme-modes"
              sx={(theme) => toggleButtonGroupStyles(theme)}
            >
              {themeItems.map(({ id, name, mode, icon }) => (
                <ToggleButton
                  key={id}
                  value={name}
                  aria-label={name}
                  size="medium"
                  disabled={themeMode === mode}
                  selected={themeMode === mode}
                  onClick={selectedTheme(mode)}
                  sx={(theme) => toggleButtonStyles(theme)}
                >
                  {icon}
                  <ToggleButtonText>{name}</ToggleButtonText>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          ) : (
            <ToolTip
              title={themeText}
              placement="right"
              sx={{ width: '100%' }}
              component={
                <ListItemButton onClick={toggleDrawer(false)}>
                  <ListItemIcon sx={colorStyles}>
                    {themeMode === 'light'
                      ? themeItems[0].icon
                      : themeItems[2].icon}
                  </ListItemIcon>
                  <ListItemText primary={themeText} sx={colorStyles} />
                </ListItemButton>
              }
            />
          )}
        </ListItem>
        {/* <ToolTip
            title={authText}
            placement="right"
            sx={{ width: '100%' }}
            component={
              <ListItemButton onClick={handleLogout} divider>
                <ListItemIcon>
                  {auth ? (
                    <Logout sx={colorStyles} />
                  ) : (
                    <Login sx={colorStyles} />
                  )}
                </ListItemIcon>
                <ListItemText primary={authText} sx={colorStyles} />
              </ListItemButton>
            }
          /> */}
      </List>
    </Box>
  );

  return (
    <Box component="div">
      <Drawer anchor={'left'} open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
