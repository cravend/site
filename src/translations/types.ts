import { locales } from "./config";
import strings from "./strings";

export type Locale = typeof locales[number];

export type Localization = readonly [
  t: (key: string) => string,
  locale: Locale,
  otherLocale: Locale
];

export type TranslationKey = keyof typeof strings.en & keyof typeof strings.fr;
