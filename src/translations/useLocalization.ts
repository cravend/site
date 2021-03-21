import { useRouter } from 'next/router';
import translations from './strings';
import { Localization } from './types';
import { getLocale, toggleLocale } from './util';

const useLocalization = (): Localization => {
  const router = useRouter();
  const locale = getLocale(router);

  const t = (key: string): string => {
    if (!translations[locale][key]) {
      console.warn(
        `Translation '${key}' for locale '${locale}' not found.`,
      );
    }
    return translations[locale][key] || '';
  };
  return [t, locale, toggleLocale(locale)];
};

export default useLocalization;
