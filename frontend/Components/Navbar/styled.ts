import {
  Box,
  Typography,
  MenuList,
  MenuItem,
  InputBase
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavMainBox = styled(Box)(() => ({
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

export const NavSearchBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexBasis: '4%',
  margin: '30% 10px 0 10px',
  borderRadius: '7px',
  backgroundColor: 'rgba(250, 249, 246, 0.4)',
  zIndex: '2',
  '&:hover': {
    backgroundColor: 'rgba(250, 249, 246, 0.5)',
  },
  '& input::placeholder': {
    color: '#F9F6EE',
  },
  '@media (max-width: 850px) and (orientation: landscape)': {
    margin: '17% 10px 0 10px',
  }
}));

export const NavSearchIconBox = styled(Box)(() => ({
  display: 'flex',
  flexBasis: '15%',
  alignItems: 'center',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  '& svg': {
    color: 'white',
    display: 'block',
  },
}));

export const NavSearchInputBase = styled(InputBase)(() => ({
  flexBasis: '85%',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  zIndex: '2',
  '& input': {
    padding: '5px 10px'
  },
}));
