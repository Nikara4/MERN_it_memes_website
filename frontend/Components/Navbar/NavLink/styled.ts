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
  
  export const NavItemButton = styled(ListItemButton)(({theme}) => ({
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
  }));

  export const NavItemIcon = styled(ListItemIcon)(() => ({
    minWidth: '40px',
  }));

  export const NavItemText = styled(ListItemText)(({theme}) => ({
    '& span': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 300,
      },
      [theme.breakpoints.down('md')]: {
      '& span': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
      }
    }
  }));