import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Grid, Typography, AppBar, Container, Toolbar } from '@mui/material';
import { Header } from '../containers';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container maxWidth='lg' style={{ justifyContent: 'space-evenly' }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Navbar />
        </Grid>
        <Grid item xs={6} md={8}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyApp;
