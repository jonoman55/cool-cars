import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial App State
 */
const initialState = {
  user: {
    firstName: 'Kylee',
    lastName: 'Murray',
    username: '@kmurray',
  },
  drawerOpen: false,
};

/**
 * App Slice
 */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
