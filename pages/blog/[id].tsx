import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { MarkdownLayout } from '~/components/layouts/markdown'
import { getBlog } from '~/data/api/blog'
import { getBlogs } from '~/data/api/blogs'
import { Blog } from '~/data/model/blog'

type StaticProps = {
  blog?: Blog
}

type StaticParams = {
  id: string
}

export const getStaticProps: GetStaticProps<
  StaticProps,
  StaticParams
> = async ({ params }) => {
  if (params) {
    const { data } = await getBlog(params.id)
    return {
      props: {
        blog: data.blog,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { data } = await getBlogs()
  const paths =
    data.blogs.map((blog) => {
      return {
        params: { id: blog.id },
      }
    }) ?? []
  return {
    fallback: true,
    paths,
  }
}

export default function Page({ blog }: StaticProps) {
  console.log(blog)
  return (
    <>
      <NextSeo title={blog?.title} />
      <MarkdownLayout
        date={blog?.date}
        thumbnail={blog?.image}
        title={blog?.title}
      >
        {blog?.content ?? ''}
      </MarkdownLayout>
    </>
  )
}
