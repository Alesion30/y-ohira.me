import { DetailedHTMLProps, HTMLAttributes } from 'react';
import style from './style.module.scss';

export type SectionTitleProps = {
  title: string;
  description: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const SectionTitlePresenter: React.VFC<SectionTitleProps> = ({ title, description, ...divProps }) => {
  return (
    <div className={style.container} {...divProps}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </div>
  );
};
