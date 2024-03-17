import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import createTheme from '@mui/material/styles/createTheme';

import { createPaletteMode } from '../theme';

/**
 * Active Theme Hook
 * @returns Theme
 */
export const useActiveTheme = () => {
  const mode = useSelector((state) => state.theme.darkMode);
  return useThemeMode(mode ? 'dark' : 'light');
};

/**
 * MUI Theme Mode Hook
 * @param mode PaletteMode
 * @returns Theme
 */
export const useThemeMode = (mode) => {
  return useMemo(() => createTheme(createPaletteMode(mode)), [mode]);
};
