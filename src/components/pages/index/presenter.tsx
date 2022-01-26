import style from './style.module.scss';
import { TopLinkCard } from './TopLinkCard';
import { DefaultLayout } from '~/components/layouts/default';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import CLOUD from 'vanta/dist/vanta.clouds.min';
import { Container } from '~/components/uiParts/Container';
import { Spacer } from '~/components/uiParts/Spacer';

type CLOUDProps = {
  el: any;
  THREE: typeof THREE;
  backgroundColor?: number;
  skyColor?: number;
  cloudColor?: number;
  cloudShadowColor?: number;
  sunColor?: number;
  sunGlareColor?: number;
  sunlightColor?: number;
  scale?: number;
  scaleMobile?: number;
  speed?: number;
  mouseEase?: true;
};

export const TopPresenter: React.VFC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>();
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const props: CLOUDProps = {
        el: myRef.current,
        THREE: THREE,
        skyColor: 0xffffff,
      };
      setVantaEffect(CLOUD(props));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <DefaultLayout full>
      <div ref={myRef}>
        <Container className={style.wrapper}>
          <Spacer height={100} />
          <h1 className={style.title}>
            Hi There👋 I&apos;m <span className={style.highlight}>Yuta Ohira!</span>
          </h1>
          <p className={style.description}>Web Engineer from Kyushu University</p>
          <div className={style.cardList}>
            <TopLinkCard title="ABOUT" description="経歴・スキルなど" href="/about" className={style.card} />
            <TopLinkCard title="PRODUCT" description="今まで作ってきたアプリ" href="/product" className={style.card} />
            <TopLinkCard title="BLOG" description="技術ブログ" href="/blog" className={style.card} />
            <TopLinkCard
              title="GitHub"
              description="GitHubのアカウントはこちら"
              href="https://github.com/Alesion30"
              blank
              className={style.card}
            />
          </div>
          <Spacer height={400} />
        </Container>
      </div>
    </DefaultLayout>
  );
};
