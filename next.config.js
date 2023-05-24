const withNextIntl = require("next-intl/plugin")("./lib/i18n/config.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
