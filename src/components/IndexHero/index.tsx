import React, { FC } from 'react'
import tw from 'twin.macro'
import { css } from '@emotion/core'
import { motion } from 'framer-motion'
import Container from 'components/Container'
import Button from 'components/Button/Button'
import Cartoon from './Cartoon'
import { useIntl } from 'react-intl'
import johanAudio from './johanAudio.mp3'
import PlaySound from './PlaySound'

const slideUp = {
  hidden: {
    y: '50%',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const bounceUp = {
  hidden: {
    x: '-100%',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      bounce: 0.6,
    }
  }
}

const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: -0.6,
      duration: 0.8
    }
  }
  
}

const Hero: FC<{}> = () => {
  const { formatMessage } = useIntl()
  return (
    <div css={[tw`w-full py-5`]}>
      <Container css={[tw`mx-auto flex flex-wrap flex-col md:flex-row items-center`]}>
        <div
          css={[
            tw`flex flex-col w-full md:w-1/2 justify-center items-stretch text-center md:text-left`,
          ]}
        >
          <motion.h1 variants={slideUp} css={[tw`uppercase w-full`]}>{formatMessage({ id: 'index.heading' })}</motion.h1>
          <motion.p variants={slideUp} css={[tw`my-4 text-5xl font-bold`]}>
            {formatMessage(
              {
                id: 'index.name',
              },
              {
                name: <span css={tw`text-green-600`}>Johan!</span>,
                prononciation: <span css={tw`italic font-normal text-lg`}>[jo.an]</span>,
              }
            )}
            <PlaySound
              sound={johanAudio}
              buttonName={formatMessage({ id: 'index.hero.pronunciation.buttonName' })}
            />
          </motion.p>
          <motion.p variants={slideUp} css={[tw`leading-normal text-2xl mb-8`]}>{formatMessage({ id: 'index.baseline' })}</motion.p>
          <motion.div variants={bounceUp}>
            <Button
              onClick={() => {
                const contactForm = document.getElementById('contact')
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              
            >
              {formatMessage({ id: 'index.contactMeButton.label' })}
            </Button>
          </motion.div>
        </div>
        <motion.div variants={fadeIn} css={[tw`w-full md:w-1/2 py-6 text-center flex justify-center`]}>
          <Cartoon
            css={[
              tw`w-4/5 md:w-full h-auto`,
              css({
                maxHeight: 450,
              }),
            ]}
          />
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
