import { FC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Router from 'next/router';
import Layout from '~/layouts/index';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import HoverImage from '~/components/HoverImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import { getAllPostsData } from '~/libs/posts';
import { PostList } from '~/models';
import InViewAnimate from '~/components/InViewAnimate';

interface Props {
  allPostsData: PostList[];
}

const Hobby: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout title="HOBBY">
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>HOBBY</span>
      </h1>
      <p className={TopSectionStyle.description}>趣味</p>
      <CustomSpacer height={30} />
      <Grid container direction="row" justify="center" alignItems="center">
        {allPostsData.map((post) => (
          <InViewAnimate open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
            <ProductImage
              key={post.id}
              href={`/hobby/${post.id}`}
              title={post.title ?? ''}
              description={post.description ?? ''}
              src={post.image ?? ''}
            />
          </InViewAnimate>
        ))}
      </Grid>
      <CustomSpacer height={80} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllPostsData('hobby');
  return {
    props: {
      allPostsData,
    },
  };
};

interface ProductImageProps {
  src: string;
  title: string;
  description: string;
  href: string;
}
const ProductImage: FC<ProductImageProps> = ({ src, title, description, href }) => {
  return (
    <HoverImage
      onClick={() => Router.push(href)}
      src={src}
      alt={title}
      width={400}
      height={300}
      margin={10}
      bottom={10}
      left={20}
    >
      <h1 style={{ fontSize: 20 }}>{title}</h1>
      <p>{description}</p>
    </HoverImage>
  );
};

export default Hobby;
