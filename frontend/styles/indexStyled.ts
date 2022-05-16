import {
    Container,
    Grid
  } from '@mui/material';
  import { styled } from '@mui/material/styles';

  export const MainContainer = styled(Container)(({ theme }) => ({
    marginTop: 0,
    padding: 0,
    [theme.breakpoints.down('md')]: {
        width: '90%'
    },
  }));

  export const MainGrid = styled(Grid)(() => ({
    marginLeft: 0,
    width: '100%'
  }));
  
  export const GridItem = styled(Grid)(({ theme }) => ({
    padding: '0 !important',
    width: '100%' ,
    marginBottom: '10%',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      flexBasis: '4%',
    },
  }));