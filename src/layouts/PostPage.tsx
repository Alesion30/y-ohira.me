import { Fragment } from 'react';
import { NextPage } from 'next';
import Layout from '~/layouts/index';
import Head from 'next/head';
import { Post } from '~/models';
import CustomSpacer from '~/components/CustomSpacer';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';

interface Props {
  postData: Post | null;
}

const PostPageLayout: NextPage<Props> = ({ postData }) => {
  if (postData) {
    return (
      <Layout>
        <Head>
          <title>{postData.title ?? 'タイトル未設定'}</title>
        </Head>
        <article>
          <h1 className={TopSectionStyle.title}>
            <span className={TopSectionStyle.highlight}>{postData.title ?? ''}</span>
          </h1>
          <p className={TopSectionStyle.description}>{postData.description ?? ''}</p>
          <CustomSpacer height={30} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <CustomSpacer height={70} />
      </Layout>
    );
  } else {
    return <Fragment />;
  }
};

export default PostPageLayout;
