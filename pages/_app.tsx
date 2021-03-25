import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { ThemeProvider as ColorProvider } from 'next-themes';
import { AppProps } from 'next/app';
import theme from '@cravend/theme';
import { init } from '@socialgouv/matomo-next';

const App:FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
    });
  });

  return (
    <ColorProvider>
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorProvider>
  );
};

export default App;
