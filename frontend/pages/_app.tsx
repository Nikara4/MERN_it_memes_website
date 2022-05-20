import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../state/Store';
import '../styles/globals.css';
import Layout from '../layout/layout';
import { AuthProvider, DialogProvider } from '../resources/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <DialogProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DialogProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
