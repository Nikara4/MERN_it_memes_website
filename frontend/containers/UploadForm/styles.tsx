import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
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
      fontSize: '18px',
      fontFamily: 'Poppins, sans-serif',
    },
  },
  formTextField: {
    '& label': {
      fontSize: 14,
    },
  },
  formTitle: {
    margin: 0,
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 600,
    color: 'black',
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
    color: 'black',
    margin: '0 25px',
    padding: '5px 0',
    fontSize: '18px',
    flexBasis: '50%',
    transition: '0.2s',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    border: '1px solid black',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: '#009432',
      color: '#fff',
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
});
