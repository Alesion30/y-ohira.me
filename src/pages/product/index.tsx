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

const Product: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout title="PRODUCT">
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>PRODUCT</span>
      </h1>
      <p className={TopSectionStyle.description}>今まで作ってきたアプリ</p>
      <CustomSpacer height={30} />
      <InViewAnimate open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
        <p className={TopSectionStyle.description}>受注案件</p>
      </InViewAnimate>
      <Grid container direction="row" justify="center" alignItems="center">
        {allPostsData.map(
          (post) =>
            post.type == 1 && (
              <InViewAnimate open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
                <ProductImage
                  key={post.id}
                  href={`/product/${post.id}`}
                  title={post.title ?? ''}
                  description={post.description ?? ''}
                  src={post.image ?? ''}
                />
              </InViewAnimate>
            )
        )}
      </Grid>
      <CustomSpacer height={50} />
      <InViewAnimate open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
        <p className={TopSectionStyle.description}>個人開発</p>
      </InViewAnimate>
      <Grid container direction="row" justify="center" alignItems="center">
        {allPostsData.map(
          (post) =>
            post.type == 2 && (
              <InViewAnimate open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
                <ProductImage
                  key={post.id}
                  href={`/product/${post.id}`}
                  title={post.title ?? ''}
                  description={post.description ?? ''}
                  src={post.image ?? ''}
                />
              </InViewAnimate>
            )
        )}
      </Grid>
      <CustomSpacer height={80} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllPostsData('product');
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

export default Product;
