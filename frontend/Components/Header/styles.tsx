import { createUseStyles } from 'react-jss';

export default createUseStyles({
  headerWrapper: {
    width: '100%',
    height: '5vh',
    marginBottom: 50,
  },
  headerAppBar: {
    height: 'inherit',
    backgroundColor: '#E5E4E2',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerToolbar: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto'
  },
  headerSearch: {
    flexBasis: '22%',
    position: 'relative',
    marginLeft: '0',
    marginRight: '20px',
    borderRadius: '7px',
    backgroundColor: 'rgba(250, 249, 246, 0.6)',
    '&:hover': {
      backgroundColor: 'rgba(250, 249, 246, 1)',
    },
  },
  headerSearchIcon: {
    height: '100%',
    display: 'flex',
    padding: '10px',
    position: 'absolute',
    alignItems: 'center',
    pointerEvents: 'none',
    justifyContent: 'center',
    right: '0'
  },
  headerSearchInput: {
    '& input': {
      padding: '7px 10px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '13px'
  },
},
  headerTitle: {
    fontSize: '32px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    flexBasis: '40%'
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
