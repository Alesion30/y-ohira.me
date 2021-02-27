import React, { FC, CSSProperties } from 'react';
import LinkStyle from '~/styles/components/Link.module.scss';
import Link from 'next/link';

interface Props {
  href?: string;
  target?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const LinkCard: FC<Props> = ({ href, children, target, style, onClick }) => {
  if (href && target) {
    return (
      <div className={LinkStyle.link} style={style}>
        <Link href={href}>
          <a target="_blank" rel="noopener noreferrer" onClick={onClick} style={{ width: '100%' }}>
            <p>{children}</p>
          </a>
        </Link>
      </div>
    );
  } else if (href) {
    return (
      <div className={LinkStyle.link} style={style}>
        <Link href={href}>
          <a onClick={onClick} style={{ width: '100%' }}>
            <p>{children}</p>
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={LinkStyle.link} style={style}>
        <a onClick={onClick} style={{ width: '100%', cursor: 'pointer' }}>
          <p>{children}</p>
        </a>
      </div>
    );
  }
};

export default LinkCard;
