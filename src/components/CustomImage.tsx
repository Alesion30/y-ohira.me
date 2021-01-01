import { FC } from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
}

const CustomImage: FC<Props> = ({ src, alt, width, marginTop, marginBottom }) => {
  const _width = width ?? '100%';
  const _marginTop = marginTop ?? 0;
  const _marginBottom = marginBottom ?? 0;
  return (
    <div style={{ width: _width, marginTop: _marginTop, marginBottom: _marginBottom }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default CustomImage;
