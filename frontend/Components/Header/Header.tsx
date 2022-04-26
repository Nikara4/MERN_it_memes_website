import useStyles from './styles';
import { Typography, Container } from '@mui/material';


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
    <Container maxWidth="xl" className={classes.container} >
        <Typography variant='h3' align='center' className={classes.heading}>
          IT Memes world - world full of IT Memes
        </Typography>
        {/* <img src='' src={memes} height='60' /> */}
    </Container>
    </div>
  );
};

export default Header;
