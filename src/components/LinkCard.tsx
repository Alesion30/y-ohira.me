import React, { FC } from 'react';
import LinkCardStyle from '~/styles/components/LinkCard.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  href: string;
  title: string;
  description: string;
  active?: boolean;
}

const LinkCard: FC<Props> = ({ href, title, description, active }) => {
  return (
    <Link href={href}>
      <a className={classNames(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default LinkCard;
