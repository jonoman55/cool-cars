/* eslint-disable no-unused-vars */
import {
  Home as HomeIcon,
  AccountCircle as ProfileIcon,
  DirectionsCar as DesignIcon,
  Handyman as SpecsIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

/**
 * App Navigation Link Items
 */
export const linkItems = [
  {
    id: 0,
    name: 'Home',
    description: 'Home Page',
    to: '/',
    icon: <HomeIcon />,
  },
  {
    id: 1,
    name: 'Design',
    description: 'Design Page',
    to: '/design',
    icon: <DesignIcon />,
  },
  {
    id: 2,
    name: 'Specs',
    description: 'Specs Page',
    to: '/specs',
    icon: <SpecsIcon />,
  },
  // {
  //   id: 4,
  //   name: 'Profile',
  //   description: 'Profile Page',
  //   to: '/profile',
  //   icon: <ProfileIcon />,
  // },
];

/**
 * App Authentication Link Items
 */
export const authItems = [
  {
    id: 3,
    name: 'login',
    description: 'Login',
    to: '/login',
    icon: <LoginIcon />,
  },
  {
    id: 4,
    name: 'logout',
    description: 'Logout',
    to: '/login',
    icon: <LogoutIcon />,
  },
];
