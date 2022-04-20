import { Typography, AppBar } from '@mui/material';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' color='inherit' className={classes.appBar} >
        <Typography variant='h3' align='center' className={classes.heading}>
          Mememizm ( ͡° ͜ʖ ͡°)
        </Typography>
        {/* <img src='' src={memes} height='60' /> */}
    </AppBar>
  );
};

export default Header;
