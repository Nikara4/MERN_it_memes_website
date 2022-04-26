import useStyles from './styles';
import NavLink from './NavLink/NavLink';
import { Box, List, Typography } from '@mui/material';
import {
  HomeOutlined,
  LightbulbOutlined,
  FileUploadOutlined,
  BorderColorOutlined,
  CollectionsOutlined,
  EmailOutlined
} from '@mui/icons-material';

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
    <Typography className={classes.title} variant='h6' gutterBottom>
        menu
      </Typography>
      <nav>
        <List>
          <NavLink to='/' icon={<HomeOutlined />} path='Home' />
          <NavLink to='/about' icon={<LightbulbOutlined />} path='About us' />
          <NavLink to='/submit' icon={<FileUploadOutlined />} path='Upload a meme' />
          <NavLink to='/' icon={<BorderColorOutlined />} path='Generate a new meme' />
          <NavLink
            to='/'
            icon={<CollectionsOutlined />}
            path='Gallery'
          />
          <NavLink
            to='/'
            icon={<EmailOutlined />}
            path='Subscribe to weekly mail'
          />
        </List>
      </nav>
    </Box>
  );
};

export default Navbar;
