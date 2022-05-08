import { BlogPresenter } from './presenter';

import { useQueryBlogs } from '~/data/api/blogs';

export const BlogPage: React.VFC = () => {
  const { data } = useQueryBlogs();
  return <BlogPresenter blogs={data?.blogs ?? []} />;
};
