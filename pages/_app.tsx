import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { AppProps } from 'next/app';
import { init } from '@socialgouv/matomo-next';
import { withAutomaticColorMode } from '../src/hooks/useColorMode';
import theme from '../src/theme';

const App:FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
    });
  });

  const ComponentWithColorMode = withAutomaticColorMode(Component);

  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ComponentWithColorMode {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
