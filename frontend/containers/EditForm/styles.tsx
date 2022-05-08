import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
      border: '1px solid #36454F',
    },
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
      border: '2px solid #A9A9A9',
      borderRadius: 0,
    },
    '& .Mui-focused': {
      color: '#F9F6EE',
    },
  },
  dialog: {
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      backgroundColor: '#1D1D1D',
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& div div input ': {
      color: '#F9F6EE',
      fontSize: '18px',
      fontFamily: 'Poppins, sans-serif',
    },
  },
  formTextField: {
    '& label': {
      fontWeight: 300,
      fontSize: 16,
      color: '#F9F6EE',
      fontFamily: 'Poppins, sans-serif',
    },
  },
  formTitle: {
    margin: 0,
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 600,
    color: '#F9F6EE',
  },
  formSubmit: {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
  formButton: {
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
      border: 'none',
    },
  },
  formFileInput: {
    fontWeight: 300,
    width: '95%',
    cursor: 'pointer',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    '& input': {
      fontSize: '16px',
    },
  },
  '@media (max-width: 1024px)': {
    formButton: {
      '&:hover': {
        border: '1px solid #F9F6EE',
        color: '#F9F6EE',
        backgroundColor: 'transparent',
      },
    },
  },
  '@media (max-width: 914px) and (orientation: landscape)': {
    form: {
      '& div div input ': {
        fontSize: '14px',
        padding: '10px'
      },
    },
    formTextField: {
      '& label': {
        fontSize: 14,
      },
    },
    formTitle: {
      fontSize: 18,
    },
    formButton: {
      margin: '0 70px 10px 70px',
      padding: '0',
      fontSize: '16px',
    },
    formFileInput: {
      width: '90%',
      cursor: 'none',
      '& input': {
        fontSize: '14px',
      },
    },
  },
  '@media (max-width: 768px)': {
    dialog: {
      '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
        width: '100vw',
        margin: 0,
      },
      '& .MuiDialogTitle-root+.css-ypiqx9-MuiDialogContent-root': {
        padding: 10,
      }
    },
    formTextField: {
      '& label': {
        fontSize: 16,
      },
    },
    formFileInput: {
      width: '90%',
      cursor: 'none',
    },
  },
});
