import dayjs from 'dayjs';
import Image from 'next/image';

import style from './style.module.scss';

import { MyCard } from '~/components/uiParts/MyCard';

export type BlogCardType = {
  title: string;
  date: Date;
  src: string;
  href: string;
  blank?: boolean;
};

export const BlogCardPresenter: React.FC<BlogCardType> = ({ blank, date, href, src, title }) => {
  const width = 400;
  const height = (400 * 800) / 1280;
  return (
    <MyCard blank={blank} href={href}>
      <Image alt="" height={height} src={src} width={width} />
      <div className={style.wrapper} style={{ width }}>
        <p className={style.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
        <h3 className={style.title}>{title}</h3>
      </div>
    </MyCard>
  );
};
