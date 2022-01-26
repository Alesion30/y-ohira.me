import { motion } from 'framer-motion';
import { Container } from '~/components/uiParts/Container';
import { Header } from './header';

export type DefaultLayoutProps = {
  children: React.ReactNode;
  header?: boolean;
};

export const DefaultLayoutPresenter: React.VFC<DefaultLayoutProps> = ({ children, header = true }) => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {header && (
        <Container>
          <Header />
        </Container>
      )}
      {children}
    </motion.div>
  );
};
