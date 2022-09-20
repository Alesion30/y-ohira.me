import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument: React.FC = () => {
  return (
    <Html lang='ja' prefix='og: https://www.y-ohira.me/'>
      <Head>
        <link href='/favicon.ico' rel='icon' />
        <meta content='#222222' name='theme-color' />
        <link href='/manifest.json' rel='manifest' />

        {/* apple-touch-icon */}
        <link
          href='/icons/icon-72x72.png'
          rel='apple-touch-icon'
          sizes='72x72'
        />
        <link
          href='/icons/icon-96x96.png'
          rel='apple-touch-icon'
          sizes='96x96'
        />
        <link
          href='/icons/icon-128x128.png'
          rel='apple-touch-icon'
          sizes='128x128'
        />
        <link
          href='/icons/icon-144x144.png'
          rel='apple-touch-icon'
          sizes='144x144'
        />

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
