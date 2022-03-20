import NavLink from './NavLink/NavLink';
import { Box, List } from '@mui/material';
import { styles } from './styles';

const NavMenu = () => {
  return (
    <Box
      style={styles.box}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
    >
      <nav aria-label='main mailbox folders'>
        <List>
          <NavLink to='/' icon='>' path='Home' />
          <NavLink to='/about' icon='>' path='About' />
          <NavLink to='/' icon='>' path='Upload a meme' />
          <NavLink to='/' icon='>' path='Generate a meme' />
          <NavLink to='/' icon='>' path='Subscribe to weekly mail' />
        </List>
      </nav>
    </Box>
  );
};

export default NavMenu;
