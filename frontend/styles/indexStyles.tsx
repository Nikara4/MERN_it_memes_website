import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapperContainer: {
    maxWidth: 1200,
    marginTop: '100px'
  },
  wrapperGridItem: {
    minWidth: '70%',
  },
  mainGridContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: 10,
  },
  actionDiv: {
    textAlign: 'center',
  },
  gridItem: { padding: '15px !important' },
  mainGridItem: {},
  '@media (max-width: 1024px)': {
    wrapperContainer: {
      marginTop: '80px'
    },
  },
  '@media (max-width: 915px)': {
    wrapperContainer: {
      marginTop: '60px'
    },
  },
  '@media (max-width: 899px)': {
    wrapperContainer: {
      marginTop: '10px'
    },
    wrapperGridItem: {
      minWidth: '90%',
      marginTop: '65px'
    },
    mainGridItem: {
      width: '95vw',
    },
  },
});
