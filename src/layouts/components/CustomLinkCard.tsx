import { FC } from 'react';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import LinkCard from '~/components/LinkCard';

interface Props {
  href: string;
  title: string;
  description: string;
}

const CustomLinkCard: FC<Props & WithRouterProps> = ({ router, href, title, description }) => {
  const pathname = router.pathname;
  const active = pathname === href;
  return <LinkCard href={href} title={title} description={description} active={active} />;
};

export default withRouter(CustomLinkCard);
