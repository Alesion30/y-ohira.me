import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '~/libs/posts';
import { Post } from '~/models';
import PostPageLayout from '~/layouts/PostPage';

interface Props {
  postData: Post | null;
}

const PostPage: NextPage<Props> = ({ postData }) => {
  return <PostPageLayout postData={postData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData = params && typeof params.id == 'string' ? await getPostData(params.id) : null;
  return {
    props: {
      postData,
    },
  };
};

export default PostPage;
