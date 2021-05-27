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
    <div css={[tw`w-full md:w-1/2 px-4 mb-8`]}>
      <div
        css={[
          tw`rounded-lg bg-white hover:shadow-lg px-6 py-8 transition duration-300 h-full`,
          css({
            '&:hover img': {
              filter: 'grayscale(0)',
            },
          }),
        ]}
      >
        {illustration && (
          <GatsbyImage
            image={illustration}
            css={[
              css({
                maxHeight: 150,
                marginInlineEnd: 'auto',
                filter: 'grayscale(1)',
              }),
              tw`transition-all duration-300 mx-auto md:m-0`,
            ]}
            alt="" />
        )}
        <H3 customCss={[tw`text-center md:text-left my-5`]}>{title}</H3>
        <p css={[tw`text-gray-600`]}>{content}</p>
      </div>
    </div>
  );
}

export default Service
