import "server-only";
import { Locale } from "@/lib/i18n/setup";

export const dictionaries = {
  en: () =>
    import("@/lib/i18n/dictionaries/en.json").then((module) => module.default),
  fr: () =>
    import("@/lib/i18n/dictionaries/fr.json").then((module) => module.default),
  ar: () =>
    import("@/lib/i18n/dictionaries/ar.json").then((module) => module.default),
} satisfies Record<Locale, unknown>;

function isLocale(locale: unknown): locale is Locale {
  if (typeof locale !== "string") return false;

  return locale in dictionaries;
}

function getLocale(locale: unknown, defaultLocale: Locale) {
  if (isLocale(locale)) return locale;

  return isLocale(locale) ? locale : defaultLocale;
}

export function getDictionary(lang: string | Locale) {
  return dictionaries[getLocale(lang, "en")]();
}
