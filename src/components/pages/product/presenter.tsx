import { StaticImageData } from 'next/image'
import { FC } from 'react'

import style from './style.module.scss'

import { InViewAnimate, Spacer } from '~/components/atoms'
import { DefaultLayout } from '~/components/layouts/default'
import { CaptionImage } from '~/components/uiParts/CaptionImage'
import { SectionTitle } from '~/components/uiParts/SectionTitle'

export type Content = {
  title: string
  description: string
  src: string | StaticImageData
}

export type ProductProps = {
  contents: Content[]
}

export const ProductPresenter: FC<ProductProps> = ({ contents }) => {
  return (
    <DefaultLayout>
      <SectionTitle description='今まで作ってきたアプリ' title='PRODUCT' />
      <Spacer height={50} />
      <div className={style.images}>
        {contents.map((content, index) => {
          return (
            <div key={`product_content_${index}`} className={style.image}>
              <InViewAnimate
                closed={{ opacity: 0, y: '10%' }}
                delay={300}
                open={{ opacity: 1, y: 0 }}
              >
                <CaptionImage
                  description={content.description}
                  height={400 * 0.75}
                  src={content.src}
                  title={content.title}
                  width={400}
                />
              </InViewAnimate>
            </div>
          )
        })}
      </div>
    </DefaultLayout>
  )
}
