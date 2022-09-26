import { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

import styles from './style.module.scss'

import { ExperienceTimelineItem } from '~/components/molucules'

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
  const [checkedIndex, setCheckedIndex] = useState(0)

  return (
    <ul className={styles.timeline}>
      {experiences.map((experience, i) => {
        return (
          <ExperienceTimelineItem
            key={`experience_${i}`}
            checked={checkedIndex === i}
            experience={experience}
            onClick={() => setCheckedIndex(i)}
          />
        )
      })}
    </ul>
  )
}
