import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '~/libs/posts';
import { Post } from '~/models';
import PostPageLayout from '~/layouts/post';

interface Props {
  postData: Post | null;
}

const PostPage: NextPage<Props> = ({ postData }) => {
  return <PostPageLayout type="product" post={postData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds('product');
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData = params && typeof params.id == 'string' ? await getPostData(params.id, 'product') : null;
  return {
    props: {
      postData,
    },
  };
};

export default PostPage;
