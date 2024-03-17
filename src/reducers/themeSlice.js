import { createSlice } from '@reduxjs/toolkit';

/**
 * Get System Preference Theme
 * @returns true or false
 */
const getSystemPreference = () => {
  return window?.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Get Active Theme Mode
 *
 * Gets the theme from the browsers localStorage or system preferences
 * @returns true or false
 */
const getActiveTheme = () => {
  const theme = JSON.parse(localStorage.getItem(name) || '{}');
  if (typeof theme === 'object') {
    return getSystemPreference();
  }
  return Boolean(theme);
};

/**
 * Dark Theme (Theme Mode)
 */
const darkMode = getActiveTheme();

/**
 * Theme Mode
 */
const themeMode = darkMode ? 'dark' : 'light';

/**
 * Initial Theme State
 */
const initialState = {
  darkMode,
  themeMode,
};

/**
 * Theme Slice
 */
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Reset Theme State
     */
    reset: () => {
      return {
        ...initialState,
      };
    },
    /**
     * Switch Theme Action
     */
    switchThemeMode: (state, action) => {
      if (action?.payload === 'system') {
        state.darkMode = getSystemPreference();
      } else if (action?.payload === 'light') {
        state.darkMode = false;
      } else if (action?.payload === 'dark') {
        state.darkMode = true;
      } else {
        state.darkMode = !state.darkMode;
      }
      localStorage.setItem(name, state.darkMode.toString());
    },
    /**
     * Set Theme Mode
     */
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

/**
 * Theme Actions
 */
export const themeActions = themeSlice.actions;
/**
 * Theme Reducer
 */
export default themeSlice.reducer;
