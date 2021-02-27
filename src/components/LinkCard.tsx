import React, { FC } from 'react';
import LinkCardStyle from '~/styles/components/LinkCard.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  href: string;
  target?: boolean;
  title: string;
  description: string;
  active?: boolean;
}

const LinkCard: FC<Props> = ({ href, target, title, description, active }) => {
  if (target) {
    return (
      <Link href={href}>
        <a target="_blank" rel="noopener noreferrer" className={classNames(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}>
          <p className={LinkCardStyle.title}>{title} &rarr;</p>
          <p>{description}</p>
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <a className={classNames(LinkCardStyle.card, { [LinkCardStyle.cardActive]: active === true })}>
          <p className={LinkCardStyle.title}>{title} &rarr;</p>
          <p>{description}</p>
        </a>
      </Link>
    );
  }
};

export default LinkCard;
