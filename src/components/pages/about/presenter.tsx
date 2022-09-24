import { FC } from 'react'

import style from './style.module.scss'

import { Spacer, Stars } from '~/components/atoms'
import { DefaultLayout } from '~/components/layouts/default'
import { SectionTitle } from '~/components/molucules'
import {
  Experience,
  ExperienceTimeline,
  SelfIntroduce,
} from '~/components/organisms'

export type Carrier = { date: string; content: string }

export type Skill = {
  name: string
  star: 0 | 1 | 2 | 3 | 4 | 5
}

export type AboutProps = {
  carriers: Carrier[]
  experiences: Experience[]
  skills: Skill[]
}

export const AboutPresenter: FC<AboutProps> = ({ experiences, skills }) => {
  return (
    <DefaultLayout>
      <SectionTitle description='経歴' title='PROFILE' />
      <Spacer height={50} />
      <ExperienceTimeline experiences={experiences} />
      <Spacer height={20} />
      <SelfIntroduce />
      <Spacer height={50} />
      {/* <div>
        {carriers.map((item, index) => {
          return (
            <div key={`about_carrier_${index}`} className={style.carrier}>
              <p className={style.carrierTitle}>{item.date}</p>
              <p className={style.carrierDescription}>{item.content}</p>
            </div>
          )
        })}
      </div>
      <Spacer height={80} /> */}
      <SectionTitle description='スキルセット' title='My Skills' />
      <Spacer height={30} />
      <div className={style.star}>
        {skills.map((skill) => (
          <div
            key={`about_skill_${skill.name}`}
            className={style.starContainer}
          >
            <p className={style.starName}>{skill.name}</p>
            <Stars star={skill.star} />
          </div>
        ))}
      </div>
    </DefaultLayout>
  )
}
