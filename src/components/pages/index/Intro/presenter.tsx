import style from './style.module.scss';
import Image from 'next/image';
import { MyCard } from '~/components/uiParts/MyCard';
import clsx from 'clsx';

export type IntroProps = {
  title: string;
  description: string;
  src: string;
  link: {
    title: string;
    href: string;
    blank?: boolean;
  };
  className?: string;
};

export const IntroPresenter: React.VFC<IntroProps> = ({ title, description, src, link, className }) => {
  return (
    <div className={clsx(style.container, className)}>
      <div className={style.descContainer}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <MyCard href={link.href} blank={link.blank} className={style.linkCard}>
          <p className={style.linkCardDescription}>{link.title} &rarr;</p>
        </MyCard>
      </div>
      <div className={style.imgContainer}>
        <Image width={1600} height={900} src={src} />
      </div>
    </div>
  );
};
