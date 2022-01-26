export type Blogs = Omit<Blog, 'content'>[];

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};
