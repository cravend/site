import { getRequestConfig } from "next-intl/server";
import { getLocale, getDictionary } from "./dictionaries";

const STANDARD_FORMATS = {
  em: (child: React.ReactNode) => <em>{child}</em>,
  strong: (child: React.ReactNode) => <strong>{child}</strong>,
  ltr: (child: React.ReactNode) => <span dir="ltr">{child}</span>,
  rtl: (child: React.ReactNode) => <span dir="rtl">{child}</span>,
};

function getMessages(locale: string) {
  const validatedLocale = getLocale(locale, "en");
  return getDictionary(validatedLocale);
}

export default getRequestConfig(async ({ locale }) => ({
  messages: await getMessages(locale),
  defaultTranslationValues: STANDARD_FORMATS,
}));
