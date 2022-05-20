import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  CardMedia,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#4b4b4b !important',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    height: '10vh',
  },
  [theme.breakpoints.down('md')]: {
    height: '8vh',
  },
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '0 5px',
  maxWidth: '1200px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {},
}));

export const HeaderButtonNav = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: 0,
  '& svg': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 36,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '18%',
    justifyContent: 'flex-start',
  },
}));

export const HeaderCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '4% !important',
  margin: '10px 18px',
  filter:
    'invert(69%) sepia(45%) saturate(529%) hue-rotate(87deg) brightness(91%) contrast(87%)',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '10% !important',
  },
}));

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  flexBasis: '50%',
  [theme.breakpoints.down('lg')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeaderButtonLogin = styled(Button)(({ theme }) => ({
  color: '#F9F6EE',
  padding: 0,
  fontSize: 18,
  transition: '0.1s',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  justifyContent: 'flex-start',
  '&:hover': {
    color: '#50C878',
  },
  '& svg:hover': {
    color: '#50C878',
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-end',
    margin: '0 2px',
    '&:hover': {
      color: '#F9F6EE',
    },
    '& svg': {
      fontSize: 32,
    },
  },
}));

export const ProfileTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '300',
  flexBasis: '80%',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProfileBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  flexBasis: '15%',
  // [theme.breakpoints.down('lg')]: {
  //   height: '10vh',
  // },
  [theme.breakpoints.down('md')]: {
    margin: '0 !important',
    backgroundColor: 'transparent !important',
  },
}));
