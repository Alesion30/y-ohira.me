import { FC } from 'react';
import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';
import HoverImage from '~/components/HoverImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';

const Hobby: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        <span className={TopStyle.highlight}>HOBBY</span>
      </h1>
      <p className={TopStyle.description}>趣味</p>
      <CustomSpacer height={30} />
      <Grid container direction="row" justify="center" alignItems="center">
        <ProductImage
          title="自作PC"
          description="RyzenのCPUを用いたゲーミングPCの組み立て"
          src="/images/hobby/mypc.png"
        />
        <ProductImage title="サイクリング" description="九大から唐津まで片道3時間" src="/images/hobby/cycling.png" />
        <ProductImage title="ピアノ" description="ピアニスト（初心者）" src="/images/hobby/piano.gif" />
        <ProductImage title="イラスト" description="100日後にプロ絵師になる男" src="/images/hobby/irasuto.png" />
        <ProductImage title="ゲーム" description="ポケモンのプレイ時間は1000時間超" src="/images/hobby/game.png" />
        <ProductImage title="漫画・アニメ" description="ジャンプ系の漫画をよく読みます" src="/images/hobby/anime.png" />
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
  );
};

export default Hobby;
