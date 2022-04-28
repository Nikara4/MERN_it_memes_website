import useStyles from './styles';
import useStylesHeader from '../../components/Header/styles';


import useMobile from '../../utils/hooks/useMobile';
import NavLink from './NavLink/NavLink';
import { Box, InputBase, List, Typography } from '@mui/material';
import {
  HomeOutlined,
  LightbulbOutlined,
  FileUploadOutlined,
  BorderColorOutlined,
  CollectionsOutlined,
  EmailOutlined,
  Search,
} from '@mui/icons-material';

interface NavbarMenuMobile {
  showMobileMenu: boolean;
  isMobile: boolean;
}

const Navbar = ({ showMobileMenu, isMobile}: NavbarMenuMobile) => {

  const classes = useStyles();
  const classesHeader = useStylesHeader();

  return (
    <>
      {isMobile && showMobileMenu && (
        <Box
          sx={{ width: '100%', maxWidth: 360 }}
          className={classes.navMainBox}
        >
          <div className={classesHeader.headerSearch}>
                <div className={classesHeader.headerSearchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder='Search…'
                  inputProps={{ 'aria-label': 'search' }}
                  className={classesHeader.headerSearchInput}
                />
              </div>
          <nav>
            <List>
              <NavLink to='/' icon={<HomeOutlined />} path='Home' />
              <NavLink
                to='/about'
                icon={<LightbulbOutlined />}
                path='About us'
              />
              <NavLink
                to='/submit'
                icon={<FileUploadOutlined />}
                path='Upload a meme'
              />
              <NavLink
                to='/'
                icon={<BorderColorOutlined />}
                path='Generate a new meme'
              />
              <NavLink to='/' icon={<CollectionsOutlined />} path='Gallery' />
              <NavLink
                to='/'
                icon={<EmailOutlined />}
                path='Subscribe to weekly mail'
              />
            </List>
          </nav>
        </Box>
      )}
      {!isMobile && (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <Typography className={classes.title} variant='h6' gutterBottom>
            menu
          </Typography>
          <nav>
            <List>
              <NavLink to='/' icon={<HomeOutlined />} path='Home' />
              <NavLink
                to='/about'
                icon={<LightbulbOutlined />}
                path='About us'
              />
              <NavLink
                to='/submit'
                icon={<FileUploadOutlined />}
                path='Upload a meme'
              />
              <NavLink
                to='/'
                icon={<BorderColorOutlined />}
                path='Generate a new meme'
              />
              <NavLink to='/' icon={<CollectionsOutlined />} path='Gallery' />
              <NavLink
                to='/'
                icon={<EmailOutlined />}
                path='Subscribe to weekly mail'
              />
            </List>
          </nav>
        </Box>
      )}
    </>
  );
};

export default Navbar;
