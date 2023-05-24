type MessagesEn = typeof import("@/lib/i18n/dictionaries/en.json");
type MessagesFr = typeof import("@/lib/i18n/dictionaries/en.json");
type MessagesAr = typeof import("@/lib/i18n/dictionaries/en.json");

type Messages = MessagesEn & MessagesFr & MessagesAr;

declare interface IntlMessages extends Messages {}
