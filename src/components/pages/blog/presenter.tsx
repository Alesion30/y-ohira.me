import { DefaultLayout } from '~/components/layouts/default';
import { Container } from '~/components/uiParts/Container';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
import { BlogCard } from './BlogCard';
import style from './style.module.scss';

export const BlogPresenter: React.VFC = () => {
  return (
    <DefaultLayout>
      <Container>
        <Spacer height={200} />
        <SectionTitle title="TECH BLOG" description="技術ブログ" />
        <Spacer height={50} />
        <div className={style.blogs}>
          <div className={style.blog}>
            <BlogCard title="サンプル" date={new Date()} href="/" src="/images/product/elepoke.png" />
          </div>
          <div className={style.blog}>
            <BlogCard title="サンプル" date={new Date()} href="/" src="/images/product/elepoke.png" />
          </div>
        </div>
        <Spacer height={100} />
      </Container>
    </DefaultLayout>
  );
};
