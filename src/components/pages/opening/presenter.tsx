import { Fragment, useState } from 'react';

import style from './style.module.scss';

import { DefaultLayout } from '~/components/layouts/default';
import { TypingText } from '~/components/uiParts/TypingText';

export const OpeningPresenter: React.FC = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const showLog = () => {
    setTimeout(() => setShow(true), 1000);
    setTimeout(() => setShow2(true), 2000);
  };

  return (
    <DefaultLayout full>
      <div className={style.container}>
        <div className={style.terminal}>
          <p>$&nbsp;</p>
          <TypingText onFinishRender={showLog} text="yarn dev" />
          {show && (
            <Fragment>
              <div className={style.flexBreak} />
              <p>
                <span className={style.green}>ready</span> - started server on 0.0.0.0:3000, url: http://localhost:3000
              </p>
              <div className={style.flexBreak} />
              <p>
                <span className={style.cyan}>info</span> - Loaded env from /Users/alesion30/portfolio/.env
              </p>
              <div className={style.flexBreak} />
            </Fragment>
          )}
          {show2 && (
            <Fragment>
              <div className={style.flexBreak} />
              <p>
                <span className={style.cyan}>wait</span> - compiling...
              </p>
              <div className={style.flexBreak} />
              <p>
                <span className={style.magenta}>event</span> - compiled client and server successfully in 540 ms (610
                modules)
              </p>
              <div className={style.flexBreak} />
            </Fragment>
          )}
          <div className={style.terminalCursol} />
        </div>
      </div>
    </DefaultLayout>
  );
};
