import React, { FC } from 'react'
import { Link } from 'gatsby-plugin-intl'
import { css } from '@emotion/core'
import tw from 'twin.macro'

export interface BreadcrumbLink {
  link?: string
  label: string
}

const breadcrumbLink = css({
  '&:not(:first-of-type):before': {
    content: '" > "',
  },
})

const Breadcrumb: FC<{ links: BreadcrumbLink[] }> = ({ links }) => {
  return (
    <nav>
      {links.map(({ link, label }, index, array) => {
        if (link) {
          return (
            <span key={index} css={[breadcrumbLink]}>
              <Link to={link} css={[tw`underline`]}>
                {label}
              </Link>
            </span>
          )
        }
        return (
          <span key={index} css={[breadcrumbLink]}>
            <span>{label}</span>
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
