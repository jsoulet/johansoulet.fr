import React, { FC } from 'react'
import Rating from './Raiting'
import Avatar from './Avatar'
import { H3, P } from 'components/Text'
import tw from 'twin.macro'
import { ITestimonial } from '../types'

const TestimonialSlide: FC<ITestimonial> = ({ content, author, rating, avatar, position }) => {
  return (
    <div css={tw`h-full w-full flex justify-center items-center mb-10`}>
      <div
        css={tw`md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-lg border-solid border border-gray-400 py-10 px-8 `}
      >
        <P customCss={[tw`italic mb-5`]}>{content}</P>
        <div css={tw`flex items-center`}>
          {avatar && <Avatar image={avatar} alt={author} />}
          <div css={tw`ml-3`}>
            <H3 customCss={[tw`mb-0`]}>{author}</H3>
            <P customCss={[tw`text-gray-500`]}>{position}</P>
            {false && <Rating value={rating} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlide
