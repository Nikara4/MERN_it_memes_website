/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import decode from 'jwt-decode';
import { useAuthState } from '../../resources/context/auth';
import {
  Box,
  IconButton,
  Menu as NavMenu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Menu, Close, Search, Login, Logout } from '@mui/icons-material';

import {
  SearchBox,
  SearchIconBox,
  SearchInputBase,
} from '../../styles/globalComponents';
import {
  HeaderAppBar,
  HeaderToolbar,
  HeaderButtonNav,
  HeaderCardMedia,
  HeaderTypography,
  HeaderButtonLogin,
  ProfileTypography,
} from './styled';
import { HeaderProps, User } from '../../resources/interfaces';
const BASE_URL = 'http://localhost:5000';

const newLocal =
  'https://raw.githubusercontent.com/Nikara4/MERN_it_memes_website/auth/frontend/public/imgs/code.png';

const Header = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState(null);
const {     isLoggedIn,
  userInfo,
  token, logout } = useAuthState()
  // console.log(userInfo);



  if (token) {
    const decodedToken: any = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {/* @ts-ignore */}
            <HeaderCardMedia component='img' src={newLocal} title='IT icon' />
          </Link>
          <HeaderTypography variant='h6' noWrap>
            Memes from IT
          </HeaderTypography>
          {!isMobile ? (
            <SearchBox>
              <SearchInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconBox>
                <Search />
              </SearchIconBox>
            </SearchBox>
          ) : null}
          <Box sx={{ display: 'flex', alignItems: 'center', flexBasis: '10%' }}>
            {isLoggedIn ? (
              <>
                <ProfileTypography variant='h6' style={{ fontSize: '18px' }}>
                  {userInfo?.userName}
                </ProfileTypography>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <Avatar alt={userInfo?.userName} src={userInfo?.imageUrl}>
                    {userInfo?.userName.charAt(0)}
                  </Avatar>
                </IconButton>
                <HeaderButtonLogin onClick={logout}>
                  <Logout />
                </HeaderButtonLogin>
              </>
            ) : (
              <Link href='/auth' passHref>
                <HeaderButtonLogin size='small' color='inherit'>
                  {!isMobile ? 'Login' : <Login />}
                </HeaderButtonLogin>
              </Link>
            )}
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
            </NavMenu>
          </Box>
        </HeaderToolbar>
      </HeaderAppBar>
    </Box>
  );
};

export default Header;
