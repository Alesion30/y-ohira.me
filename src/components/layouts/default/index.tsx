import { motion } from 'framer-motion'
import { FC, Fragment } from 'react'

import { Spacer, Container } from '~/components/atoms'
import { Header } from '~/components/organisms'

export type DefaultLayoutProps = {
  children: React.ReactNode
  full?: boolean
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  full = false,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {full && <Fragment>{children}</Fragment>}
      {!full && (
        <Container>
          <Header />
          <Spacer height={100} />
          {children}
          <Spacer height={100} />
        </Container>
      )}
    </motion.div>
  )
}
