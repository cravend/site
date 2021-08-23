const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

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
  headers: () => [
    {
      source: "/",
      headers: securityHeaders,
    },
    {
      source: "/(.*?)",
      headers: securityHeaders,
    },
  ],
};
