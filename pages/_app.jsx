import React from 'react';
import { elementType, shape } from 'prop-types';
import { ThemeProvider } from 'theme-ui';

import Layout from '../components/Layout';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

MyApp.propTypes = {
  Component: elementType.isRequired,
  pageProps: shape({}),
};

MyApp.defaultProps = {
  pageProps: undefined,
};

export default MyApp;
