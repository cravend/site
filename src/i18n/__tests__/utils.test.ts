import { toggleLocale, isLocale, getLocale } from "../utils";

import type { NextRouter } from "next/router";

const BASE_ROUTER = {
  asPath: "/",
  basePath: "",
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  pathname: "/",
  query: {},
  route: "/",
} as NextRouter;

describe("isLocale()", () => {
  it("returns true for valid locales", () => {
    expect.assertions(2);
    expect(isLocale("en")).toBeTruthy();
    expect(isLocale("fr")).toBeTruthy();
  });

  it("returns false for invalid locales", () => {
    expect.assertions(2);
    expect(isLocale("x")).toBeFalsy();
    expect(isLocale(undefined)).toBeFalsy();
  });
});

describe("getLocale()", () => {
  it("returns the router's locale if defined", () => {
    expect.assertions(1);
    const mockRouter = {
      ...BASE_ROUTER,
      locale: "en",
      defaultLocale: "fr",
    } as const;
    expect(getLocale(mockRouter)).toBe("en");
  });

  it("returns the router's defaultLocale is locale is undefined", () => {
    expect.assertions(1);
    const mockRouter = {
      ...BASE_ROUTER,
      defaultLocale: "fr",
    } as const;
    expect(getLocale(mockRouter)).toBe("fr");
  });

  it("returns the config's defaultLocale if the router's defaultLocale is undefined", () => {
    expect.assertions(1);
    const mockRouter = {
      ...BASE_ROUTER,
    } as const;
    expect(getLocale(mockRouter)).toBe("en");
  });
});

describe("toggleLocale()", () => {
  it("toggles from English to French", () => {
    expect.assertions(1);
    expect(toggleLocale("en")).toBe("fr");
  });

  it("toggles from French to English", () => {
    expect.assertions(1);
    expect(toggleLocale("fr")).toBe("en");
  });
});
