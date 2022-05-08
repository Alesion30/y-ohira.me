import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

import style from './style.module.scss';

export type MyCardProps = {
  children: React.ReactNode;
  href?: string;
  blank?: boolean;
  className?: string;
  disableScale?: boolean;
};

export const MyCardPresenter: React.FC<MyCardProps> = ({ blank, children, className, disableScale, href }) => {
  if (disableScale === true) {
    if (href) {
      return (
        <div className={clsx(style.wrapper, className)}>
          <Link href={href}>
            <a rel={blank ? 'noopener noreferrer' : undefined} target={blank ? '_blank' : undefined}>
              {children}
            </a>
          </Link>
        </div>
      );
    }
    return <div className={clsx(style.wrapper, className)}>{!href && children}</div>;
  }

  if (href) {
    return (
      <motion.div className={clsx(style.wrapper, className)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }}>
        <Link href={href}>
          <a rel={blank ? 'noopener noreferrer' : undefined} target={blank ? '_blank' : undefined}>
            {children}
          </a>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div className={clsx(style.wrapper, className)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }}>
      {!href && children}
    </motion.div>
  );
};
