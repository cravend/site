import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr", "ar"],
	showDefaultLangCode: false,
	translations: {
		"en": "src/i18n/en.json",
		"fr": "src/i18n/fr.json",
		"ar": "src/i18n/ar.json",
	},
	routeTranslations: {},
})