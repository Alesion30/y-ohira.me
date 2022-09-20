import { BlogCardPresenter, BlogCardType } from './presenter'

export const BlogCard: React.FC<BlogCardType> = (props) => {
  return <BlogCardPresenter {...props} />
}
