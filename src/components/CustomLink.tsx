import { FC, CSSProperties } from 'react';
import Link from 'next/link';
import LinkStyle from '~/styles/components/CustomLink.module.scss';

interface Props {
  title: string;
  href: string;
  color?: string;
  style?: CSSProperties;
}

const CustomLink: FC<Props> = ({ title, href, color, style }) => {
  const _color = color ?? '#000';
  return (
    <Link href={href}>
      <a className={LinkStyle.link} style={{ color: _color, ...style }}>
        {title}
      </a>
    </Link>
  );
};

export default CustomLink;
