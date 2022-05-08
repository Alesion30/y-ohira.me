import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import style from './style.module.scss';

export type HeaderProps = {
  links: { href: string; name: string }[];
};

export const HeaderPresenter: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={style.topLink}>
        <Link href="/">
          <a>YUTA OHIRA</a>
        </Link>
      </div>
      <div className={style.menuBtnWrapper} onClick={() => setOpen(!open)}>
        <div className={clsx(style.menuBtn, open && style.menuBtnActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
