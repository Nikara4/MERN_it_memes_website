import { useState } from 'react';
import Link from 'next/link';
import decode from 'jwt-decode';
import {
  Box,
  IconButton,
  // Menu as NavMenu,
  // MenuItem,
  Avatar,
} from '@mui/material';
import { Menu, Close, Search, Login, Logout } from '@mui/icons-material';

import { useAuthState } from '../../resources/context/auth';
import { SearchBox, ProfileBox } from './styled-comp';
import {
  HeaderAppBar,
  HeaderToolbar,
  HeaderButtonNav,
  HeaderCardMedia,
  HeaderTypography,
  HeaderButtonLogin,
  ProfileTypography,
  SearchIconBox,
  SearchInputBase,
} from './styled';
import { HeaderProps } from '../../resources/interfaces';
import userIcon from '../../public/imgs/user.png';
import logoIcon from '../../public/imgs/code.png';

const Header = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isLoggedIn, userInfo, token, logout } = useAuthState();

  if (token) {
    const decodedToken: any = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar position='fixed'>
        <HeaderToolbar>
          {isMobile && (
            <HeaderButtonNav onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {!showMobileMenu ? <Menu /> : <Close />}
            </HeaderButtonNav>
          )}
          <Link href='/' passHref>
            <HeaderCardMedia
              //  @ts-ignore
              component='img'
              src={logoIcon.src}
              title='IT icon'
            />
          </Link>
          <HeaderTypography variant='h6' noWrap>
            Memes from IT
          </HeaderTypography>
          <SearchBox>
            <SearchInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconBox>
              <Search />
            </SearchIconBox>
          </SearchBox>
          {isLoggedIn ? (
            <ProfileBox>
              <ProfileTypography variant='h6'>
                {userInfo?.userName}
              </ProfileTypography>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
                sx={{ padding: '12px 25px' }}
              >
                <Avatar
                  alt={userInfo?.userName}
                  src={userInfo?.imageUrl ? userInfo?.imageUrl : userIcon.src}
                />
              </IconButton>
              <HeaderButtonLogin onClick={logout}>
                <Logout />
              </HeaderButtonLogin>
            </ProfileBox>
          ) : (
            <ProfileBox>
              <Link href='/auth' passHref>
                <HeaderButtonLogin size='small' color='inherit'>
                  {!isMobile ? 'Login' : <Login />}
                </HeaderButtonLogin>
              </Link>
            </ProfileBox>
          )}
          {/* function under development
             <NavMenu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>My memes</MenuItem>
            </NavMenu> */}
        </HeaderToolbar>
      </HeaderAppBar>
    </Box>
  );
};

export default Header;
