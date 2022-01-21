import { FC, CSSProperties } from 'react';
import HoverImageStyle from '~/styles/components/HoverImage.module.scss';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  margin?: number;
  style?: CSSProperties;
  bottom?: number;
  left?: number;
}

export const HoverImage: FC<Props> = ({ children, src, alt, onClick, width, height, margin, style, bottom, left }) => {
  const _width = width ?? '100%';
  const _height = height ?? 'auto';
  const _margin = margin ?? 0;
  const _bottom = bottom ?? 0;
  const _left = left ?? 0;
  const _cursor = onClick ? 'pointer' : undefined;
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={HoverImageStyle.hoverImg}
      style={{ width: _width, height: _height, margin: _margin, cursor: _cursor, ...style }}
    >
      <img src={src} alt={alt} style={{ width: _width, height: _height }} />
      <div className={HoverImageStyle.hoverImgMask} style={{ width: _width, height: _height }}>
        <div className={HoverImageStyle.hoverImgCaptionWrapper}>
          <div
            className={HoverImageStyle.hoverImgCaption}
            style={{ position: 'absolute', bottom: _bottom, left: _left }}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
