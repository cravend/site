/* eslint-disable @typescript-eslint/consistent-type-imports */
type MessagesEn = typeof import("./src/i18n/translations/en.json");
type MessagesFr = typeof import("./src/i18n/translations/fr.json");

type IntlMessages = MessagesEn & MessagesFr;
