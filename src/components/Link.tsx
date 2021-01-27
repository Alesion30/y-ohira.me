import React, { FC, CSSProperties } from 'react';
import LinkStyle from '~/styles/components/Link.module.scss';
import Link from 'next/link';

interface Props {
  href: string;
  style?: CSSProperties;
}

const LinkCard: FC<Props> = ({ href, children, style }) => {
  return (
    <Link href={href}>
      <a>
        <div className={LinkStyle.link} style={style}>
          <p>{children}</p>
        </div>
      </a>
    </Link>
  );
};

export default LinkCard;
