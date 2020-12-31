import React, { FC } from 'react';
import LinkCardStyle from '~/styles/components/LinkCard.module.scss';
import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  description: string;
}

const LinkCard: FC<Props> = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <a className={LinkCardStyle.card}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default LinkCard;
