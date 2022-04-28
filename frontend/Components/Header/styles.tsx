import { createUseStyles } from 'react-jss';

export default createUseStyles({
  headerAppBar: {
    backgroundColor: '#E5E4E2',
    justifyContent: 'center',
  },
  headerToolbar: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    padding: '0 5px',
    maxWidth: '1200px',
    justifyContent: 'space-between',
  },
  navButton: {
    minWidth: 0,
    padding: 0,
    '& svg': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 36
    }
  },
  headerTitle: {
    fontSize: '32px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    flexBasis: '80%',
  },
  headerSearch: {
    flexBasis: '25%',
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
    right: '0',
  },
  headerSearchInput: {
    '& input': {
      padding: '7px 10px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '13px',
    },
  },
  headerProfileIcon: {
    flexBasis: '7%'
  },
  '@media (max-width: 1024px) and (orientation: landscape)': {
    headerSearchInput: {
      '& input': {
        padding: '5px 10px',
        fontSize: '13px',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    headerTitle: {
      fontSize: '22px',
    },
  },
  '@media (max-width: 915px) and (orientation: landscape)': {
    headerAppBar: {
      height: '10vh',
    },
  },
  '@media (max-width: 900px) and (orientation: landscape)': {
    headerAppBar: {
      height: '15vh',
    },
    headerTitle: {
      fontSize: '28px',
    },
  },
  '@media (max-width: 899px) and (orientation: portrait)': {
    headerAppBar: {
      height: '6vh',
    },
    headerTitle: {
      fontSize: '24px',
      flexBasis: '55%'
    },
  },
  '@media (max-width: 375px) and (orientation: portrait)': {
    headerAppBar: {
      height: '8vh',
    },
  },
});
