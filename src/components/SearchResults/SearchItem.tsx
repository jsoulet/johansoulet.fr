import React, { FC } from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl'
import { H3, P } from 'components/Text'
import tw from 'twin.macro'
import { css } from '@emotion/core'

export interface Props {
    id: string
    title: string
    date: string
    excerpt: string
    imageURL: string
    slug: string
}

const SearchItem = ({ title, excerpt, imageURL, date, slug }: Props) => {
  const { locale } = useIntl()
  const formattedDate = Intl.DateTimeFormat(locale, {year: "numeric", month: "long", day: "numeric"}).format(new Date(date))
  return (
    <Link
      to={slug}
      css={[
        tw`duration-300 transform hover:-translate-y-1`,
        css({
          '&:hover h3': tw`text-green-500`,
        }),
      ]}
    >
      <div css={[tw`w-full mx-auto`]}>
        {imageURL && <img src={imageURL} css={[tw`rounded-lg w-full h-48 object-cover mb-3 `]} alt=""/>}
        <P customCss={[tw`text-sm mb-3`]}>{formattedDate}</P>
        <H3 customCss={[tw`transition duration-300`]}>{title}</H3>
        <P customCss={[tw`text-sm mt-5`]}>{excerpt}</P>
      </div>
    </Link>
  );
}

export default SearchItem
