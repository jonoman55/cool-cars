import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Drawer (Sidebar) Width
 */
const drawerWidth = 240;

/**
 * Styled AppBar
 */
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'inherit',
  }),
}));

/**
 * Styled Toolbar
 */
export const Toolbar = styled(MuiToolbar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
