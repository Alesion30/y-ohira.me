import { DetailedHTMLProps, HTMLAttributes } from 'react'

import style from './style.module.scss'

export type SectionTitleProps = {
  title: string
  description?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SectionTitlePresenter: React.FC<SectionTitleProps> = ({
  description,
  title,
  ...divProps
}) => {
  return (
    <div className={style.container} {...divProps}>
      <h2 className={style.title}>{title}</h2>
      {description && <p className={style.description}>{description}</p>}
    </div>
  )
}
