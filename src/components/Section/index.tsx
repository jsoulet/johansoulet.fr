import React, { FC, ReactElement } from 'react'
import tw from 'twin.macro'
import Container from 'components/Container'
import { H2 } from 'components/Text/H'

export enum backgroundColors {
  gray = 'gray',
  blue = 'blue',
  white = 'white',
}

const bgMapper = {
  gray: tw`bg-gray-100`,
  blue: tw`bg-blue-100`,
  white: tw`bg-white`,
}

const Section: FC<{
  backgroundColor?: backgroundColors
  title?: string
  head?: string | ReactElement
  bottom?: string | ReactElement
  fullwidth?: boolean
}> = ({ backgroundColor = backgroundColors.white, title, head, children, bottom }) => {
  return (
    <section css={[tw`pt-20 pb-16`, bgMapper[backgroundColor]]}>
      <Container>
        <div css={[tw`text-center md:w-3/5 mx-auto`]}>
          {title && <H2>{title}</H2>}
          {head && <p css={[tw`text-gray-600`]}>{head}</p>}
        </div>
        <div css={[tw`mt-12 mb-3`]}>{children}</div>
        {bottom && <div css={[tw`text-center md:w-3/5 mx-auto text-gray-600 my-10`]}>{bottom}</div>}
      </Container>
    </section>
  )
}

export default Section
