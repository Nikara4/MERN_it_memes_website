import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormInput = styled(TextField)(({ theme }) => ({
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
    '& .MuiDialog-paper': {
      backgroundColor: '#1D1D1D',
      margin: 0,
    },
    '& .MuiInputBase-root:before': {
      borderBottom: '1px solid #4B4B4B',
    },
    '& .MuiInputBase-root:hover:before': {
          borderBottom: '1px solid #F9F6EE !important',
    },
    '& .MuiInputBase-root:after':{
      borderBottom: '2px solid #50C878',
      borderRadius: 0,
    },
    '& .Mui-focused': {
      color: '#F9F6EE !important',
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiDialog-paper': {
        margin: '0 auto',
        width: '100%',
      },
    },
}))