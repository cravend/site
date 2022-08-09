import { useRouter } from "next/router";

import translations from "./translations";
import { getLocale, toggleLocale, isTranslationKey } from "./utils";

const useLocalization = () => {
  const router = useRouter();
  const locale = getLocale(router);

  const t = (key: string) => {
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
