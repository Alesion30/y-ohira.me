import { NextSeo } from 'next-seo'

import { ProductPage } from '~/components/pages/product'

export default function Page() {
  return (
    <>
      <NextSeo title='PRODUCT' />
      <ProductPage />
    </>
  )
}
