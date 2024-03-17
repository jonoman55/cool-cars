// TODO : Figure out how to get a temporary drawer connected to Header

import { Box } from '@mui/material';

import Header from './Header';
// import Sidebar from './Sidebar';
import BackToTop from './BackToTop';

export const Layout = ({ children }) => (
  <Box component="div">
    <Header />
    {/* <Sidebar /> */}
    {children}
    <BackToTop />
  </Box>
);
