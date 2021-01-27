import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Ohira Yutaのポートフォリオ" />
          <meta name="theme-color" content="#008CD6" />
          <link rel="manifest" href="/manifest.json" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Noto+Sans+JP:wght@100&display=swap"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI="
            crossOrigin="anonymous"
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

export default Document;
