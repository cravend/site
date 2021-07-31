import { useRouter } from "next/router";

import translations from "../translations/strings";
import { Localization } from "../translations/types";
import { getLocale, toggleLocale } from "../translations/util";

const useLocalization = (): Localization => {
  const router = useRouter();
  const locale = getLocale(router);

  const t = (key: string): string => {
    if (!translations[locale][key]) {
      // eslint-disable-next-line no-console
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translations[locale][key] || "";
  };
  return [t, locale, toggleLocale(locale)];
};

export default useLocalization;
