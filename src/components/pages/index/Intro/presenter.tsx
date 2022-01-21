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
  right?: boolean;
};

export const IntroPresenter: React.VFC<IntroProps> = ({ title, description, src, link, className, right }) => {
  return (
    <div className={clsx(style.container, right ? style.containerRight : style.containerLeft, className)}>
      <div className={clsx(style.descContainer, right ? style.descContainerRight : style.descContainerLeft)}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <MyCard href={link.href} blank={link.blank} className={style.linkCard}>
          <p className={style.linkCardDescription}>{link.title} &rarr;</p>
        </MyCard>
      </div>
      <div className={clsx(style.imgContainer, right ? style.imgContainerRight : style.imgContainerLeft)}>
        <Image width={1600} height={900} src={src} />
      </div>
    </div>
  );
};
