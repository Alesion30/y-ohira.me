import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';

const Product: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        <span className={TopStyle.highlight}>PRODUCT</span>
      </h1>
      <p className={TopStyle.description}>アプリ・仕事</p>
    </Layout>
  );
};

export default Product;
