import crypto from "crypto";
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { ReactElement } from "react";

const generateCsp = (scriptSource: string): [csp: string, nonce: string] => {
  const hash = crypto.createHash("sha256");
  hash.update(scriptSource);
  const nonce = hash.digest("base64");

  let csp = "";
  csp += "default-src 'none';";
  csp += "base-uri 'self';";
  csp += "img-src 'self';";
  csp += "prefetch-src 'self';";
  csp += "font-src https://fonts.gstatic.com;";
  csp += "style-src https://fonts.googleapis.com 'unsafe-inline';"; // NextJS requires 'unsafe-inline'
  if (process.env.NODE_ENV === "production") {
    csp += `script-src 'nonce-${nonce}';`;
  } else {
    csp += "script-src 'self' 'unsafe-eval';"; // NextJS requires 'self', 'unsafe-inline', and 'unsafe-eval' in dev (faster source maps)
    csp += "connect-src 'self';";
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
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
