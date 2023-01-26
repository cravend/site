import { useRouter } from "next/router";
import { NextIntlProvider } from "next-intl";
import { useEffect } from "react";

import { STANDARD_FORMATS } from "../i18n/config";
import { isRtl, isLocale } from "../i18n/utils";
import "../styles/global.scss";

import type { AppProps } from "next/app";
import type { AbstractIntlMessages } from "next-intl";

const App = ({
  Component,
  pageProps,
}: AppProps<{ messages: AbstractIntlMessages }>) => {
  const router = useRouter();
  const { locale } = router;
  const direction = isLocale(locale) && isRtl(locale) ? "rtl" : "ltr";

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, no-undef
    document.querySelector("body")!.setAttribute("dir", direction);
  }, [direction]);

  return (
    <NextIntlProvider
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      messages={pageProps.messages}
      defaultTranslationValues={STANDARD_FORMATS}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
};

export default App;
