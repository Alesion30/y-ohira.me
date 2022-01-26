import { DefaultLayout } from '~/components/layouts/default';
import { InViewAnimate } from '~/components/uiParts/InViewAnimate';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
import { Blogs } from '~/data/model/blog';
import { BlogCard } from './BlogCard';
import style from './style.module.scss';

export type BlogProps = {
  blogs: Blogs;
};

export const BlogPresenter: React.VFC<BlogProps> = ({ blogs }) => {
  return (
    <DefaultLayout>
      <SectionTitle title="TECH BLOG" description="技術ブログ" />
      <Spacer height={50} />
      <div className={style.blogs}>
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className={style.blog}>
              <InViewAnimate delay={300} open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
                <BlogCard
                  title={blog.title}
                  date={blog.createdAt}
                  href={`/blog/${blog.id}`}
                  src="/images/product/elepoke.png"
                />
              </InViewAnimate>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
};
