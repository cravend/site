import { NextRouter } from "next/router";
import { toggleLocale, isLocale, getLocale, isTranslationKey } from "../util";

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

describe("isKey()", () => {
  it("returns true for valid keys", () => {
    expect.assertions(1);
    expect(isTranslationKey("colon")).toBeTruthy();
  });

  it("returns false for valid keys", () => {
    expect.assertions(1);
    expect(isTranslationKey("abc")).toBeFalsy();
  });
});

describe("getLocale()", () => {
  it("returns the router's locale if defined", () => {
    expect.assertions(1);
    const mockRouter = { locale: "en", defaultLocale: "fr" } as NextRouter;
    expect(getLocale(mockRouter)).toBe("en");
  });

  it("returns the router's defaultLocale is locale is undefined", () => {
    expect.assertions(1);
    const mockRouter = { locale: undefined, defaultLocale: "fr" } as NextRouter;
    expect(getLocale(mockRouter)).toBe("fr");
  });

  it("returns the config's defaultLocale if the router's defaultLocale is undefined", () => {
    expect.assertions(1);
    const mockRouter = {
      locale: undefined,
      defaultLocale: undefined,
    } as NextRouter;
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
