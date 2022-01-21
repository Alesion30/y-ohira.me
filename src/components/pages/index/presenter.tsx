import style from './style.module.scss';
import Layout from '~/layouts/index';
import { CustomSpacer } from '~/components/uiParts/CustomSpacer';
import { ScrollIcon } from '~/components/uiParts/ScrollIcon';
import { TopLinkCard } from './TopLinkCard';

export const TopPresenter: React.VFC = () => {
  return (
    <Layout>
      <h1 className={style.title}>
        Hi There👋 I&apos;m <span className={style.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={style.description}>Web Engineer from Kyushu University</p>

      <div className={style.cardList}>
        <TopLinkCard title="About" description="経歴・スキルなど" href="/about" className={style.card} />
        <TopLinkCard title="Product" description="今まで作ってきたアプリ" href="/product" className={style.card} />
        <TopLinkCard title="Hobby" description="趣味" href="/hobby" className={style.card} />
        <TopLinkCard
          title="GitHub"
          description="GitHubのアカウントはこちら"
          href="https://github.com/Alesion30"
          blank
          className={style.card}
        />
      </div>

      <ScrollIcon />
      <CustomSpacer height={50} />

      {/* <Grid container direction="column" justify="center" alignItems="center">
        <Block
          title="23株式会社"
          description="スタートアップから自治体まで、あらゆる挑戦に伴走する総合クリエイティブカンパニー"
          img="/images/23.png"
          link={{
            href: 'https://23-creative.co.jp/',
            target: true,
            text: 'HPはこちら',
            width: 180,
          }}
          right
        />
        <Block
          title="受注案件・個人開発"
          description="React・Laravelを用いたWEB開発をはじめ、Flutterを用いたアプリ開発やArduino・Obnizを用いたIoTの開発など、さまざまなことにチャレンジしています"
          img="/images/work.png"
          link={{
            href: '/product',
            text: 'PRODUCT一覧はこちら',
            width: 300,
          }}
        />
        <Block
          title="チャレキャラ2019"
          description="共有メモアプリ「Passtick」を制作し、Excite賞を受賞"
          img="/images/challecara.png"
          link={{
            href: '/product/passtick',
            text: 'Passtickについて',
            width: 220,
          }}
          right
        />
        <Block
          title="GLEAP"
          description="九大発 プログラミングサークル"
          img="/images/gleap.png"
          link={{
            href: 'https://gleap.tech/',
            target: true,
            text: 'HPはこちら',
            width: 180,
          }}
        />
      </Grid> */}
      <CustomSpacer height={50} />
    </Layout>
  );
};
