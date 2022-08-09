import { locales, defaultLocale, RTL_LOCALES } from "./config";

import type { Locale } from "./config";
import type { NextRouter } from "next/router";

/**
 * @description This function is used to check if a string is a valid locale.
 *
 * @param localeToTest The string to check.
 * @returns True if the string is a valid locale, false otherwise.
 */
export const isLocale = (localeToTest?: string): localeToTest is Locale =>
  locales.some((locale) => locale === localeToTest);

/**
 * @description This function is used to get the current locale.
 *
 * If a custom locale is set by \@next/router, it will be returned.
 * If no custom locale is set, the router's default locale will be returned.
 * If the router's default locale isn't set, the default locale will be returned.
 *
 * @param router The NextRouter instance.
 * @returns The current locale.
 */
export const getLocale = (router: NextRouter | null) => {
  if (!router) return defaultLocale;
  if (isLocale(router.locale)) return router.locale;
  if (isLocale(router.defaultLocale)) return router.defaultLocale;
  return defaultLocale;
};

/**
 * @description This function is used to toggle the current locale.
 *
 * @param locale The current locale to be toggled.
 * @returns The new locale.
 */
export const toggleLocale = (locale: Locale) =>
  locale === locales[0] ? locales[1] : locales[0];

/**
 * @description This function is used to get the text direction of the current locale.
 *
 * @param locale The locale to be checked
 * @returns True if the locale is read right-to-left, false otherwise
 */
export const isRtl = (locale: Locale) => RTL_LOCALES.includes(locale);
