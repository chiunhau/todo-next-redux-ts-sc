import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
