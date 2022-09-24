import dayjs from 'dayjs'
import { FC } from 'react'

import styles from './style.module.scss'

type Experience = {
  title: string
  description: string
  date: Date
}

const experiences: Experience[] = [
  {
    title: '九州大学大学システム情報科学府に入学',
    description: '九州大学大学システム情報科学府に入学しました',
    date: new Date(2022, 4, 1),
  },
  {
    title: '九州大学大学システム情報科学府に入学',
    description: '九州大学大学システム情報科学府に入学しました',
    date: new Date(2022, 4, 1),
  },
]

export const ExperienceTimeline: FC = () => {
  return (
    <ul className={styles.timeline}>
      {experiences.map((experience, i) => {
        const id = `experience_${i}`
        const { title, description, date } = experience

        return (
          <li key={id} className={styles.timelineItem}>
            <input
              className={styles.radio}
              id={id}
              name='timeline'
              type='radio'
            />
            <div className={styles.content}>
              <label className={styles.label} htmlFor={id}>
                {title}
              </label>
              <span className={styles.date}>
                {dayjs(date).format('YYYY/MM/DD')}
              </span>
              <span className={styles.circle} />
              <div className={styles.moreContent}>
                <p>{description}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
