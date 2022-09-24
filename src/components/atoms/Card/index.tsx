import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CSSProperties, FC, ReactNode } from 'react'

import styles from './style.module.scss'

type CardProps = {
  href?: string
  children: ReactNode
  blank?: boolean
  className?: string
  style?: CSSProperties
}

export const Card: FC<CardProps> = ({
  href,
  children,
  blank,
  className,
  style,
}) => {
  return (
    <motion.div
      className={clsx(styles.wrapper, className)}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.0 }}
    >
      {href ? (
        <Link href={href}>
          <a
            rel={blank ? 'noopener noreferrer' : undefined}
            target={blank ? '_blank' : undefined}
          >
            <div className={styles.content}>{children}</div>
          </a>
        </Link>
      ) : (
        <div className={styles.content}>{children}</div>
      )}
    </motion.div>
  )
}
