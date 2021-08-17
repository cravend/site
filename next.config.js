/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  eslint: {
    dirs: ["components", "pages", "src"],
  },
  reactStrictMode: true,
  experimental: {
    cpus: 3,
  },
};
