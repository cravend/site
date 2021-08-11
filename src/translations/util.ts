import { NextRouter } from "next/router";
import { locales, defaultLocale } from "./config";
import { Locale } from "./types";

export function isLocale(tested: string | undefined | null): tested is Locale {
  return locales.some((locale) => locale === tested);
}

export const getLocale = (router: NextRouter): Locale => {
  if (isLocale(router.locale)) return router.locale;
  if (isLocale(router.defaultLocale)) return router.defaultLocale;
  return defaultLocale;
};

export const toggleLocale = (locale: Locale): Locale =>
  locale === locales[0] ? locales[1] : locales[0];
