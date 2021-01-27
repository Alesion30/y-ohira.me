import React, { FC, CSSProperties } from 'react';
import LinkStyle from '~/styles/components/Link.module.scss';
import Link from 'next/link';

interface Props {
  href: string;
  style?: CSSProperties;
}

const LinkCard: FC<Props> = ({ href, children, style }) => {
  return (
    <div className={LinkStyle.link} style={style}>
      <Link href={href}>
        <a style={{ width: '100%' }}>
          <p>{children}</p>
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
