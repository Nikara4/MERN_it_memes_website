import {
  Box,
  Typography,
  MenuList,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavMainBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    top: '0',
    left: '0',
    width: '75vw',
    maxWidth: '100vw',
    height: '100vh',
    display: 'flex',
    zIndex: '1',
    position: 'fixed',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#4b4b4b',
    overflow: 'hidden',
  },
}));

export const TitleTypography = styled(Typography)(() => ({
  margin: 0,
  fontSize: 20,
  fontFamily: 'Poppins, sans-serif',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 600,
  color: '#F9F6EE',
}));

export const NavMenuList = styled(MenuList)(() => ({
  zIndex: '2'
}));

export const NavMenuItem = styled(MenuItem)(() => ({
}));
