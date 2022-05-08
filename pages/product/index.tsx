import { NextSeo } from 'next-seo';
import { ProductPage } from '~/components/pages/product';

export default () => {
  return (
    <>
      <NextSeo title="PRODUCT" />
      <ProductPage />
    </>
  );
};
