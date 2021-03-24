import React, { FC } from 'react';
import { ThemeProvider } from 'theme-ui';
import { AppProps } from 'next/app';
import theme from '@cravend/theme';
import { withAutomaticColorMode } from '../src/hooks/useColorMode';

const App:FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const ComponentWithColorMode = withAutomaticColorMode(Component);

  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ComponentWithColorMode {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
