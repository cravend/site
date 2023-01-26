/* eslint-disable @typescript-eslint/consistent-type-imports */
type MessagesEn = typeof import("./src/i18n/translations/en.json");
type MessagesFr = typeof import("./src/i18n/translations/fr.json");
type MessagesAr = typeof import("./src/i18n/translations/ar.json");

type IntlMessages = MessagesEn & MessagesFr & MessagesAr;

declare module "*.scss";
