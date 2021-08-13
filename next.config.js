/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  eslint: {
    dirs: ["components", "pages", "src"],
  },
  reactStrictMode: true,
};
