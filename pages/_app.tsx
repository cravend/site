import React, { FC, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { AppProps } from "next/app";
import { init } from "@socialgouv/matomo-next";
import theme from "../src/theme";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const { NEXT_PUBLIC_MATOMO_URL, NEXT_PUBLIC_MATOMO_SITE_ID } = process.env;
    init({
      url: NEXT_PUBLIC_MATOMO_URL || "",
      siteId: NEXT_PUBLIC_MATOMO_SITE_ID || "",
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
