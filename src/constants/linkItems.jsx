/* eslint-disable no-unused-vars */
import {
  Home as HomeIcon,
  Visibility as LookFeelIcon,
  DirectionsCar as DesignIcon,
  Settings as SpecsIcon,
  DesignServices as PrototypeIcon,
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
  {
    id: 3,
    name: 'Prototype',
    description: 'Prototype Page',
    to: '/proto',
    icon: <PrototypeIcon />,
  },
  {
    id: 4,
    name: 'Look & Feel',
    description: 'Look And Feel Page',
    to: '/lookfeel',
    icon: <LookFeelIcon />,
  },
];
