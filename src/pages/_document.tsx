import crypto from "crypto";

import { Html, Head, Main, NextScript } from "next/document";

import { isLocale, isRtl } from "../i18n/utils";

import type { DocumentProps } from "next/document";

const generateCsp = (
  scriptSource: string
): readonly [csp: string, nonce: string] => {
  const hash = crypto.createHash("sha256");
  hash.update(scriptSource);
  const nonce = hash.digest("base64");

  let csp = "default-src 'none';";
  csp += "base-uri 'self';";
  csp += "img-src 'self' data:;";
  csp += "prefetch-src 'self';";
  csp += "font-src https://fonts.gstatic.com;";
  csp += "style-src https://fonts.googleapis.com 'self' 'unsafe-inline'; "; // NextJS requires 'unsafe-inline'
  if (process.env.NODE_ENV === "production") {
    csp += `script-src 'nonce-${nonce}' 'strict-dynamic';`;
    csp += `connect-src https://vitals.vercel-insights.com 'self';`;
  } else {
    csp += `script-src 'nonce-${nonce}' 'self' 'unsafe-eval' 'strict-dynamic';`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
    csp += `connect-src 'self' ws:;`;
  }

  return [csp, nonce] as const;
};

const Document = ({ locale, ...props }: DocumentProps) => {
  const [csp, nonce] = generateCsp(NextScript.getInlineScriptSource(props));
  const direction = isLocale(locale) && isRtl(locale) ? "rtl" : "ltr";

  return (
    <Html dir={direction}>
      <Head nonce={nonce}>
        <meta name="color-scheme" content="light dark" />
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Student & developer, working on the web in Paris, FR. he/him. Click to learn more :-)"
        />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
};

export default Document;
