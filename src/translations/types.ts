import { locales } from './config';

export type Locale = typeof locales[number];

export type Translations = {
  [key: string]: string;
}

export type Strings = {
  [key in Locale]: Translations;
};

export type Localization = [
  t: (key: string) => string,
  locale: Locale,
  otherLocale: Locale
]
