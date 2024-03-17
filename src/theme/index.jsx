import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

/**
 * Light Mode Scrollbar Styles
 */
const scrollBarsLight = {
  scrollbarColor: '#ededed #d2d2d2',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#d2d2d2',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#959595',
    minHeight: 24,
    border: '3px solid #d2d2d2',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#ededed',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#d2d2d2',
  },
};

/**
 * Dark Mode Scrollbar Styles
 */
const scrollBarsDark = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

/**
 * MUI Light Mode Palette Colors
 */
const light = {
  main: '#f2f2f2',
  light: '#ffffff',
  dark: '#bfbfbf',
  contrastText: '#000000',
};

/**
 * MUI Dark Mode Palette Colors
 */
const dark = {
  main: '#424242',
  light: '#6d6d6d',
  dark: '#1b1b1b',
  contrastText: '#ffffff',
};

/**
 * MUI Custom Palette Colors
 */
const custom = {
  palette: {
    orange: '#e25f22',
  },
};

/**
 * MUI Typography Options
 */
const typography = {
  fontFamily: ['Roboto', 'sans-serif'].join(','),
};

export const GlobalStyles = (mode) => (
  <MuiGlobalStyles
    styles={mode === 'light' ? scrollBarsLight : scrollBarsDark}
  />
);

/**
 * Create MUI Theme Palette
 * @param mode PaletteMode
 * @returns ThemeOptions
 */
export const createPaletteMode = (mode) => ({
  palette: {
    mode,
    primary: mode === 'light' ? light : dark,
    secondary: mode === 'light' ? dark : light,
  },
  custom,
  typography,
});
