import { FC, CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  style?: CSSProperties;
}

const CustomImage: FC<Props> = ({ src, alt, width, style }) => {
  const _width = width ?? '100%';
  return (
    <div style={{ width: _width, ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default CustomImage;
