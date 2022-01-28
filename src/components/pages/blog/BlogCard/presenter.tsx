import { MyCard } from '~/components/uiParts/MyCard';
import Image from 'next/image';
import style from './style.module.scss';
import dayjs from 'dayjs';

export type BlogCardType = {
  title: string;
  date: Date;
  src: string;
  href: string;
  blank?: boolean;
};

export const BlogCardPresenter: React.VFC<BlogCardType> = ({ title, date, src, href, blank }) => {
  const width = 400;
  const height = (400 * 800) / 1280;
  return (
    <MyCard href={href} blank={blank}>
      <Image src={src} width={width} height={height} />
      <div className={style.wrapper} style={{ width }}>
        <p className={style.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
        <h3 className={style.title}>{title}</h3>
      </div>
    </MyCard>
  );
};
