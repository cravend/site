import { useRouter } from "next/router";
import { useLocale as nextIntlUseLocale } from "next-intl";

import { defaultLocale, locales } from "../config";
import { isLocale } from "../utils";

/**
 * @description This function is used to get the current locale.
 *
 * If a custom locale is set by \@next/router, it will be returned.
 * If no custom locale is set, the router's default locale will be returned.
 * If the router's default locale isn't set, the default locale will be returned.
 *
 * @returns The current locale.
 */
const useLocale = () => {
  const getLocale = () => {
    const nextIntlLocale = nextIntlUseLocale();
    if (isLocale(nextIntlLocale)) return nextIntlLocale;

    const router = useRouter();
    if (isLocale(router.locale)) return router.locale;
    if (isLocale(router.defaultLocale)) return router.defaultLocale;

    return defaultLocale;
  };

  const locale = getLocale();
  const otherLocales = locales.filter((l) => l !== locale);
  return [locale, otherLocales] as const;
};

export default useLocale;
