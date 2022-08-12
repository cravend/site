import { isRtl } from "../utils";

import { useLocale } from ".";

const useDirection = () => {
  const [locale] = useLocale();
  return isRtl(locale) ? "rtl" : "ltr";
};

export default useDirection;
