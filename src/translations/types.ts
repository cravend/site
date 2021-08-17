import type { locales } from "./config";

export type Locale = typeof locales[number];

export type Localization = [
  t: (key: string) => string,
  locale: Locale,
  otherLocale: Locale
];
