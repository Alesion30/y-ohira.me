import { motion } from 'framer-motion';
import style from './style.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export type MyCardProps = {
  children: React.ReactNode;
  href?: string;
  blank?: boolean;
  className?: string;
  disableScale?: boolean;
};

export const MyCardPresenter: React.VFC<MyCardProps> = ({ children, href, blank, className, disableScale }) => {
  if (disableScale === true) {
    if (href) {
      return (
        <div className={clsx(style.wrapper, className)}>
          <Link href={href}>
            <a target={blank ? '_blank' : undefined} rel={blank ? 'noopener noreferrer' : undefined}>
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
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }} className={clsx(style.wrapper, className)}>
        <Link href={href}>
          <a target={blank ? '_blank' : undefined} rel={blank ? 'noopener noreferrer' : undefined}>
            {children}
          </a>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }} className={clsx(style.wrapper, className)}>
      {!href && children}
    </motion.div>
  );
};
