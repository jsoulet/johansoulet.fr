import React, { FC } from 'react'
import { Link } from 'gatsby-plugin-intl'
import { H3, P } from 'components/Text'
import tw from 'twin.macro'
import { css } from '@emotion/core'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { IBlogPostItem } from './types'

const BlogPostItem: FC<IBlogPostItem> = ({ title, excerpt, image, date, slug }) => {
  // @ts-ignore
  const cover = getImage(image)
  return (
    <Link
      to={slug}
      css={[
        tw`w-full sm:w-3/4 md:w-3/4 lg:w-1/3 px-6 mb-12 mx-auto lg:mx-0 duration-300 transform hover:-translate-y-1`,
        css({
          '&:hover h3': tw`text-green-500`,
        }),
      ]}
    >
      <div css={[tw`w-full mx-auto`]}>
        {cover && <GatsbyImage image={cover} css={[tw`rounded-lg w-full h-48 object-cover mb-3 `]} alt=""/>}
        <P customCss={[tw`text-sm mb-3`]}>{date}</P>
        <H3 customCss={[tw`transition duration-300`]}>{title}</H3>
        <P customCss={[tw`text-sm mt-5`]}>{excerpt}</P>
      </div>
    </Link>
  );
}

export default BlogPostItem
