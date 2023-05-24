export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const dir = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
} satisfies Record<Locale, "ltr" | "rtl">;
