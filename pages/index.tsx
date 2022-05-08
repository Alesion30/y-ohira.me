import { NextSeo } from 'next-seo';

import { TopPage } from '~/components/pages/index';

export default function Page() {
  return (
    <>
      <NextSeo />
      <TopPage />
    </>
  );
}
