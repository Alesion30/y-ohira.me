import { NextPage } from 'next';
import { FC } from 'react';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import Layout from '~/layouts/index';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { CustomImage } from '~/components/uiParts/CustomImage';
import { Spacer } from '~/components/uiParts/Spacer';
import { InViewAnimate } from '~/components/uiParts/InViewAnimate';
import { LinkButton } from '~/components/uiParts/LinkButton';
import { ScrollIcon } from '~/components/uiParts/ScrollIcon';
import { LinkCard } from '~/components/uiParts/LinkCard';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        Hi There👋 I&apos;m <span className={TopSectionStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={TopSectionStyle.description}>Web Engineer from Kyushu University</p>
      <Grid container direction="row" justify="center" alignItems="center">
        <LinkCard href="/about" title="About" description="経歴・スキルなど" />
        <LinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
        <LinkCard href="/hobby" title="Hobby" description="趣味" />
        <LinkCard
          href="https://github.com/Alesion30"
          target={true}
          title="GitHub"
          description="GitHubのアカウントはこちら"
        />
      </Grid>
      <Spacer height={30} />
      <ScrollIcon />
      <Spacer height={50} />
      <Grid container direction="column" justify="center" alignItems="center">
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
      </Grid>
      <Spacer height={50} />
    </Layout>
  );
};

interface IBlockProps {
  width: Breakpoint;
  right?: boolean;
  title: string;
  description: string;
  img: string;
  link?: {
    href: string;
    target?: boolean;
    text: string;
    width: number;
  };
}

const _Block: FC<IBlockProps> = ({ width, right, title, description, img, link }) => {
  const bp = width === 'xl' || width === 'lg' || width === 'md';

  if (bp) {
    if (right === true) {
      return (
        <div style={{ position: 'relative', width: '100%', marginBottom: 80 }}>
          <InViewAnimate threshold={0.7} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '-10%' }}>
            <CustomImage
              width="70%"
              height="100%"
              src={img}
              alt={title}
              style={{ display: 'block', marginLeft: 'auto' }}
            />
            <div style={{ position: 'absolute', top: 10, left: 0, right: '62%' }}>
              <h1 style={{ color: '#008CD6' }}>{title}</h1>
              <p>{description}</p>
              {link && (
                <LinkButton href={link.href} target={link.target} style={{ width: link.width, marginTop: 30 }}>
                  {link.text} &rarr;
                </LinkButton>
              )}
            </div>
          </InViewAnimate>
        </div>
      );
    } else {
      return (
        <div style={{ position: 'relative', width: '100%', marginBottom: 80 }}>
          <InViewAnimate threshold={0.7} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '10%' }}>
            <CustomImage width="60%" height="100%" src={img} alt={title} />
            <div style={{ position: 'absolute', top: 10, left: '64%' }}>
              <h1 style={{ color: '#008CD6' }}>{title}</h1>
              <p>{description}</p>
              {link && (
                <LinkButton href={link.href} target={link.target} style={{ width: link.width, marginTop: 30 }}>
                  &larr; {link.text}
                </LinkButton>
              )}
            </div>
          </InViewAnimate>
        </div>
      );
    }
  } else {
    return (
      <div style={{ marginBottom: 50 }}>
        <InViewAnimate threshold={0.7} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '-10%' }}>
          <CustomImage src={img} alt={title} />
          <div style={{ marginTop: 20 }}>
            <h1 style={{ color: '#008CD6' }}>{title}</h1>
            <p>{description}</p>
            {link && (
              <LinkButton
                href={link.href}
                target={link.target}
                style={{ width: link.width, marginTop: 30, marginLeft: 10 }}
              >
                {link.text} &rarr;
              </LinkButton>
            )}
          </div>
        </InViewAnimate>
      </div>
    );
  }
};
const Block = withWidth()(_Block);

export default Home;
