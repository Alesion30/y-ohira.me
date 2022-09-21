import { FC, Fragment, ReactElement, useEffect, useRef, useState } from 'react'

import style from './style.module.scss'

import { DefaultLayout } from '~/components/layouts/default'
import { TypingText } from '~/components/uiParts/TypingText'
import { sleep } from '~/utils'
import { getRandom } from '~/utils/random'

export type OpeningProps = {
  onFinish?: () => void
}

export const OpeningPresenter: FC<OpeningProps> = ({ onFinish }) => {
  let timer: NodeJS.Timer
  let pushLogsTimer: NodeJS.Timer
  const [logElement, setLogElement] = useState<ReactElement[]>([])
  const pushLogEelement = (el: ReactElement) =>
    setLogElement((state) => [...state, el])

  useEffect(() => {
    return () => {
      clearInterval(timer)
      clearInterval(pushLogsTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // タイマー
  let count = 0
  const startTimer = () => {
    const start = new Date().getTime()
    timer = setInterval(() => {
      const now = new Date().getTime()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      count += Math.round((now - start) / 10)

      // タイマー値がある値を超えたら、オープニングを終了する
      if (count > 5000) {
        if (onFinish) {
          onFinish()
        }
      }
    }, 100)
  }

  // ログを表示
  const showLog = async () => {
    startTimer() // タイマーを開始
    await sleep(1000)
    pushLogEelement(<StartLog />)
    await sleep(800)
    pushLogEelement(<CompileLog modules={getRandom(0, 999)} ms={count} />)
    await sleep(300)
    pushLogsTimer = setInterval(
      () =>
        pushLogEelement(<CompileLog modules={getRandom(0, 999)} ms={count} />),
      20
    )
  }

  // スクロール制御
  const scrollBottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = scrollBottomRef.current
    if (el) {
      if (el.clientHeight < el.scrollHeight) {
        el.scrollTop = el.scrollHeight - el.clientHeight
      }
    }
  })

  return (
    <DefaultLayout full>
      <div ref={scrollBottomRef} className={style.container}>
        <div className={style.terminal}>
          <p>$&nbsp;</p>
          <TypingText delay={1000} text='yarn dev' onFinishRender={showLog} />
          {logElement.map((el, i) => (
            <Fragment key={`log${i}`}>{el}</Fragment>
          ))}
          <div className={style.terminalCursol} />
        </div>
      </div>
    </DefaultLayout>
  )
}

const StartLog: FC = () => {
  return (
    <Fragment>
      <div className={style.flexBreak} />
      <p>
        <span className={style.green}>ready</span> - started server on
        0.0.0.0:3000, url: http://localhost:3000
      </p>
      <div className={style.flexBreak} />
      <p>
        <span className={style.cyan}>info</span> - Loaded env from
        /Users/alesion30/portfolio/.env
      </p>
      <div className={style.flexBreak} />
    </Fragment>
  )
}

const CompileLog: FC<{ ms: number; modules: number }> = ({ modules, ms }) => {
  return (
    <Fragment>
      <div className={style.flexBreak} />
      <p>
        <span className={style.cyan}>wait</span> - compiling...
      </p>
      <div className={style.flexBreak} />
      <p>
        <span className={style.magenta}>event</span> - compiled client and
        server successfully in {ms} ms ({modules} modules)
      </p>
      <div className={style.flexBreak} />
    </Fragment>
  )
}
