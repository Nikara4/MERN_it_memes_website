import { Box } from '@mui/material';
import {
  HomeOutlined,
  LightbulbOutlined,
  FileUploadOutlined,
  BorderColorOutlined,
  CollectionsOutlined,
  EmailOutlined,
  Search,
} from '@mui/icons-material';

import NavLink from './NavLink/NavLink';
import {
  NavMainBox,
  TitleTypography,
  NavMenuList,
  NavSearchBox,
  NavSearchIconBox,
  NavSearchInputBase,
} from './styled';

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
  return (
    <>
      {isMobile && showMobileMenu && (
        <NavMainBox sx={{ width: '100%', maxWidth: 360 }}>
          <NavSearchBox>
            <NavSearchInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
            <NavSearchIconBox>
              <Search />
            </NavSearchIconBox>
          </NavSearchBox>
          <NavMenuList>
            <NavLink
              to='/'
              icon={<HomeOutlined />}
              path='Home'
              setShowMobileMenu={setShowMobileMenu}
            />
            <NavLink
              to='/about'
              icon={<LightbulbOutlined />}
              path='About'
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
          </NavMenuList>
        </NavMainBox>
      )}
      {!isMobile && (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <TitleTypography variant='h6' gutterBottom>
            menu
          </TitleTypography>
          <NavMenuList>
            <NavLink to='/' icon={<HomeOutlined />} path='Home' />
            <NavLink to='/about' icon={<LightbulbOutlined />} path='About' />
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
          </NavMenuList>
        </Box>
      )}
    </>
  );
};

export default Navbar;
