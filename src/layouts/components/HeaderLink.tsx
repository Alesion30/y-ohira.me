import React, { FC } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import HeaderStyle from '~/styles/Header.module.css';

interface Props {
  href: string;
  title: string;
}

const HeaderLink: FC<Props & WithRouterProps> = ({ router, href, title }) => {
  const pathname = router.pathname;
  const className = pathname === href ? HeaderStyle.activeLink : HeaderStyle.link;
  return (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  );
};

export default withRouter(HeaderLink);
