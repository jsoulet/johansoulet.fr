import React, { FC } from 'react'
import tw from 'twin.macro'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Button from 'components/Button'
import Cartoon from './Cartoon'
import { useIntl } from 'react-intl'
import johanAudio from './johanAudio.mp3'
import PlaySound from './PlaySound'

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
          <h1 css={[tw`uppercase w-full`]}>{formatMessage({ id: 'index.heading' })}</h1>
          <p css={[tw`my-4 text-5xl font-bold`]}>
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
          </p>
          <p css={[tw`leading-normal text-2xl mb-8`]}>{formatMessage({ id: 'index.baseline' })}</p>
          <div>
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
          </div>
        </div>
        <div css={[tw`w-full md:w-1/2 py-6 text-center flex justify-center`]}>
          <Cartoon
            css={[
              tw`w-4/5 md:w-full h-auto`,
              css({
                maxHeight: 450,
              }),
            ]}
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
