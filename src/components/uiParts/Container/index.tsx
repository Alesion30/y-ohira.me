import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import style from './style.module.scss';

export type ContainerProps = {
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container: React.VFC<ContainerProps> = ({ children, className, ...divProps }) => {
  return (
    <div className={clsx(style.container, className)} {...divProps}>
      {children}
    </div>
  );
};
