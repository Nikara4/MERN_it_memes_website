/* eslint-disable @next/next/no-img-element */
import useStyles from './styles';
import Image from 'next/image'
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
  CardMedia
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

import { Search, AccountCircle } from '@mui/icons-material';

interface HeaderMobile {
  showMobileMenu: boolean;
  isMobile: boolean;
  setShowMobileMenu: Function;
}

const Header = ({
  showMobileMenu,
  isMobile,
  setShowMobileMenu,
}: HeaderMobile) => {
  const classes = useStyles();

  const newLocal = '../../public/imgs/code.png';
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
          <Typography
            className={classes.headerTitle}
            variant='h6'
            noWrap
            component='div'
            // sx={{ display: 'block' }}
          >
                  <CardMedia
                  component="img"
        className={classes.image}
        src={newLocal}
        title='IT icon'
      />
            {' '}
            Memes from IT
          </Typography>

          {!isMobile ? (
            <>
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
            </>
          ) : null}
          <Box sx={{ display: 'flex' }} className={classes.headerProfileIcon}>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              // aria-controls={menuId}
              aria-haspopup='true'
              // onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
          {renderMenu} */}
    </Box>
  );
};

export default Header;
