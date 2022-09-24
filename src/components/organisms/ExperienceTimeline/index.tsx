import dayjs from 'dayjs'
import NextImage, { StaticImageData } from 'next/image'
import { FC } from 'react'

import styles from './style.module.scss'

export type Experience = {
  title: string
  description?: string
  date: Date
  images?: { width: number; height: number; src: StaticImageData }[]
}

type ExperienceTimelineProps = {
  experiences: Experience[]
}

export const ExperienceTimeline: FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <ul className={styles.timeline}>
      {experiences.map((experience, i) => {
        const id = `experience_${i}`
        const { title, description, date, images } = experience

        return (
          <li key={id} className={styles.timelineItem}>
            <input
              className={styles.radio}
              defaultChecked={i === 0}
              id={id}
              name='timeline'
              type='radio'
            />
            <div className={styles.content}>
              <label className={styles.label} htmlFor={id}>
                {title}
              </label>
              <span className={styles.date}>
                {dayjs(date).format('YYYY年MM月')}
              </span>
              <span className={styles.circle} />
              <div className={styles.moreContent}>
                {images && images.length > 0 && (
                  <div className={styles.images}>
                    {images.map((image, j) => (
                      <NextImage
                        key={`${id}_image_${j}`}
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
      })}
    </ul>
  )
}
