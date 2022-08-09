import { NextIntlProvider } from "next-intl";

import { STANDARD_FORMATS } from "../i18n/config";
import "../styles/global.scss";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <NextIntlProvider
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages={pageProps.messages}
    defaultTranslationValues={STANDARD_FORMATS}
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </NextIntlProvider>
);

export default App;
