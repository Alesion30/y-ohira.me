import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getAllBlogIds, getBlogData } from '~/libs/blogs';
import { Post } from '~/models';
import PostPageLayout from '~/layouts/PostPage';

interface Props {
  postData: Post | null;
}

const PostPage: NextPage<Props> = ({ postData }) => {
  return <PostPageLayout postData={postData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData = params && typeof params.id == 'string' ? await getBlogData(params.id) : null;
  return {
    props: {
      postData,
    },
  };
};

export default PostPage;
