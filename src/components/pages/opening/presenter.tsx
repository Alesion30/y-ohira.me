import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';

import style from './style.module.scss';

import { DefaultLayout } from '~/components/layouts/default';
import { TypingText } from '~/components/uiParts/TypingText';
import { getRandom } from '~/utils/randomUtil';
import { sleep } from '~/utils/sleepUtil';

export const OpeningPresenter: React.FC = () => {
  let timerId: NodeJS.Timer;
  const [logElement, setLogElement] = useState<ReactElement[]>([]);
  const pushLogEelement = (el: ReactElement) => setLogElement((state) => [...state, el]);

  useEffect(() => {
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // タイマー
  let count = 0;
  useEffect(() => {
    const start = new Date().getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      count += Math.round((now - start) / 10);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // ログを表示
  const showLog = async () => {
    await sleep(1000);
    pushLogEelement(<StartLog />);
    await sleep(1000);
    pushLogEelement(<CompileLog modules={getRandom(0, 999)} ms={count} />);
    await sleep(500);
    timerId = setInterval(() => pushLogEelement(<CompileLog modules={getRandom(0, 999)} ms={count} />), 20);
  };

  // スクロール制御
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollBottomRef.current;
    if (el) {
      if (el.clientHeight < el.scrollHeight) {
        el.scrollTop = el.scrollHeight - el.clientHeight;
      }
    }
  });

  return (
    <DefaultLayout full>
      <div ref={scrollBottomRef} className={style.container}>
        <div className={style.terminal}>
          <p>$&nbsp;</p>
          <TypingText onFinishRender={showLog} text="yarn dev" />
          {logElement.map((el, i) => (
            <Fragment key={`log${i}`}>{el}</Fragment>
          ))}
          <div className={style.terminalCursol} />
        </div>
      </div>
    </DefaultLayout>
  );
};

const StartLog: React.FC = () => {
  return (
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
  );
};

const CompileLog: React.FC<{ ms: number; modules: number }> = ({ modules, ms }) => {
  return (
    <Fragment>
      <div className={style.flexBreak} />
      <p>
        <span className={style.cyan}>wait</span> - compiling...
      </p>
      <div className={style.flexBreak} />
      <p>
        <span className={style.magenta}>event</span> - compiled client and server successfully in {ms} ms ({modules}{' '}
        modules)
      </p>
      <div className={style.flexBreak} />
    </Fragment>
  );
};
