import style from './style.module.scss';
import { ScrollIcon } from '~/components/uiParts/ScrollIcon';
import { TopLinkCard } from './TopLinkCard';
import { Intro } from './Intro';
import { InViewAnimate } from '~/components/uiParts/InViewAnimate';
import { Spacer } from '~/components/uiParts/Spacer';
import { DefaultLayout } from '~/components/layouts/default';

export const TopPresenter: React.VFC = () => {
  return (
    <DefaultLayout>
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

      <Spacer height={30} />

      <div className={style.introList}>
        <InViewAnimate threshold={0.7} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '-2%' }}>
          <Intro
            title="23株式会社"
            description={`スタートアップから自治体まで、あらゆる挑戦に\n伴走する総合クリエイティブカンパニー`}
            src="/images/intro/23.png"
            link={{ title: 'HPはこちら', href: 'https://23-creative.co.jp/', blank: true }}
            className={style.intro}
          />
        </InViewAnimate>
        <Spacer height={100} />
        <InViewAnimate threshold={0.7} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '2%' }}>
          <Intro
            title="受注案件・個人開発"
            description={`React・Laravelを用いたWEB開発をはじめ、Flutterを用いたアプリ開発やArduino・Obnizを用いたIoTの開発など、さまざまなことにチャレンジしています`}
            src="/images/intro/work.png"
            link={{ title: 'PRODUCT一覧', href: '/product' }}
            className={style.intro}
            right
          />
        </InViewAnimate>
      </div>
    </DefaultLayout>
  );
};
