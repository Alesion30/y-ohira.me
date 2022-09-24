import { Image } from '~/types/graphcms'

export type Blogs = Omit<Blog, 'content'>[]

export type Blog = {
  id: string
  title: string
  link: string
  image: Image
  content: string
  date: Date
}
