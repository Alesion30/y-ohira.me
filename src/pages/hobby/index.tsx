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

interface Props {
  allPostsData: PostList[];
}

const Hobby: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>HOBBY</span>
      </h1>
      <p className={TopSectionStyle.description}>趣味</p>
      <CustomSpacer height={30} />
      <Grid container direction="row" justify="center" alignItems="center">
        {allPostsData.map((post) => (
          <ProductImage
            key={post.id}
            href={`/hobby/${post.id}`}
            title={post.title ?? ''}
            description={post.description ?? ''}
            src={post.image ?? ''}
          />
        ))}
      </Grid>
      <CustomSpacer height={50} />
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
    <HoverImage onClick={() => Router.push(href)} src={src} alt={title} width={400} margin={10} bottom={10} left={20}>
      <h1 style={{ fontSize: 20 }}>{title}</h1>
      <p>{description}</p>
    </HoverImage>
  );
};

export default Hobby;
