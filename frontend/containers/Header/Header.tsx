/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
import { HeaderProps } from '../../resources/interfaces';

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
  const router = useRouter();  
  const { userInfo, isLoggedIn, token, logoutUser } = useAuthState();
  // const logout = useCallback(() => {
  //   dispatch({ type: 'LOGOUT' });
  //   router.push('/');
  //   setUserInfo(null);
  // }, [dispatch, router]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     userProfile = localStorage.getItem('profile');
  //   }

  //   const user = userProfile ? JSON.parse(userProfile) : null;


  //   setUserInfo(user);
  //   console.log(userInfo)
  // }, []);

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
                  {userInfo?.result?.userName}
                </ProfileTypography>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <Avatar
                    alt={userInfo?.result?.name}
                    src={userInfo?.result?.imageUrl}
                  >
                    {userInfo?.result?.userName.charAt(0)}
                  </Avatar>
                </IconButton>
                <HeaderButtonLogin onClick={logoutUser}>
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
