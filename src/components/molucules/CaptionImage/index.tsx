import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import style from './style.module.scss'

export type CaptionImageProps = {
  title: string
  description: string
  src: string | StaticImageData
  width: number
  height: number
  imgAspectRatio?: number // 画像のアスペクト比（height / width）
}

export const CaptionImage: FC<CaptionImageProps> = ({
  description,
  height,
  imgAspectRatio,
  src,
  title,
  width,
}) => {
  const _imgAspectRatio = imgAspectRatio ?? height / width
  return (
    <motion.div
      className={style.wrapper}
      style={{ height, width }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={style.imgMask}>
        <div className={style.caption}>
          <h3 className={style.captionTitle}>{title}</h3>
          <p className={style.captionDescription}>{description}</p>
        </div>
      </div>
      <Image alt='' height={width * _imgAspectRatio} src={src} width={width} />
    </motion.div>
  )
}
