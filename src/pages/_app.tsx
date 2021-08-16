import { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { init } from "@socialgouv/matomo-next";
import theme from "@cravend/theme";
import type { Theme } from "theme-ui";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_MATOMO_URL;
    const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
    if (url && siteId) {
      init({ url, siteId });
    }
  }, []);

  return (
    <ThemeProvider theme={theme as Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;