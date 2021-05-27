import React, { FC } from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby-plugin-intl'
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { css } from '@emotion/core'
import { breakpoints } from 'utils/styles'
import { H3 } from 'components/Text'

import { ICaseStudyCard } from '../types'

const csCardStyles = css({
  height: 300,
  transition: 'all 300ms ease',
  [breakpoints.xl]: {
    height: 350,
  },
  '&:before': {
    content: '" "',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0,
    transition: 'all 300ms ease',
    zIndex: 10,
  },
  '&:hover': {
    '&:before': {
      opacity: 0.7,
    },
    h3: tw`opacity-100 text-black`,
    p: tw`opacity-100 text-gray-600`,
  },
})

const CSCard: FC<ICaseStudyCard> = ({ title, image, category, slug }) => {
  // @ts-ignore: getImage accepts IGatsbyImageDataParent, which has the same shape as GatsbyImageFile
  const cover = getImage(image)
  return (
    <div css={[tw`w-full sm:w-1/2 lg:w-1/3 px-4 mb-8`]}>
      <Link
        to={slug}
        css={[
          tw`relative rounded-lg bg-white px-8 py-8 transition duration-300 flex flex-col justify-end overflow-hidden`,
          csCardStyles,
        ]}
      >
         {cover && <GatsbyImage
          image={cover}
          css={[tw`object-cover absolute w-full h-full left-0 transition duration-300 inset-0`]}
          style={{ position: 'absolute' }}
          alt="" /> }
        <div css={[tw`z-10`]}>
          <H3 customCss={[tw`text-white opacity-100 transition duration-300`]}>{title}</H3>
          <p css={[tw`text-white opacity-75 transition duration-300`]}>{category}</p>
        </div>
      </Link>
    </div>
  );
}

export default CSCard
