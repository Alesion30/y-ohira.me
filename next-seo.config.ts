import { DefaultSeoProps } from 'next-seo/lib/types'

// https://github.com/garmeeh/next-seo
const config: DefaultSeoProps = {
  canonical: 'https://www.y-ohira.me/',
  defaultTitle: 'Web Engineer from Kyushu University',
  description: "I'm a Web Engineer from Kyushu University.",
  openGraph: {
    description: "I'm a Web Engineer from Kyushu University.",
    images: [
      {
        url: 'https://www.y-ohira.me/ogp.jpg',
        width: 630,
        height: 630,
      },
    ],
    site_name: 'y.ohira',
    title: 'Web Engineer from Kyushu University',
  },
  titleTemplate: '%s | Web Engineer from Kyushu University',
}
export default config
