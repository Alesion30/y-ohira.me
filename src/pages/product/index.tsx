import { FC } from 'react';
import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';
import HoverImage from '~/components/HoverImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';

const Product: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        <span className={TopStyle.highlight}>PRODUCT</span>
      </h1>
      <p className={TopStyle.description}>アプリ・仕事</p>
      <CustomSpacer height={30} />
      <Grid container direction="row" justify="center" alignItems="center">
        <ProductImage title="ELEPOKE" description="ポケモン選出最適化アプリ" src="/images/product/elepoke.png" />
        <ProductImage title="AWECON" description="エアコンのリモート制御アプリ" src="/images/product/awecon.png" />
        <ProductImage title="授業マイスター" description="時間割を教えてくれるLineBot" src="/images/product/linebot.png" />
        <ProductImage title="Passtick" description="複数人で共有できるメモアプリ" src="/images/product/passtick.png" />
        <ProductImage title="PenLab" description="学習時間記録ツール" src="/images/product/penlab.gif" />
        <ProductImage title="はもスケ" description="予定管理アプリ" src="/images/product/hamosuke.gif" />
      </Grid>
      <CustomSpacer height={50} />
    </Layout>
  );
};

interface ProductImageProps {
  src: string;
  title: string;
  description: string;
}
const ProductImage: FC<ProductImageProps> = ({ src, title, description }) => {
  return (
    <HoverImage src={src} alt={title} width={400} margin={10} bottom={10} left={20}>
      <h1 style={{ fontSize: 20 }}>{title}</h1>
      <p>{description}</p>
    </HoverImage>
  )
}

export default Product;
