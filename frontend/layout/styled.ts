import { Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Container)(({ theme }) => ({
  marginTop: '10vh',
  [theme.breakpoints.down('xl')]: {
    marginTop: '15vh',
    padding: '0',
  },
  '@media (max-width: 850px) and (orientation: landscape)': {
    marginTop: '20vh',
  }
}));

export const LayoutGridContainer = styled(Grid)(({ theme }) => ({
  maxWidth: 1200,
  justifyContent: 'center',
  margin: '0px auto',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'space-between'
  },
}));

export const LayoutMenuItem = styled(Grid)(({ theme }) => ({
  minWidth: '20%',
  marginRight: '5%',
  [theme.breakpoints.down('lg')]: {
    flexBasis: '30%',
    maxWidth: '30%',
    padding: 0,
  },
}));

export const LayoutGridItem = styled(Grid)(({ theme }) => ({
  minWidth: '70%',
  padding: 0,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '65%',
    minWidth: '50%'
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '100% !important',
    padding: '0 !important',
  },
}));

