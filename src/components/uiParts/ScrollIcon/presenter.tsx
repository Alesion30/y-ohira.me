import style from './style.module.scss';

export type ScrollIconProps = {};

export const ScrollIconPresenter: React.VFC<ScrollIconProps> = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.arrow}></span>
      <span className={style.arrow}></span>
      <span className={style.arrow}></span>
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
