import { motion } from 'framer-motion';
import Image from 'next/image';
import style from './style.module.scss';

export type CaptionImageProps = {
  title: string;
  description: string;
  src: string | StaticImageData;
  width: number;
  height: number;
  imgAspectRatio?: number; // 画像のアスペクト比（height / width）
};

export const CaptionImagePresenter: React.VFC<CaptionImageProps> = ({
  title,
  description,
  src,
  width,
  height,
  imgAspectRatio,
}) => {
  const _imgAspectRatio = imgAspectRatio ?? height / width;
  return (
    <motion.div
      className={style.wrapper}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{ width, height }}
    >
      <div className={style.imgMask}>
        <div className={style.caption}>
          <h3 className={style.captionTitle}>{title}</h3>
          <p className={style.captionDescription}>{description}</p>
        </div>
      </div>
      <Image src={src} width={width} height={width * _imgAspectRatio} />
    </motion.div>
  );
};
