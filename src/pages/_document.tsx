import crypto from "crypto";
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { ReactElement } from "react";

const generateCsp = (scriptSource: string): [csp: string, nonce: string] => {
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
    csp += `script-src 'nonce-${nonce}' https://matomo.daltoncraven.me 'strict-dynamic' 'sha256-OelV9ZKQUMaqgV4GAwFJBDvQ+mv2l/lvLcAXLNhTRY8=';`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
    csp +=
      "connect-src https://matomo.daltoncraven.me https://vitals.vercel-insights.com 'self';";
  } else {
    csp += `script-src 'nonce-${nonce}' 'self' 'unsafe-eval' https://matomo.daltoncraven.me 'sha256-OelV9ZKQUMaqgV4GAwFJBDvQ+mv2l/lvLcAXLNhTRY8=' 'strict-dynamic';`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
    csp += "connect-src 'self' https://matomo.daltoncraven.me;";
  }

  return [csp, nonce];
};

export default class MyDocument extends Document {
  render(): ReactElement {
    const [csp, nonce] = generateCsp(
      NextScript.getInlineScriptSource(this.props)
    );

    return (
      <Html>
        <Head nonce={nonce}>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,300;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
