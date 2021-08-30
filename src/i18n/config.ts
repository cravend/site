export const defaultLocale = "en" as const;

export const locales = ["en", "fr"] as const;
export type Locale = typeof locales[number];
