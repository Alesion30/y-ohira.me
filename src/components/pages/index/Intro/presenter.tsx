import clsx from 'clsx'
import Image from 'next/image'

import style from './style.module.scss'

import { MyCard } from '~/components/uiParts/MyCard'

export type IntroProps = {
  title: string
  description: string
  src: string
  link: {
    title: string
    href: string
    blank?: boolean
  }
  className?: string
  right?: boolean
}

type InputHookProps = {
  windowWidth: number
}

export const IntroPresenter: React.FC<IntroProps & InputHookProps> = ({
  className,
  description,
  link,
  right,
  src,
  title,
  windowWidth,
}) => {
  if (windowWidth >= 900) {
    return (
      <div
        className={clsx(
          style.container,
          right ? style.containerRight : style.containerLeft,
          className
        )}
      >
        <div
          className={clsx(
            style.descContainer,
            right ? style.descContainerRight : style.descContainerLeft
          )}
        >
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
          <MyCard
            blank={link.blank}
            className={style.linkCard}
            href={link.href}
          >
            <p className={style.linkCardDescription}>{link.title} &rarr;</p>
          </MyCard>
        </div>
        <div
          className={clsx(
            style.imgContainer,
            right ? style.imgContainerRight : style.imgContainerLeft
          )}
        >
          <Image alt='' height={900} src={src} width={1600} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={clsx(className)}>
        <div className={clsx(style.imgContainer)}>
          <Image alt='' height={900} src={src} width={1600} />
        </div>
        <div>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
          <MyCard
            blank={link.blank}
            className={style.linkCard}
            href={link.href}
          >
            <p className={style.linkCardDescription}>{link.title} &rarr;</p>
          </MyCard>
        </div>
      </div>
    )
  }
}
