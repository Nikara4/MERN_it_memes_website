import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1D1D1D',
    margin: 0,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDialog-paper': {
      width: '100vw',
      margin: 0,
    },
  },
}));

export const AuthDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '0 20px',
  margin: 10,
  [theme.breakpoints.down('md')]: {
    padding: 10,
    margin: 0,
  },
}));

export const AuthDialogContentText = styled(DialogContentText)(({ theme }) => ({
  color:  '#F9F6EE',
  fontFamily: 'Poppins, sans-serif',
  textAlign: 'center',
  margin: 10,
  [theme.breakpoints.down('md')]: {
    padding: 10,
    margin: 0,
  },
}));
