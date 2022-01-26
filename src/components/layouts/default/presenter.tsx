import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { Container } from '~/components/uiParts/Container';
import { Spacer } from '~/components/uiParts/Spacer';
import { Header } from './header';

export type DefaultLayoutProps = {
  children: React.ReactNode;
  full?: boolean;
};

export const DefaultLayoutPresenter: React.VFC<DefaultLayoutProps> = ({ children, full = false }) => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {full && <Fragment>{children}</Fragment>}
      {!full && (
        <Container>
          <Header />
          <Spacer height={200} />
          {children}
          <Spacer height={100} />
        </Container>
      )}
    </motion.div>
  );
};
