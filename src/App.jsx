// DOCS: https://mui.com/material-ui/all-components/

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Routes from './routes';
import { GlobalStyles } from './theme';
import { useActiveTheme } from './hooks';

const App = () => {
  const theme = useActiveTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles mode={theme.palette.mode} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
