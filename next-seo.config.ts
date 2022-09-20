import { DefaultSeoProps } from 'next-seo/lib/types'

// https://github.com/garmeeh/next-seo
const config: DefaultSeoProps = {
  canonical: 'https://www.y-ohira.me/',
  defaultTitle: 'Web Engineer from Kyushu University',
  description:
    '九州大学出身の学生Webエンジニアです。LaravelやReactを用いたフルスタック開発をはじめ、Flutterを用いたアプリ開発やWordPressを用いたCMS運用を行なっております。',
  openGraph: {
    description:
      '九州大学出身の学生Webエンジニアです。LaravelやReactを用いたフルスタック開発をはじめ、Flutterを用いたアプリ開発やWordPressを用いたCMS運用を行なっております。',
    // images: [
    //   {
    //     url: 'https://user-images.githubusercontent.com/50891407/149852212-de6af654-7a65-429b-9211-c59dee6022fa.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    site_name: 'PORTFOLIO',
    title: 'Web Engineer from Kyushu University',
  },
  titleTemplate: '%s | Web Engineer from Kyushu University',
}
export default config
