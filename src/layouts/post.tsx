import { Fragment } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import Layout from '~/layouts/index';
import { Post } from '~/models';
import CustomSpacer from '~/components/CustomSpacer';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import LinkButton from '~/components/LinkButton';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import PostStyle from '~/styles/components/Post.module.scss';

interface Props {
  type: 'product' | 'hobby';
  post: Post | null;
}

const PostPageLayout: NextPage<Props> = ({ post, type }) => {
  const postTitle = post?.title ?? '';
  let title = '';
  switch (type) {
    case 'product':
      title = `PRODUCT | ${postTitle}`;
      break;
    case 'hobby':
      title = `HOBBY | ${postTitle}`;
      break;
  }

  if (post) {
    return (
      <Layout og={{ title: title, description: post.description, image: post.image }}>
        <article>
          <LinkButton onClick={() => Router.back()} style={{ width: 110 }}>
            &larr; 戻る
          </LinkButton>
          <CustomSpacer height={30} />
          <h1 className={TopSectionStyle.title}>
            <span className={TopSectionStyle.highlight}>{post.title ?? ''}</span>
          </h1>
          <p className={TopSectionStyle.description}>{post.description ?? ''}</p>
          <Grid container direction="row" justify="flex-start">
            {(post?.tags ?? []).map((tag, i) => (
              <Chip key={`tag_${i}`} label={tag} color="primary" style={{ margin: 5 }} />
            ))}
          </Grid>
          <CustomSpacer height={30} />
          <div className={PostStyle.html}>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
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
