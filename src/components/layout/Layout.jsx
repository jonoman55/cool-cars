import Box from '@mui/material/Box';

import Header from './Header';
import BackToTop from './BackToTop';

export const Layout = ({ children }) => (
  <Box component="div">
    <Header />
    {children}
    <BackToTop />
  </Box>
);
