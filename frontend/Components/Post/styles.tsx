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
    color: '#F9F6EE',
    '& button': {
      color: '#F9F6EE',
      padding: 0,
      fontSize: '14px',
      transition: '0.1s',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',
      justifyContent: 'flex-start',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#50C878',
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
      transition: '0.1s',
      '&:hover': {
        backgroundColor: '#50C878',
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
      color: '#F9F6EE',
      fontSize: 14,
      fontWeight: '600',
      transition: '0.1s',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#50C878',
      },
    },
    '& p': {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 300
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    '& p': { fontSize: 13, color: '#F9F6EE' },
  },
  title: {
    margin: '2px 0',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    transition: '0.1s',
    cursor: 'pointer',
    color: '#F9F6EE',
    '&:hover': {
      color: '#50C878',
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
    tagsWrapper: {
      '& div': {
        padding: '1px 7px',
        backgroundColor: '#E5E4E2',
        '&:hover': {
          backgroundColor: '#E5E4E2',
        },
      },
    },
    tags: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '600',
    },
  title: {
    fontWeight: 400,
  },
}
});
