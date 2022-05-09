import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapperContainer:{
    marginTop: '10vh',
  },
  wrapperGrid: {
    maxWidth: 1200,
    justifyContent: 'center',
    margin: '0px auto',
    width: '100%'
  },
  wrapperMenuItem: {
    minWidth: '20%',
    marginRight: '5%'
  },
  wrapperGridItem: {
    minWidth: '70%',
    paddingLeft: '0!important',
    padding: 0,
  },
  mainGridContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    margin: 0,
  },
  smMargin: {
    margin: 10,
  },
  actionDiv: {
    textAlign: 'center',
  },
  gridItem: {
    padding: '15px !important',
    width: '100%' 
  },
  mainGridItem: {
    padding: '0 !important',
  },
  '@media (max-width: 915px) and (orientation: landscape)': {
    wrapperContainer:{
      marginTop: '15vh',
    },
  },
  '@media (max-width: 899px)': {
    wrapperContainer:{
      marginTop: '0',
      paddingLeft: '9px'
    },
    wrapperGridItem: {
      minWidth: '100%',
      marginTop: '65px'
    },
    mainGridItem: {
      width: '95vw',
    },
  },
});
