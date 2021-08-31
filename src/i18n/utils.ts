import { locales, defaultLocale } from "./config";
import translations from "./translations";
import type { Locale } from "./config";
import type { NextRouter } from "next/router";

/**
 * @description This function is used to check if a string is a valid locale.
 *
 * @param {string} locale The string to check.
 * @returns {boolean} True if the string is a valid locale, false otherwise.
 */
export const isLocale = (tested?: string): tested is Locale =>
  locales.some((locale) => locale === tested);

type TranslationKey = keyof typeof translations.en &
  keyof typeof translations.fr;
/**
 * @description This function is used to check if a string is a valid translation key.
 *
 * @param {string} key The string to check.
 * @returns {boolean} True if the string is a valid translation key, false otherwise.
 */
export const isTranslationKey = (key: string): key is TranslationKey =>
  key in translations.en && key in translations.fr;

/**
 * @description This function is used to get the current locale.
 *
 * If a custom locale is set by \@next/router, it will be returned.
 * If no custom locale is set, the router's default locale will be returned.
 * If the router's default locale isn't set, the default locale will be returned.
 *
 * @param {NextRouter} router The NextRouter instance.
 * @returns {Locale} The current locale.
 */
export const getLocale = (router: NextRouter) => {
  if (isLocale(router.locale)) return router.locale;
  if (isLocale(router.defaultLocale)) return router.defaultLocale;
  return defaultLocale;
};

/**
 * @description This function is used to toggle the current locale.
 *
 * @param {string} locale The current locale to be toggled.
 * @returns {Locale} The new locale.
 */
export const toggleLocale = (locale: Locale) =>
  locale === locales[0] ? locales[1] : locales[0];
