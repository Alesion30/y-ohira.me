import { NextPage } from 'next';
import { FC } from 'react';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import Layout from '~/layouts/index';
import LinkCard from '~/components/LinkCard';
import LinkButton from '~/components/LinkButton';
import CustomImage from '~/components/CustomImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import InViewAnimate from '~/components/InViewAnimate';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        My Name is <span className={TopSectionStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={TopSectionStyle.description}>Web Engineer from Kyushu University</p>
      <Grid container direction="row" justify="center" alignItems="center">
        <LinkCard href="/about" title="About" description="経歴・スキルなど" />
        <LinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
        <LinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
        <LinkCard
          href="https://github.com/Alesion30"
          target={true}
          title="GitHub"
          description="GitHubのアカウントはこちら"
        />
      </Grid>
      <CustomSpacer height={70} />
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
          first
          right
        />
        <Block
          title="受注案件・個人開発"
          description="Laravel・Reactを用いたフルスタック開発をはじめ、Flutterを用いたアプリ開発やWordPressを用いたCMS運用を行なっております"
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
      <CustomSpacer height={50} />
    </Layout>
  );
};

interface IBlockProps {
  width: Breakpoint;
  right?: boolean;
  title: string;
  description: string;
  img: string;
  first?: boolean;
  link?: {
    href: string;
    target?: boolean;
    text: string;
    width: number;
  };
}

const _Block: FC<IBlockProps> = ({ width, right, title, description, img, first, link }) => {
  const bp = width === 'xl' || width === 'lg' || width === 'md';

  if (bp) {
    if (right === true) {
      return (
        <div style={{ position: 'relative', width: '100%', marginBottom: 80 }}>
          <InViewAnimate delay={first ? 0 : 200} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '-10%' }}>
            <CustomImage width="70%" height="100%" src={img} alt={title} style={{ float: 'right' }} />
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
          <InViewAnimate delay={first ? 0 : 200} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '10%' }}>
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
        <InViewAnimate delay={first ? 0 : 200} open={{ opacity: 1, x: 0 }} closed={{ opacity: 0, x: '-10%' }}>
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
