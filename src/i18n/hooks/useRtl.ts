import { RTL_LOCALES } from "../config";

import useLocale from "./useLocale";

const useRtl = () => {
  const [locale] = useLocale();
  return RTL_LOCALES.includes(locale);
};

export default useRtl;
