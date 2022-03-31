import NavLink from './NavLink/NavLink';
import { Box, List } from '@mui/material';
import { styles } from './styles';
import {
  HomeOutlined,
  LightbulbOutlined,
  MenuOutlined,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box style={styles.box} sx={{ width: '100%', maxWidth: 360 }}>
      <nav>
        <List>
          <NavLink to='/' icon={<HomeOutlined />} path='Home' />
          <NavLink to='/about' icon={<LightbulbOutlined />} path='About' />
          <NavLink to='/' icon={<MenuOutlined />} path='Upload a meme' />
          <NavLink to='/' icon={<MenuOutlined />} path='Generate a meme' />
          <NavLink
            to='/'
            icon={<MenuOutlined />}
            path='Subscribe to weekly mail'
          />
        </List>
      </nav>
    </Box>
  );
};

export default Navbar;
