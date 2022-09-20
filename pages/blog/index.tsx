import { NextSeo } from 'next-seo'

import { BlogPage } from '~/components/pages/blog'

export default function Page() {
  return (
    <>
      <NextSeo title='BLOG' />
      <BlogPage />
    </>
  )
}
