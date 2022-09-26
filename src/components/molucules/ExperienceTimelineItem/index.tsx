import dayjs from 'dayjs'
import NextImage from 'next/image'
import { FC } from 'react'

import styles from './style.module.scss'

import { Experience } from '~/components/organisms'

type ExperienceTimelineItemProps = {
  experience: Experience
  checked: boolean
  onClick: () => void
}

export const ExperienceTimelineItem: FC<ExperienceTimelineItemProps> = ({
  experience,
  checked,
  onClick,
}) => {
  const { title, description, date, images } = experience

  return (
    <li className={styles.timelineItem}>
      <input
        checked={checked}
        className={styles.radio}
        name='timeline'
        type='radio'
      />
      <div className={styles.content}>
        <label className={styles.label} onClick={onClick}>
          {title}
        </label>
        <span className={styles.date}>{dayjs(date).format('YYYY年MM月')}</span>
        <span className={styles.circle} onClick={onClick} />
        <div className={styles.moreContent}>
          {images && images.length > 0 && (
            <div className={styles.images}>
              {images.map((image, j) => (
                <NextImage
                  key={`${title}_image_${j}`}
                  height={image.height}
                  src={image.src}
                  width={image.width}
                />
              ))}
            </div>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
    </li>
  )
}
