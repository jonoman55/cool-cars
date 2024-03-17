import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CarIcon from '@mui/icons-material/DirectionsCar'

import { FlexBoxRow } from '../shared';
import { ToolTip } from '../controls/ToolTip';
import ThemeSwitch from '../controls/ThemeSwitch';
import { linkItems } from '../../constants';

/**
 * Header
 */
const Header = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters id="back-to-top-anchor" sx={{ width: '100%' }}>
        {/* Logo & Title */}
        <FlexBoxRow sx={{ ml: 3 }}>
          <CarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'default',
            }}
          >
            Vincere
          </Typography>
        </FlexBoxRow>

        {/* Menu Icon Button */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="nav-menu-icon"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          {/* Responsive Nav Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {linkItems.map(({ id, to, name, icon }) => (
              <MenuItem key={id}>
                <Button
                  startIcon={icon}
                  onClick={() => {
                    navigate(to);
                    handleCloseNavMenu();
                  }}
                  sx={{ color: 'primary.contrastText' }}
                >
                  {name}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Responsive Logo */}
        <CarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'default',
          }}
        >
          Vincere
        </Typography>

        {/* Navbar */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {linkItems.map(({ id, to, name }) => (
            <Button
              key={id}
              onClick={() => {
                navigate(to);
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: 'primary.contrastText', display: 'block' }}
            >
              {name}
            </Button>
          ))}
        </Box>

        {/* Theme Switch */}
        <Box sx={{ flexGrow: 0, mr: 3 }}>
          <ToolTip
            title="Switch Theme"
            placement="bottom"
            component={<ThemeSwitch />}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
