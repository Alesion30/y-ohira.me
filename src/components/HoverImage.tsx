import { FC, CSSProperties } from 'react';
import HoverImageStyle from '~/styles/components/HoverImage.module.scss';

interface Props {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  margin?: number;
  style?: CSSProperties;
  bottom?: number;
  left?: number;
}

const HoverImage: FC<Props> = ({ children, src, alt, width, height, margin, style, bottom, left }) => {
  const _width = width ?? '100%';
  const _height = height ?? 'auto';
  const _margin = margin ?? 0;
  const _bottom = bottom ?? 0;
  const _left = left ?? 0;
  return (
    <div className={HoverImageStyle.hoverImg} style={{ width: _width, height: _height, margin: _margin, ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      <div className={HoverImageStyle.hoverImgMask}>
        <div className={HoverImageStyle.hoverImgCaptionWrapper}>
          <div
            className={HoverImageStyle.hoverImgCaption}
            style={{ position: 'absolute', bottom: _bottom, left: _left }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImage;
