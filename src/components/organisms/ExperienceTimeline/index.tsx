import dayjs from 'dayjs'
import NextImage, { StaticImageData } from 'next/image'
import { FC } from 'react'

import kyusyuUniversity from '/public/img/experience/kyushuUniversity.jpg'

import styles from './style.module.scss'

type Experience = {
  title: string
  description: string
  date: Date
  images: StaticImageData[]
}

const experiences: Experience[] = [
  {
    title: '九州大学大学システム情報科学府に入学',
    description: '九州大学大学システム情報科学府に入学しました',
    date: new Date(2022, 4, 1),
    images: [kyusyuUniversity, kyusyuUniversity],
  },
  {
    title: '九州大学大学システム情報科学府に入学',
    description: '九州大学大学システム情報科学府に入学しました',
    date: new Date(2022, 4, 1),
    images: [],
  },
]

export const ExperienceTimeline: FC = () => {
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
                {dayjs(date).format('YYYY/MM/DD')}
              </span>
              <span className={styles.circle} />
              <div className={styles.moreContent}>
                {images.length > 0 && (
                  <div className={styles.images}>
                    {images.map((image, j) => (
                      <NextImage
                        key={`${id}_image_${j}`}
                        height={300}
                        src={image}
                        width={400}
                      />
                    ))}
                  </div>
                )}
                <p>{description}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
