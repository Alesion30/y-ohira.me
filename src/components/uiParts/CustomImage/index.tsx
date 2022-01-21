import { FC, CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
}

export const CustomImage: FC<Props> = ({ src, alt, width, height, style }) => {
  const _width = width ?? '100%';
  const _height = height ?? 'auto';
  return (
    <div style={{ width: _width, ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', height: _height }} />
    </div>
  );
};
