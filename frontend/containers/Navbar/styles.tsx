import { createUseStyles } from 'react-jss';

export default createUseStyles({
  title: {
    margin: 0,
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 600,
    color: 'black',
  },
  navMainBox: {
    top: '0',
    left: '0',
    width: '75vw',
    maxWidth: '100vw',
    height: '100vh',
    display: 'flex',
    zIndex: '1',
    position: 'fixed',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#E5E4E2',
    overflow: 'hidden',
  },
});
