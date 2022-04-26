import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '20vh',
    backgroundColor: '#E5E4E2',
    marginBottom: 50,
  },
  container: {
    margin: 0,
  },
  heading: {
    position: 'absolute',
    bottom: 20,
    left: 350,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 38,
    fontWeight: 600,
    textAlign: 'left',
  },
  image: {
    marginLeft: '15px',
  },
  '@media (max-width: 640px)': {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
    heading: {
      fontSize: 40,
    },
    image: {
      height: 40,
    },
  },
});
