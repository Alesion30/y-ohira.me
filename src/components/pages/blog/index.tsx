import { useQueryBlogs } from '~/data/api/blogs';
import { BlogPresenter } from './presenter';

export const BlogPage: React.VFC = () => {
  const { data } = useQueryBlogs();
  return <BlogPresenter blogs={data?.blogs ?? []} />;
};
