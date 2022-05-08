import useStyles from './styles';
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
import useStylesHeader from '../../components/Header/styles';
import NavLink from './NavLink/NavLink';

interface NavbarMenuMobile {
  showMobileMenu: boolean;
  isMobile: boolean;
  setShowMobileMenu: Function;
}

const Navbar = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: NavbarMenuMobile) => {
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
              <NavLink
                to='/'
                icon={<HomeOutlined />}
                path='Home'
                setShowMobileMenu={setShowMobileMenu}
              />
              <NavLink
                to='/about'
                icon={<LightbulbOutlined />}
                path='About us'
                setShowMobileMenu={setShowMobileMenu}
              />
              <NavLink
                to='/submit'
                icon={<FileUploadOutlined />}
                path='Upload a meme'
                setShowMobileMenu={setShowMobileMenu}
              />
              <NavLink
                to='/generate'
                icon={<BorderColorOutlined />}
                path='Generate a new meme'
                setShowMobileMenu={setShowMobileMenu}
              />
              <NavLink
                to='/gallery'
                icon={<CollectionsOutlined />}
                path='Gallery'
                setShowMobileMenu={setShowMobileMenu}
              />
              <NavLink
                to='/subscription'
                icon={<EmailOutlined />}
                path='Subscribe to weekly mail'
                setShowMobileMenu={setShowMobileMenu}
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
                to='/generate'
                icon={<BorderColorOutlined />}
                path='Generate a new meme'
              />
              <NavLink
                to='/gallery'
                icon={<CollectionsOutlined />}
                path='Gallery'
              />
              <NavLink
                to='/subscription'
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
