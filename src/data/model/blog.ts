export type Blogs = Omit<Blog, 'content'>[]

export type Blog = {
  id: string
  title: string
  link: string
  image: {
    url: string
    width: number
    height: number
  }
  content: string
  date: Date
}
