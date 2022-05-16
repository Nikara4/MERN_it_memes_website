import { Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Container)(({ theme }) => ({
  marginTop: '10vh',
  [theme.breakpoints.down('lg')]: {
    marginTop: '15vh',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
}));

export const LayoutGridContainer = styled(Grid)(() => ({
  maxWidth: 1200,
  justifyContent: 'center',
  margin: '0px auto',
  width: '100%',
}));

export const LayoutMenuItem = styled(Grid)(() => ({
  minWidth: '20%',
  marginRight: '5%',
}));

export const LayoutGridItem = styled(Grid)(({ theme }) => ({
  minWidth: '70%',
  padding: 0,
  [theme.breakpoints.down('md')]: {
    minWidth: '100% !important',
    padding: '0 !important',
  },
}));
