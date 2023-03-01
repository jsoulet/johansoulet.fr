import React, { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import Breadcrumb from 'components/Breadcrumb'
import Container from 'components/Container'
import { H1 } from 'components/Text'

const Hero: FC<{ title?: string; breadcrumb?: { label: string; link?: string }[], children?: ReactNode }> = ({
  title,
  breadcrumb,
  children,
}) => {
  return (
    <div css={[tw`w-full py-5 -mt-32`]}>
      <div css={[tw`bg-gray-100 py-16 md:py-40`]}>
        <Container
          css={[tw`pt-20 flex flex-wrap flex-col justify-center items-center text-center`]}
        >
          {title && <H1>{title}</H1>}
          {breadcrumb && <Breadcrumb links={breadcrumb} />}
          {children}
        </Container>
      </div>
    </div>
  )
}

export default Hero
