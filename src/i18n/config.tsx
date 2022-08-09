export const locales = ["en", "fr"] as const;
export type Locale = typeof locales[number];

export const defaultLocale = locales[0];

export const RTL_LOCALES: readonly Locale[] = [] as const;

export const STANDARD_FORMATS = {
  p: (child: React.ReactNode) => <p>{child}</p>,
  em: (child: React.ReactNode) => <em>{child}</em>,
  strong: (child: React.ReactNode) => <strong>{child}</strong>,
  code: (child: React.ReactNode) => <code>{child}</code>,
  ltr: (child: React.ReactNode) => <span dir="ltr">{child}</span>,
};
