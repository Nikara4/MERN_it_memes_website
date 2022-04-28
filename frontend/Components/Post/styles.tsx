import { createUseStyles } from 'react-jss';

export default createUseStyles({
  card: {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: 'transparent',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 0,
    boxShadow: 'none',
    color: 'black',
    '& button': {
      color: 'black',
      padding: 0,
      fontSize: '14px',
      transition: '0.2s',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',
      justifyContent: 'flex-start',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#009432',
      },
    },
  },
  tagsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    '& div': {
      padding: '1px 10px',
      backgroundColor: '#E5E4E2',
      cursor: 'pointer',
      transition: '0.2s',
      '&:hover': {
        backgroundColor: '#009432',
      },
    },
  },
  tags: {
    fontSize: '13px',
    lineHeight: '18px',
    fontFamily: 'Poppins, sans-serif',
    color: 'black',
    fontWeight: '600',
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  },
  media: {
    width: '100%',
    height: 'auto',
    paddingTop: '80%',
    backgroundSize: 'contain',
    cursor: 'pointer',
    transition: '0.1s',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '5px 0',
    '&::after': {
      width: '100%',
      margin: '5px auto',
      content: '""',
      borderBottom: '1px solid #71797E',
    },
  },
  overlay: {
    marginLeft: '0 !important',
    fontFamily: 'Poppins, sans-serif',
    '& button': {
      fontFamily: 'Poppins, sans-serif',
      alignItems: 'left',
      justifyContent: 'flex-start',
      padding: '4px 0',
      color: 'black',
      fontSize: 14,
      fontWeight: '600',
      transition: '0.2s',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#009432',
      },
    },
    '& p': {
      fontFamily: 'Poppins, sans-serif',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    '& p': { fontSize: 13, color: '36454F' },
  },
  title: {
    margin: '2px 0',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    transition: '0.2s',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
      color: '#009432',
    },
  },
  cardActions: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  overlay2: {
    marginLeft: '0 !important',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  '@media (max-width: 899px)': {
    card: {
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: 'transparent',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 0,
      boxShadow: 'none',
      color: 'black',
    },
  }
});
