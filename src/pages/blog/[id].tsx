import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Container } from '~/components/uiParts/Container';
import { getBlog } from '~/data/api/blog';
import { getBlogs } from '~/data/api/blogs';
import { Blog } from '~/data/model/blog';
import ReactMarkdown from 'react-markdown';
import { DefaultLayout } from '~/components/layouts/default';
import { Spacer } from '~/components/uiParts/Spacer';

type StaticProps = {
  blog?: Blog;
};

type StaticParams = {
  id: string;
};

export default ({ blog }: StaticProps) => {
  console.log(blog);
  return (
    <>
      <NextSeo title={blog?.title} />
      <DefaultLayout>
        <Container>
          <Spacer height={200} />
          <ReactMarkdown>{blog?.content ?? ''}</ReactMarkdown>
          <Spacer height={200} />
        </Container>
      </DefaultLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<StaticProps, StaticParams> = async ({ params }) => {
  const { data } = await getBlog(params!.id);
  return {
    props: {
      blog: data.blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { data } = await getBlogs();
  const paths =
    data.blogs.map((blog) => {
      return {
        params: { id: blog.id },
      };
    }) ?? [];
  return {
    fallback: true,
    paths,
  };
};
