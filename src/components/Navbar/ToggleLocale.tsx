import React, { FC } from 'react'
import { css } from '@emotion/core'
import tw from 'twin.macro'
import locales from '../../../config/i18n/locales'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import { Ii18nLink } from './types'

const onClickHandler = (lang: string) => (e: React.MouseEvent<HTMLAnchorElement>): void => {
  e.preventDefault()
  changeLocale(lang)
}

const linkStyle = [
  tw`underline cursor-pointer`,
  css({
    textDecorationStyle: 'dashed',
  }),
]

const ToggleLocale: FC<{ i18nLinks?: Ii18nLink[] }> = ({ i18nLinks, ...props }) => {
  const { locale, formatMessage } = useIntl()

  return (
    <span {...props}>
      {!i18nLinks &&
        Object.keys(locales).map(lang => {
          if (locale === lang) {
            return null
          }
          return (
            <a
              role="button"
              href={`/${lang}`}
              onClick={onClickHandler(lang)}
              key={lang}
              css={linkStyle}
            >
              {formatMessage({ id: `nav.${lang}` })}
            </a>
          )
        })}
      {i18nLinks &&
        i18nLinks.map(link => {
          if (locale === link.locale) {
            return null
          }
          return (
            <Link css={linkStyle} key={link.locale} to={`/${link.locale}${link.slug}`}>
              {formatMessage({ id: `nav.${link.locale}` })}
            </Link>
          )
        })}
    </span>
  )
}

export default ToggleLocale
