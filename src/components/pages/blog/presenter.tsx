import { FC } from 'react'

import style from './style.module.scss'

import { Spacer, InViewAnimate } from '~/components/atoms'
import { DefaultLayout } from '~/components/layouts/default'
import { ContentCard, SectionTitle } from '~/components/molucules'
import { Blogs } from '~/data/model/blog'

export type BlogProps = {
  blogs: Blogs
}

export const BlogPresenter: FC<BlogProps> = ({ blogs }) => {
  return (
    <DefaultLayout>
      <SectionTitle description='技術ブログ' title='TECH BLOG' />
      <Spacer height={50} />
      <div className={style.blogs}>
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className={style.blog}>
              <InViewAnimate
                closed={{ opacity: 0, y: '10%' }}
                delay={300}
                open={{ opacity: 1, y: 0 }}
              >
                <ContentCard
                  date={blog.date}
                  href={`/blog/${blog.id}`}
                  image={blog.image}
                  maxWidth={400}
                  title={blog.title}
                />
              </InViewAnimate>
            </div>
          )
        })}
      </div>
    </DefaultLayout>
  )
}
