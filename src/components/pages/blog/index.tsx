import { FC } from 'react'

import { BlogPresenter } from './presenter'

import { useQueryBlogs } from '~/data/api/blogs'

export const BlogPage: FC = () => {
  const { data } = useQueryBlogs()
  return <BlogPresenter blogs={data?.blogs ?? []} />
}
