import { MyCard } from '~/components/uiParts/MyCard';
import style from './style.module.scss';
import clsx from 'clsx';

export type TopLinkCardProps = {
  title: string;
  description: string;
  href: string;
  blank?: boolean;
  className?: string;
};

export const TopLinkCardPresenter: React.VFC<TopLinkCardProps> = ({ title, description, href, blank, className }) => {
  return (
    <MyCard href={href} blank={blank} className={clsx(style.card, className)}>
      <h3 className={style.title}>{title} &rarr;</h3>
      <p className={style.description}>{description}</p>
    </MyCard>
  );
};
