import React, { FC } from 'react'
import tw from 'twin.macro'
import { H3 } from 'components/Text'
import { css } from '@emotion/core'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GatsbyImageFile } from 'utils/types'

interface ServiceProps {
  title: string
  content: string
  image?: GatsbyImageFile
}

const Service: FC<ServiceProps> = ({
  title,
  content,
  image,
}) => {
  // @ts-ignore: getImage should accept GatsbyImageFile because it has the same shape as IGatsbyImageDataParent
  const illustration = image && getImage(image)
  return (
    <div
      css={[
        tw`rounded-xl hover:bg-white hover:shadow-lg p-8 transition duration-500 h-full flex flex-col md:flex-row items-center`,
      ]}
    >
      {illustration && (
        <GatsbyImage
          image={illustration}
          css={[
            tw`md:mr-4 object-contain flex-shrink-0`,
          ]}
          alt="" />
      )}
      <div css={tw`text-center md:text-left`}>
        <H3>{title}</H3>
        <p css={[tw`text-gray-600`]}>{content}</p>
      </div>
    </div>
  );
}

export default Service
