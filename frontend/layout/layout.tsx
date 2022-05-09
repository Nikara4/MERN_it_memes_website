import useStyles from '../styles/indexStyles';
import { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from '../state/Store';
import { Navbar } from '../components';
import { Header } from '../containers';
import useMobile from '../utils/hooks/useMobile';

function Layout({ children }: any) {
  const classes = useStyles();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useMobile();

  return (
    <Provider store={store}>
      <Header
        showMobileMenu={showMobileMenu}
        isMobile={isMobile}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Container
        maxWidth='lg'
        style={{ justifyContent: 'space-evenly' }}
        className={classes.wrapperContainer}
      >
        <Grid container spacing={2} className={classes.wrapperGrid}>
          <Grid item xs={6} md={3} className={classes.wrapperMenuItem}>
            <Navbar
              isMobile={isMobile}
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </Grid>
          <Grid item xs={6} md={8} className={classes.wrapperGridItem}>
            <main>{children}</main>
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default Layout;
