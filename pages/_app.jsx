/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
