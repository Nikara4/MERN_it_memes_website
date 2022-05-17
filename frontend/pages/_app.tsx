import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../state/Store';
import '../styles/globals.css';
import Layout from '../layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
