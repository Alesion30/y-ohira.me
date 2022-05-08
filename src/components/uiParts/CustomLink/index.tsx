import Link from 'next/link';
import { CSSProperties, FC } from 'react';

import LinkStyle from './style.module.scss';

interface Props {
  title: string;
  href: string;
  target?: boolean;
  color?: string;
  style?: CSSProperties;
}

export const CustomLink: FC<Props> = ({ color, href, style, target, title }) => {
  const _color = color ?? '#000';
  if (target) {
    return (
      <Link href={href}>
        <a className={LinkStyle.link} rel="noopener noreferrer" style={{ color: _color, ...style }} target="_blank">
          {title}
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <a className={LinkStyle.link} style={{ color: _color, ...style }}>
          {title}
        </a>
      </Link>
    );
  }
};
