import { NextSeo } from 'next-seo';
import { BlogPage } from '~/components/pages/blog';

export default () => {
  return (
    <>
      <NextSeo title="BLOG" />
      <BlogPage />
    </>
  );
};
