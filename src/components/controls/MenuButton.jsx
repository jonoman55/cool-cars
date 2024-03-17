import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';

import { appActions } from '../../reducers/appSlice';

/**
 * Sidebar Menu Button
 */
const MenuButton = () => {
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.app);

  const handleDrawerClick = () => {
    dispatch(appActions.setDrawerOpen(true));
  };

  return (
    <IconButton
      aria-label="open drawer"
      onClick={handleDrawerClick}
      edge="start"
      sx={{
        color: 'primary.contrastText',
        marginRight: 5,
        ...(drawerOpen && { display: 'none' }),
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
