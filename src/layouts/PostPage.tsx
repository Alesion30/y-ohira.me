import { Fragment } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import Layout from '~/layouts/index';
import Head from 'next/head';
import { Post } from '~/models';
import CustomSpacer from '~/components/CustomSpacer';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import LinkButton from '~/components/LinkButton';

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
          <LinkButton onClick={() => Router.back()} style={{ width: 110 }}>
            &larr; 戻る
          </LinkButton>
          <CustomSpacer height={30} />
          <h1 className={TopSectionStyle.title}>
            <span className={TopSectionStyle.highlight}>{postData.title ?? ''}</span>
          </h1>
          <p className={TopSectionStyle.description}>{postData.description ?? ''}</p>
          <CustomSpacer height={30} />
          <div style={{ fontSize: '1.2rem' }}>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </article>
        <CustomSpacer height={70} />
      </Layout>
    );
  } else {
    return <Fragment />;
  }
};

export default PostPageLayout;
