import { Fragment } from 'react';
import { NextPage } from 'next';
import Layout from '~/layouts/index';
import Head from 'next/head';
import { Post } from '~/models';

interface Props {
  postData: Post | null;
}

const PostPageLayout: NextPage<Props> = ({ postData }) => {
  if (postData) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  } else {
    return <Fragment />;
  }
};

export default PostPageLayout;
