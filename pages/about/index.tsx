import { NextSeo } from 'next-seo'

import { AboutPage } from '~/components/pages/about'

export default function Page() {
  return (
    <>
      <NextSeo title='ABOUT' />
      <AboutPage />
    </>
  )
}
