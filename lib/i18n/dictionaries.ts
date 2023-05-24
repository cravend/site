import "server-only";
import { Locale } from "@/lib/i18n/constants";

export const dictionaries = {
  en: () =>
    import("@/lib/i18n/dictionaries/en.json").then((module) => ({
      ...module.default,
      lang: "en",
    })),
  fr: () =>
    import("@/lib/i18n/dictionaries/en.json").then((module) => ({
      ...module.default,
      lang: "fr",
    })),
  ar: () =>
    import("@/lib/i18n/dictionaries/en.json").then((module) => ({
      ...module.default,
      lang: "ar",
    })),
} satisfies Record<Locale, unknown>;

function isLocale(locale: unknown): locale is Locale {
  if (typeof locale !== "string") return false;

  return locale in dictionaries;
}

export function getLocale(locale: unknown, defaultLocale: Locale) {
  return isLocale(locale) ? locale : defaultLocale;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
