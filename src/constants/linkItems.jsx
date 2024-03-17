// NOTE: More icons can be found at the link below
// DOCS: https://mui.com/material-ui/material-icons/

/* eslint-disable no-unused-vars */
import HomeIcon from '@mui/icons-material/Home';
import LookFeelIcon from '@mui/icons-material/Visibility';
import DesignIcon from '@mui/icons-material/DirectionsCar';
import SpecsIcon from '@mui/icons-material/Settings';
import PrototypeIcon from '@mui/icons-material/DesignServices';

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
