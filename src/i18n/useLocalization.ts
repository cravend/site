import { useRouter } from "next/router";
import translations from "./translations";
import { getLocale, toggleLocale, isTranslationKey } from "./utils";
import type { Locale } from "./config";

const useLocalization = (): readonly [
  t: (key: string) => string,
  locale: Locale,
  otherLocale: Locale
] => {
  const router = useRouter();
  const locale = getLocale(router);

  const t = (key: string): string => {
    if (!isTranslationKey(key)) {
      // eslint-disable-next-line no-console
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
      return "";
    }

    return translations[locale][key];
  };
  return [t, locale, toggleLocale(locale)] as const;
};

export default useLocalization;
