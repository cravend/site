/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  target: "serverless",
  eslint: {
    dirs: ["components", "pages", "src"],
  },
  experimental: {
    cpus: 1,
  },
};
