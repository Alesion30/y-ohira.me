import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

const MyDocument: FC = () => {
  return (
    <Html lang='ja' prefix='og: https://www.y-ohira.me/'>
      <Head>
        {/* https://favicon.io/favicon-converter/ */}
        <link
          href='/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link href='/site.webmanifest' rel='manifest' />

        {/* Google Fonts */}
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Noto+Sans+JP:wght@100&display=swap'
          rel='stylesheet'
        />

        {/* Font Awesome */}
        <link
          crossOrigin='anonymous'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
          integrity='sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI='
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
