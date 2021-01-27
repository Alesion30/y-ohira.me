import React, { FC, CSSProperties } from 'react';
import LinkStyle from '~/styles/components/Link.module.scss';
import Link from 'next/link';

interface Props {
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const LinkCard: FC<Props> = ({ href, children, style, onClick }) => {
  return (
    <div className={LinkStyle.link} style={style}>
      {href && (
        <Link href={href}>
          <a onClick={onClick} style={{ width: '100%' }}>
            <p>{children}</p>
          </a>
        </Link>
      )}
      {!href && (
        <a onClick={onClick} style={{ width: '100%', cursor: 'pointer' }}>
          <p>{children}</p>
        </a>
      )}
    </div>
  );
};

export default LinkCard;
