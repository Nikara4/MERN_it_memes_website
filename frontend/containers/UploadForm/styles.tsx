import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
    },
    '& .css-ghsjzk-MuiInputBase-root-MuiInput-root:before':{
      borderBottom: '1px solid #F9F6EE'
    },
    '& .css-ghsjzk-MuiInputBase-root-MuiInput-root:after':{
      borderBottom: '1px solid #F9F6EE'
    },
    '& .css-z5e0z9-MuiFormLabel-root-MuiInputLabel-root':{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 300,
    },
    '& .Mui-focused': {
      fontFamily: 'Poppins, sans-serif',
      color: '#F9F6EE',
      fontWeight: 300,
    },
  },
  paper: {
    boxShadow: 'none',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '0',
    backgroundColor: 'transparent',
    marginLeft: 30,
    width: '100%',
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
      fontSize: 14,
      color: '#F9F6EE',
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
    margin: '0 25px',
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
    width: '97%',
    cursor: 'pointer',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    '& input': {
      fontSize: '16px',
    },
  },
  '@media (max-width: 899px)': {
    paper: {
      margin: '0 auto',
      width: '100%',
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
        fontSize: 14,
        color: '#F9F6EE',
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
      margin: '0 25px',
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
      width: '97%',
      cursor: 'pointer',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
      '& input': {
        fontSize: '16px',
      },
    },
  }
});
