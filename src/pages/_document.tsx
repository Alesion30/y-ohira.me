import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument: React.VFC = () => {
  return (
    <Html lang="ja" prefix="og: https://www.y-ohira.me/">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
