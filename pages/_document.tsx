import React, { ReactElement } from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
