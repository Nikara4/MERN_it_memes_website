/* eslint-disable @next/next/no-img-element */
import useStyles from './styles';
import { useState } from 'react';
import Link from 'next/link';
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
  CardMedia,
  Menu as NavMenu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Menu, Close, Search, AccountCircle } from '@mui/icons-material';

interface HeaderMobile {
  showMobileMenu: boolean;
  isMobile: boolean;
  setShowMobileMenu: Function;
}

const newLocal =
  'https://raw.githubusercontent.com/Nikara4/MERN_it_memes_website/auth/frontend/public/imgs/code.png';

const Header = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: HeaderMobile) => {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const user: any = null;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' className={classes.headerAppBar}>
        <Toolbar className={classes.headerToolbar}>
          {isMobile && (
            <Button
              className={classes.navButton}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {!showMobileMenu ? <Menu /> : <Close />}
            </Button>
          )}
          <Link href='/' passHref>
            <CardMedia
              component='img'
              className={classes.image}
              src={newLocal}
              title='IT icon'
            />
          </Link>
          <Typography
            className={classes.headerTitle}
            variant='h6'
            noWrap
            component='div'
          >
            Memes from IT
          </Typography>
          {!isMobile ? (
            <div className={classes.headerSearch}>
              <div className={classes.headerSearchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                className={classes.headerSearchInput}
              />
            </div>
          ) : null}
          <Box sx={{ display: 'flex' }}>
            <Link href='/auth' passHref>
              <Button
                className={classes.loginButton}
                size='small'
                color='inherit'
              >
                {!isMobile ? (
                  <>
                    <AccountCircle />
                    &nbsp;Login
                  </>
                ) : (
                  <AccountCircle />
                )}
              </Button>
            </Link>
            {auth && (
              <>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  {user.result.imgUrl ? (
                    <Avatar
                      className={classes.avatar}
                      alt={user.result.name}
                      src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
                    />
                  ) : (
                    <AccountCircle />
                  )}
                  {/* src={user.result.imgUrl} */}
                </IconButton>
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
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </NavMenu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
