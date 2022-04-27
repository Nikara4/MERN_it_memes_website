import useStyles from './styles';
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
} from '@mui/material';

import { Search, AccountCircle } from '@mui/icons-material';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerWrapper}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static' className={classes.headerAppBar}>
            <Toolbar className={classes.headerToolbar}>

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
              <Box sx={{ flexGrow: 1 }} />
              <Typography
                className={classes.headerTitle}
                variant='h6'
                noWrap
                component='div'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Memes from IT
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
    </div>
  );
};

export default Header;
