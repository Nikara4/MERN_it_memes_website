/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  Box,
  IconButton,
  Menu as NavMenu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Menu, Close, Search, AccountCircle } from '@mui/icons-material';
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
import decode from 'jwt-decode';

interface HeaderMobile {
  showMobileMenu: boolean;
  isMobile: boolean;
  setShowMobileMenu: Function;
}

const newLocal =
  'https://raw.githubusercontent.com/Nikara4/MERN_it_memes_website/auth/frontend/public/imgs/code.png';

let userProfile: any;

const Header = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: HeaderMobile) => {
  if (typeof window !== 'undefined') {
    userProfile = localStorage.getItem('profile');
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState(userProfile && JSON.parse(userProfile));
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(userProfile));
    // eslint-disable-next-line
  }, [router.route]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    router.push('/');
    setUser(null);
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
          <Box sx={{ display: 'flex', alignItems: 'center', flexBasis: '13%' }}>
            {user ? (
              <>
                <ProfileTypography variant='h6' style={{ fontSize: '18px' }}>
                  {user.result.userName}
                </ProfileTypography>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <Avatar alt={user?.result.name} src={user.result.imageUrl}>
                    {user?.result?.name.charAt(0)}
                  </Avatar>
                </IconButton>
              </>
            ) : (
              <Link href='/auth' passHref>
                <HeaderButtonLogin size='small' color='inherit'>
                  {!isMobile ? (
                    <>
                      <AccountCircle />
                      &nbsp;Login
                    </>
                  ) : (
                    <AccountCircle />
                  )}
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
              {/* <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>My memes</MenuItem> */}
              <MenuItem onClick={logout}>Logout</MenuItem>
            </NavMenu>
          </Box>
        </HeaderToolbar>
      </HeaderAppBar>
    </Box>
  );
};

export default Header;
