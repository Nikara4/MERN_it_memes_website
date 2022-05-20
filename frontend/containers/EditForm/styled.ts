import {
  Dialog,
  DialogContent
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const EditDialog = styled(Dialog)(({ theme }) => ({
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
    color: '#F9F6EE',
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDialog-paper': {
      width: '100vw',
      margin: 0,
    },
  },
}));

export const EditDialogContent = styled(DialogContent)(({theme}) => ({
padding: '0 20px',
margin: 10,
[theme.breakpoints.down('md')]: {
      padding: 10,
      margin: 0,
  },
  }));


