import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';

import Sidebar from './Sidebar';
import ThemeSwitch from '../design/ThemeSwitch';
import MenuButton from '../design/MenuButton';
import { linkItems } from '../../constants';

const pages = linkItems.map((item) => item.name);

const Header = () => {
  const { drawerOpen } = useSelector((state) => state.app);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters id="back-to-top-anchor">
            {/* Large Screen Logo */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* Sidebar Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <MenuButton />
            </Box>

            {/* Small Screen Logo */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* Page Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: 'primary.contrastText',
                    display: 'block',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Theme Switch */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Switch Theme">
                <Box component="div">
                  <ThemeSwitch />
                </Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {drawerOpen && <Sidebar />}
    </>
  );
};

export default Header;
