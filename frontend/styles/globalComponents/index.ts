import {
  Box,
  DialogTitle,
  TextField,
  Button,
  Typography,
  FormControl
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormTitle = styled(DialogTitle)(({ theme }) => ({
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

export const Control = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& div div input ': {
    color: '#F9F6EE',
    fontSize: '18px',
    fontFamily: 'Poppins, sans-serif',
  },
  [theme.breakpoints.down('lg')]: {
    '& div div input ': {
      fontSize: '14px',
      padding: '10px',
    },
  },
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
  width: '95%',
  margin: 15,
  '& label': {
    fontWeight: 300,
    fontSize: 16,
    color: '#F9F6EE',
    fontFamily: 'Poppins, sans-serif',
  },
  [theme.breakpoints.down('lg')]: {
    '& label': {
      fontSize: 14,
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    '& label': {
      fontSize: 16,
    },
  },
}));

export const FormButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: '#F9F6EE',
  margin: '0 50px 10px 50px',
  padding: '5px 0',
  fontSize: '18px',
  flexBasis: '50%',
  transition: '0.1s',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  border: '1px solid #F9F6EE',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: '#50C878',
    borderColor: '#50C878',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '0 70px 10px 70px',
    padding: '0',
    fontSize: '16px',
    '&:hover': {
      border: '1px solid #F9F6EE',
      color: '#F9F6EE',
      backgroundColor: 'transparent',
    },
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 30px 10px 30px',
  },
}));

export const FormFileBox = styled(Box)(({ theme }) => ({
  fontWeight: 300,
  width: '95%',
  cursor: 'pointer',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  margin: '15px',
  '& input': {
    fontSize: '16px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    cursor: 'none',
    '& input': {
      fontSize: '14px',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    cursor: 'none',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '18px',
  fontWeight: 300,
  lineHeight: '30px',
  margin: '10px 10px 10px 0',
  '& a': {
    color: '#50C878',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
    margin: '0 auto',
    width: '100%',
    cursor: 'none',
    '& input': {
      fontSize: '14px',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    cursor: 'none',
  },
}));
