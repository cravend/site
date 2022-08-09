import { render as defaultRender } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { useMemo } from "react";

import { STANDARD_FORMATS } from "../i18n/config";
import translationEn from "../i18n/translations/en.json";
import translationFr from "../i18n/translations/fr.json";

import type { RenderResult } from "@testing-library/react";
import type { NextRouter } from "next/router";

export * from "@testing-library/react";

// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  locale: "en",
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
};

export const render = (
  ui: RenderUI,
  { router, ...options }: RenderOptions = {}
): RenderResult => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    const routerProviderValue = useMemo(
      () => ({ ...mockRouter, ...router }),
      [mockRouter, router]
    );

    const messages: IntlMessages =
      routerProviderValue.locale === "fr" ? translationFr : translationEn;
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <RouterContext.Provider value={routerProviderValue}>
        <NextIntlProvider
          messages={messages}
          defaultTranslationValues={STANDARD_FORMATS}
        >
          {children}
        </NextIntlProvider>
      </RouterContext.Provider>
    );
  };

  return defaultRender(ui, { wrapper, ...options });
};
