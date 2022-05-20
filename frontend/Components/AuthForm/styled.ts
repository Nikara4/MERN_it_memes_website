import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormTitle = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontSize: 20,
  fontFamily: 'Poppins, sans-serif',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 600,
  color: '#F9F6EE',
  [theme.breakpoints.down('lg')]: {
    fontSize: 18,
  },
}));

export const AuthButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: '#F9F6EE',
  margin: '10px auto',
  padding: '5px 0',
  fontSize: '18px',
  width: '90%',
  transition: '0.1s',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  border: '1px solid #F9F6EE',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: '#50C878',
    borderColor: '#50C878',
  },
  // [theme.breakpoints.down('lg')]: {
  //   margin: '0 70px 10px 70px',
  //   padding: '0',
  //   fontSize: '16px',
  //   '&:hover': {
  //     border: '1px solid #F9F6EE',
  //     color: '#F9F6EE',
  //     backgroundColor: 'transparent',
  //   },
  // },
  // [theme.breakpoints.down('md')]: {
  //   margin: '0 30px 10px 30px',
  // },
}));

export const SwitchButton = styled(Button)(({ theme }) => ({
  fontSize: '14px',
  transition: '0.1s',
  fontFamily: 'Poppins, sans-serif',
  color: '#F9F6EE',
  '&:hover': {
    color: '#50C878',
  },
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
}));
