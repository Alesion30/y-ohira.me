import React, { FC } from 'react';
import ScrollIconStyle from '~/styles/components/ScrollIcon.module.scss';

interface Props {}

export const ScrollIcon: FC<Props> = ({}) => {
  return (
    <div className={ScrollIconStyle.wrapper}>
      <span className={ScrollIconStyle.arrow}></span>
      <span className={ScrollIconStyle.arrow}></span>
      <span className={ScrollIconStyle.arrow}></span>
      <p>
        <span>S</span>
        <span>c</span>
        <span>r</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
      </p>
    </div>
  );
};
