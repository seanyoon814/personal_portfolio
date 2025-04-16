import Theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <Toaster position="top-right" reverseOrder={false} />
      </Theme>
    </>
  );
}
 