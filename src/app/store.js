import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../reducers/appSlice';
import themeReducer from '../reducers/themeSlice';

/**
 * App Store
 */
export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});
