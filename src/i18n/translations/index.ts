import common from "./common.json";
import en from "./en.json";
import fr from "./fr.json";

export default {
  en: { ...common, ...en },
  fr: { ...common, ...fr },
} as const;
