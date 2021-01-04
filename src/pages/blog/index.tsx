import { FC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Router from 'next/router';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import Layout from '~/layouts/index';
import CustomImage from '~/components/CustomImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import BlogStyle from '~/styles/components/Blog.module.scss';
import Chip from '@material-ui/core/Chip';
import { getAllBlogsData } from '~/libs/blogs';
import { BlogList } from '~/models';
import moment from 'moment';

interface Props {
  allPostsData: BlogList[];
}

const techBlog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>Technology Blog</span>
      </h1>
      <p className={TopSectionStyle.description}>技術ブログ</p>
      <CustomSpacer height={50} />
      <Grid container direction="row" justify="center" alignItems="center">
        {allPostsData.map((blog: BlogList) => (
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title ?? ''}
            date={blog.date ?? ''}
            image={blog.image ?? ''}
            tags={blog.tags ?? []}
          />
        ))}
      </Grid>
      <CustomSpacer height={70} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllBlogsData();
  return {
    props: {
      allPostsData,
    },
  };
};

interface BlogProps {
  id: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
}

const Blog: FC<BlogProps> = ({ id, title, date, image, tags }) => {
  const _date = moment(date);
  return (
    <div className={BlogStyle.blog} onClick={() => Router.push(`/blog/${id}`)}>
      <CustomImage src={image} alt={title} />
      <p>{_date.format('YYYY-MM-DD')}</p>
      <h3>{title}</h3>
      <Grid container direction="row" justify="flex-start">
        {tags.map((tag, i) => (
          <Chip key={`tag_${i}`} label={tag} color="primary" style={{ margin: 5 }} />
        ))}
      </Grid>
    </div>
  );
};

export default techBlog;
