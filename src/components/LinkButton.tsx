import React, { FC, CSSProperties } from 'react';
import LinkStyle from '~/styles/components/Link.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  href?: string;
  target?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const LinkCard: FC<Props> = ({ href, children, target, style, onClick }) => {
  if (href && target) {
    return (
      <motion.div className={LinkStyle.link} style={style} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href}>
          <a target="_blank" rel="noopener noreferrer" onClick={onClick} style={{ width: '100%' }}>
            <p>{children}</p>
          </a>
        </Link>
      </motion.div>
    );
  } else if (href) {
    return (
      <motion.div className={LinkStyle.link} style={style} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href}>
          <a onClick={onClick} style={{ width: '100%' }}>
            <p>{children}</p>
          </a>
        </Link>
      </motion.div>
    );
  } else {
    return (
      <motion.div className={LinkStyle.link} style={style} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a onClick={onClick} style={{ width: '100%', cursor: 'pointer' }}>
          <p>{children}</p>
        </a>
      </motion.div>
    );
  }
};

export default LinkCard;
