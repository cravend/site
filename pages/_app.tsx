import React, { FC } from 'react';
import { ThemeProvider } from 'theme-ui';
import { AppProps } from 'next/app';
import theme from '../theme';

const MyApp:FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
