import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapperContainer: {
    maxWidth: 1200,
  },
  mainGridItem:{
    minWidth: '70%',
  },
    mainContainer: {
      display: "flex",
      alignItems: "center",
    },
    smMargin: {
      margin: 10,
    },
    actionDiv: {
      textAlign: "center",
    },
    gridItem: {padding: '15px !important'},
    '@media (max-width: 1200px)': {
      mainGridItem:{
        minWidth: '75%',
      },
    }
  });