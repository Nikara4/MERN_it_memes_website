import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../layout/layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
  );
}

export default MyApp;
