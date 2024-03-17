// TODO : Figure out why SnackbarProvider is causing the app to error out
// DOCS: https://notistack.com/getting-started

import { createRef, useCallback } from 'react';
import { Slide, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarProvider as NotistackProvider } from 'notistack';

/**
 * Snackbar Dismiss Icon Button
 */
const DismissIconButton = ({ onClick }) => (
  <IconButton size="small" onClick={onClick}>
    <CloseIcon fontSize="small" sx={{ color: 'common.white' }} />
  </IconButton>
);

/**
 * Default Snackbar Anchor Origin
 */
const defaultAnchorOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
};

/**
 * Notistack Context Provider
 */
export const SnackbarProvider = ({ children }) => {
  /**
   * Notistack Provider Ref
   */
  const notistackRef = createRef();

  /**
   * Dismiss Notistack Snackbar Notification Callback
   */
  const onClickDismiss = useCallback(
    (key) => () => notistackRef.current.closeSnackbar(key),
    [notistackRef]
  );

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={3}
      preventDuplicate={true}
      autoHideDuration={3000}
      TransitionComponent={Slide}
      hideIconVariant={false}
      disableWindowBlurListener={true}
      anchorOrigin={defaultAnchorOrigin}
      action={(key) => <DismissIconButton onClick={onClickDismiss(key)} />}
    >
      {children}
    </NotistackProvider>
  );
};
