import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import handshake from '../../../../public/img/handshake.gif'

import { TopLinkCard } from './TopLinkCard'
import style from './style.module.scss'

import { Spacer } from '~/components/atoms'
import { DefaultLayout } from '~/components/layouts/default'
import { VantaGlobeLayout } from '~/components/layouts/vanta'
import { Container } from '~/components/uiParts/Container'
import { setDoneOpening } from '~/utils'

export const TopPresenter: FC = () => {
  return (
    <DefaultLayout full>
      <div className={style.wrapper}>
        <VantaGlobeLayout>
          <Container className={style.container}>
            <Spacer height={50} />
            <h1 className={style.title}>
              Hi There
              <Image
                alt='handshake'
                height={70}
                priority={true}
                src={handshake}
                width={70}
              />
              &nbsp;
              <span>
                I&apos;m <span className={style.highlight}>Yuta Ohira!</span>
              </span>
            </h1>
            <p className={style.description}>
              Web Engineer from Kyushu University
            </p>
            <div className={style.cardList}>
              <TopLinkCard
                className={style.card}
                description='経歴・スキルなど'
                href='/about'
                title='ABOUT'
              />
              <TopLinkCard
                className={style.card}
                description='今まで作ってきたアプリ'
                href='/product'
                title='PRODUCT'
              />
              <TopLinkCard
                className={style.card}
                description='技術ブログ'
                href='/blog'
                title='BLOG'
              />
              <TopLinkCard
                className={style.card}
                description='GitHubのアカウントはこちら'
                href='https://github.com/Alesion30'
                title='GitHub'
                blank
              />
            </div>
            <Spacer height={120} />
          </Container>
        </VantaGlobeLayout>

        <motion.div
          className={style.reshowOpeningBtn}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setDoneOpening(false)
            window.location.reload()
          }}
        >
          <p>
            再ビルドする
            <br />
            (yarn dev)
          </p>
        </motion.div>
      </div>
    </DefaultLayout>
  )
}
