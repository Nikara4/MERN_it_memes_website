import { Button, Typography, AppBar, Container, Toolbar } from '@mui/material';
import { styles } from './styles';

// import headerImg from '../../public/imgs/static-assets-upload7190845261214905066.webp';

const Header = () => {
  return (
    <AppBar style={styles.appBar} position='static' color='inherit'>
      <div style={styles.brandContainer}>
        <Typography to='/' style={styles.heading} variant='h3' align='center'>
          Mememizm
        </Typography>
        {/* <img style={styles.image} src={headerImg} alt='memories' height='60' /> */}
      </div>
    </AppBar>
  );
};

export default Header;
