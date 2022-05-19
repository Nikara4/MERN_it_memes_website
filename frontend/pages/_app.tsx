import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../state/Store';
import '../styles/globals.css';
import Layout from '../layout/layout';
import { AuthProvider } from '../resources/context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
