import { Paper, Box, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormPaper = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  fontFamily: 'Poppins, sans-serif',
  borderRadius: '0',
  backgroundColor: 'transparent',
  marginLeft: 0,
  width: '100%',
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
  '& .MuiInputBase-root:after': {
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
}));

export const SubmitBox = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '10px 0',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
}));

export const SuccessAlert = styled(Alert)(({ theme }) => ({
backgroundColor: '#2E7D32',
}));
