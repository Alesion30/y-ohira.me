import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import appConfig from '~/config/app';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={appConfig.description} />
          <meta name="theme-color" content={appConfig.themeColor} />
          <link rel="manifest" href="/manifest.json" />

          {/* apple-touch-icon */}
          <link rel="apple-touch-icon" href="/images/icons/icon-72x72.png" sizes="72x72" />
          <link rel="apple-touch-icon" href="/images/icons/icon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" href="/images/icons/icon-128x128.png" sizes="128x128" />
          <link rel="apple-touch-icon" href="/images/icons/icon-144x144.png" sizes="144x144" />

          {/* OGP */}
          <meta property="og:type" content={appConfig.type} />
          <meta property="og:url" content={appConfig.url} />
          <meta property="og:site_name" content={appConfig.siteName} />

          {/* 検索結果に表示されないようにする */}
          <meta name="robots" content="noindex" />

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
