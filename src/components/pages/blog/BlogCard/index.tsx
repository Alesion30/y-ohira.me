import { FC } from 'react'

import { BlogCardPresenter, BlogCardType } from './presenter'

export const BlogCard: FC<BlogCardType> = (props) => {
  return <BlogCardPresenter {...props} />
}
