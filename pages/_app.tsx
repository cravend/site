import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { AppProps } from 'next/app';
import theme from '@cravend/theme';
import { init } from '@socialgouv/matomo-next';

const MyApp:FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
  const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
