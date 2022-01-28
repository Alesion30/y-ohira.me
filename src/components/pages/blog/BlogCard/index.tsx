import { BlogCardPresenter, BlogCardType } from './presenter';

export const BlogCard: React.VFC<BlogCardType> = (props) => {
  return <BlogCardPresenter {...props} />;
};
