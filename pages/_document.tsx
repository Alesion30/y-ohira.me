import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <Html lang="ja" >
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
