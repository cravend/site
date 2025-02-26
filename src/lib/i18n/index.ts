import { TRANSLATIONS } from "./translations";

export function useTranslations<Lang extends "en" | "fr">(lang: Lang) {
  return function t<Key extends keyof (typeof TRANSLATIONS)[Lang]>(key: Key) {
    return TRANSLATIONS[lang][key];
  };
}
