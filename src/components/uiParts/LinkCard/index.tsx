import React, { FC } from 'react';
import LinkCardStyle from '~/styles/components/LinkCard.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
  href: string;
  target?: boolean;
  title: string;
  description: string;
  active?: boolean;
}

export const LinkCard: FC<Props> = ({ href, target, title, description, active }) => {
  if (target) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}
      >
        <Link href={href}>
          <a className={LinkCardStyle.link} target="_blank" rel="noopener noreferrer">
            <p className={LinkCardStyle.title}>{title} &rarr;</p>
            <p>{description}</p>
          </a>
        </Link>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}
      >
        <Link href={href}>
          <a className={LinkCardStyle.link}>
            <p className={LinkCardStyle.title}>{title} &rarr;</p>
            <p>{description}</p>
          </a>
        </Link>
      </motion.div>
    );
  }
};
