import style from './style.module.scss';
import { TopLinkCard } from './TopLinkCard';
import { DefaultLayout } from '~/components/layouts/default';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Container } from '~/components/uiParts/Container';
import { Spacer } from '~/components/uiParts/Spacer';

export const TopPresenter: React.VFC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>();
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          color: 0xff3f81,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <DefaultLayout header={false}>
      <div ref={myRef}>
        <Container className={style.wrapper}>
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
          <Spacer height={100} />
        </Container>
      </div>
      {/* <Container>
        <Spacer height={50} />
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
        <Spacer height={100} />
      </Container> */}
    </DefaultLayout>
  );
};
