/* eslint-disable @next/next/no-img-element */
import useStyles from './styles';
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
  CardMedia,
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
  const classes = useStyles();

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
          <CardMedia
            component='img'
            className={classes.image}
            src={newLocal}
            title='IT icon'
          />
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
          <Box sx={{ display: 'flex' }} className={classes.headerProfileIcon}>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
