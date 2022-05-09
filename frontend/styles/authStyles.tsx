import { createUseStyles } from 'react-jss';

export default createUseStyles({
  paper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  root: {
    '& .MuiTextField-root': {
      margin: 10,
    },
  },
  avatar: {
    margin: 10,
    backgroundColor: 'transparent',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 10,
  },
  submit: {
    margin: '10px 5px',
  },
  googleButton: {
    marginBottom: 10,
  },
  input: {}
});