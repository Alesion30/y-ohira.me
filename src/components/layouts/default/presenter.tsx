import { Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Spacer } from '~/components/uiParts/Spacer';

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayoutPresenter: React.VFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Container maxWidth="md">
        <Spacer height={100} />
        {children}
        <Spacer height={100} />
      </Container>
    </motion.div>
  );
};
