import type { AppProps } from "next/app";
import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
