import React, { ReactElement } from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta name="color-scheme" content="light dark" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
