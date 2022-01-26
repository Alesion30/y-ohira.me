import style from './style.module.scss';

export type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.VFC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
