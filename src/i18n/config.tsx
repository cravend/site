export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = locales[0];

export const RTL_LOCALES: readonly Locale[] = ["ar"] as const;

export const STANDARD_FORMATS = {
  em: (child: React.ReactNode) => <em>{child}</em>,
  strong: (child: React.ReactNode) => <strong>{child}</strong>,
  ltr: (child: React.ReactNode) => <span dir="ltr">{child}</span>,
  rtl: (child: React.ReactNode) => <span dir="rtl">{child}</span>,
};
