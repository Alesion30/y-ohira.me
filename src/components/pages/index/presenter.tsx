import style from './style.module.scss';
import { TopLinkCard } from './TopLinkCard';
import { DefaultLayout } from '~/components/layouts/default';
import { Container } from '~/components/uiParts/Container';
import { Spacer } from '~/components/uiParts/Spacer';
import Image from 'next/image';
import { VantaCloudLayout } from '~/components/layouts/vanta';

export const TopPresenter: React.VFC = () => {
  return (
    <DefaultLayout full>
      <div className={style.wrapper}>
        <VantaCloudLayout>
          <Container className={style.container}>
            <Spacer height={50} />
            <h1 className={style.title}>
              Hi There
              <Image src="/images/handshake.gif" width={70} height={70} />
              &nbsp;
              <span>
                I&apos;m <span className={style.highlight}>Yuta Ohira!</span>
              </span>
            </h1>
            <p className={style.description}>Web Engineer from Kyushu University</p>
            <div className={style.cardList}>
              <TopLinkCard title="ABOUT" description="経歴・スキルなど" href="/about" className={style.card} />
              <TopLinkCard
                title="PRODUCT"
                description="今まで作ってきたアプリ"
                href="/product"
                className={style.card}
              />
              <TopLinkCard title="BLOG" description="技術ブログ" href="/blog" className={style.card} />
              <TopLinkCard
                title="GitHub"
                description="GitHubのアカウントはこちら"
                href="https://github.com/Alesion30"
                blank
                className={style.card}
              />
            </div>
            <Spacer height={150} />
          </Container>
        </VantaCloudLayout>
      </div>
    </DefaultLayout>
  );
};
