import common from "./common";
import en from "./en";
import fr from "./fr";

export default {
  en: { ...common, ...en },
  fr: { ...common, ...fr },
} as const;
