import { useRouter } from "next/router";
import translations from "../translations/strings";
import {
  getLocale,
  toggleLocale,
  isTranslationKey,
} from "../translations/util";
import type { Localization } from "../translations/types";

const useLocalization = (): Localization => {
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
