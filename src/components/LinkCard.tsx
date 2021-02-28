import React, { FC } from 'react';
import LinkCardStyle from '~/styles/components/LinkCard.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  href: string;
  target?: boolean;
  title: string;
  description: string;
  active?: boolean;
}

const LinkCard: FC<Props> = ({ href, target, title, description, active }) => {
  if (target) {
    return (
      <Link href={href}>
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classNames(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}
        >
          <p className={LinkCardStyle.title}>{title} &rarr;</p>
          <p>{description}</p>
        </motion.a>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classNames(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}
        >
          <p className={LinkCardStyle.title}>{title} &rarr;</p>
          <p>{description}</p>
        </motion.a>
      </Link>
    );
  }
};

export default LinkCard;
