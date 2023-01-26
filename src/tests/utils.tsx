import {
  renderHook as defaultRenderHook,
  render as defaultRender,
} from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { useMemo } from "react";

import { STANDARD_FORMATS } from "../i18n/config";
import translationAr from "../i18n/translations/ar.json";
import translationEn from "../i18n/translations/en.json";
import translationFr from "../i18n/translations/fr.json";

import type { Locale } from "../i18n/config";
import type {
  RenderResult,
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react";
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

type CustomRouter = {
  locale: Locale;
} & NextRouter;
type RenderOptions = DefaultParams[1] & { router?: Partial<CustomRouter> };

const mockRouter: CustomRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  forward: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  locale: "en" as const,
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

const TRANSLATION_MAPPING = {
  en: translationEn,
  fr: translationFr,
  ar: translationAr,
} as const;

const BaseWrapper = ({
  customRouter,
  children,
}: {
  customRouter: RenderOptions["router"];
  children: React.ReactNode;
}) => {
  const routerProviderValue = useMemo(
    () => ({ ...mockRouter, ...customRouter }),
    [mockRouter, customRouter]
  );

  return (
    <RouterContext.Provider value={routerProviderValue}>
      <NextIntlProvider
        messages={TRANSLATION_MAPPING[routerProviderValue.locale]}
        defaultTranslationValues={STANDARD_FORMATS}
      >
        {children}
      </NextIntlProvider>
    </RouterContext.Provider>
  );
};

export const render = (
  ui: RenderUI,
  { router, ...options }: RenderOptions = {}
): RenderResult => {
  const wrapper: RenderOptions["wrapper"] = ({ children }) => (
    <BaseWrapper customRouter={router}>{children}</BaseWrapper>
  );

  return defaultRender(ui, { wrapper, ...options });
};

export const renderHook = <Result, Props>(
  ui: (initialProps: Props) => Result,
  {
    router,
    ...options
  }: RenderHookOptions<Props> & { router?: RenderOptions["router"] } = {}
): RenderHookResult<Result, Props> => {
  const wrapper: RenderOptions["wrapper"] = ({ children }) => (
    <BaseWrapper customRouter={router}>{children}</BaseWrapper>
  );

  return defaultRenderHook(ui, { wrapper, ...options });
};
