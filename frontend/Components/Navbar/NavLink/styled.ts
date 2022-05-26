import {
  MenuItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavMenuItem = styled(MenuItem)(() => ({
  padding: 0,
}));

export const NavItemButton = styled(ListItemButton)(({ theme }) => ({
  overflow: 'hidden',
  background: 'linear-gradient(to right, #50C878, #00A36C 50%, #1D1D1D 50%)',
  backgroundSize: '200% 100%',
  backgroundPosition: '100%',
  transition: 'background-position 225ms ease',
  padding: '5%',
  '&:hover': {
    backgroundPosition: '0 100%',
  },
  [theme.breakpoints.down('lg')]: {
    background: 'transparent',
    '&:hover': {
      backgroundPosition: 'transparent',
    },
  },
  '@media (max-width: 850px) and (orientation: landscape)': {
    padding: '3% 5%',
},
}));

export const NavItemIcon = styled(ListItemIcon)(() => ({
  minWidth: '40px !important',
  '@media (max-width: 850px) and (orientation: landscape)': {
    minWidth: '35px !important',
    '& svg': { fontSize: '1.3rem !important' },
  },
}));

export const NavItemText = styled(ListItemText)(() => ({
  '& span': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: 300,
  },
  '@media (max-width: 768px) and (orientation: landscape)': {
    '& span': {
      fontSize: 14,
    },
}
}));
