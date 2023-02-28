import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import get from 'lodash/get'
import locales from '../../../config/i18n/locales'
import { ILocaleConfig } from '../../../config/i18n/types'
import metaBanner from 'assets/images/meta-banner.jpg'

interface ISiteMetadata {
  author: string
  siteUrl: string
}

interface SeoProps {
  title?: string
  description?: string
  image?: string
  slug?: string
  noIndex?: boolean
  canonicalUrl?: string
}

const Seo: FC<SeoProps> = ({ title, image, description, slug, noIndex, canonicalUrl }) => {
  const intl = useIntl()
  const locale = intl.locale
  const { metadata }: ILocaleConfig = get(locales, locale, locales.fr)
  const { site } = useStaticQuery<{ site: { siteMetadata: ISiteMetadata } }>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            author
          }
        }
      }
    `
  )

  return (
    <Helmet titleTemplate={metadata.titleTemplate} defaultTitle={metadata.defaultTitle}>
      <html lang={intl.locale} />
      {<title>{title || metadata.defaultTitle}</title>}
      <meta property="og:title" content={title || metadata.defaultTitle}></meta>
      <meta name="description" content={description || metadata.description} />
      <meta property="og:description" content={description || metadata.description}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content={site.siteMetadata.author} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      {!image && [
        <meta key="0" name="image" content={`${site.siteMetadata.siteUrl}${metaBanner}`} />,
        <meta
          key="1"
          property="og:image"
          content={`${site.siteMetadata.siteUrl}${metaBanner}`}
        ></meta>,
      ]}
      {image && [
        <meta key="0" name="image" content={`${site.siteMetadata.siteUrl}${image}`} />,
        <meta key="1" property="og:image" content={`${site.siteMetadata.siteUrl}${image}`}></meta>,
      ]}
      {slug && <link rel="canonical" href={canonicalUrl || `${site.siteMetadata.siteUrl}/${locale}${slug}`} />}
      {noIndex && <meta name="robots" content="noindex, nofollow"></meta>}
      <script defer id="fairlytics-id-ajcu6jd9k7ysd6" data-fairlyticskey="2f033ce33631cc9fbf3389bde75dbaa6" src="https://app.fairlytics.tech/tag/tag.js"/>
    </Helmet>
  )
}

export default Seo
