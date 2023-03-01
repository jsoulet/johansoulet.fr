import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getSrc } from "gatsby-plugin-image";
import Layout from 'components/Layout'
import PageHero from 'components/PageHero'
import Article from 'components/Article'
import Button from 'components/Button'
import Seo from 'components/Seo'
import { PageInterface } from './types'
import Image from './Image'
import tw from 'twin.macro'

const shortcodes = { 
  Image,
  Button }

export const pageQuery = graphql`query PageQuery($id: String, $locale: String) {
  mdx(id: {eq: $id}) {
    id
    body
    excerpt
    fileAbsolutePath
    fields {
      slug
    }
    frontmatter {
      title
      lang
      chapo
      date(formatString: "DD MMMM YYYY", locale: $locale)
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
      i18n {
        locale
        slug
      }
      noIndex
      canonicalUrl
      metaimage: featuredImage {
        childImageSharp {
          gatsbyImageData(width: 1200, height: 630, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  }
}
`



const MdxLayout: FC<{ data: PageInterface }> = ({ data }) => {
  const { formatMessage } = useIntl()
  const filePath = data.mdx.fileAbsolutePath
  const breadcrumbCategoryLink: Array<{
    label: string
    link?: string
  }> = []
  if (filePath.includes('/content/posts/')) {
    breadcrumbCategoryLink.push({ label: formatMessage({ id: 'breadcrumb.blog' }), link: '/blog' })
  } else if (filePath.includes('/content/studies')) {
    breadcrumbCategoryLink.push({
      label: formatMessage({ id: 'breadcrumb.caseStudies' }),
      link: '/case-studies',
    })
  }
  // @ts-ignore
  const seoImage = getSrc(data.mdx.frontmatter.metaimage)
  return (
    <Layout i18nLinks={data.mdx.frontmatter.i18n} hideToogleLocale={!data.mdx.frontmatter.i18n}>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.chapo || data.mdx.excerpt}
        image={seoImage}
        slug={data.mdx.fields.slug}
        noIndex={data.mdx.frontmatter?.noIndex}
        canonicalUrl={data.mdx.frontmatter.canonicalUrl}
      />
      <PageHero
        title={data.mdx.frontmatter.title}
        breadcrumb={[
          { label: formatMessage({ id: 'breadcrumb.home' }), link: '/' },
          ...breadcrumbCategoryLink,
          { label: data.mdx.frontmatter.title },
        ]}
      />
      <Article>
        <section>
          {data.mdx.frontmatter.chapo && <div css={tw`text-lg font-bold mb-8 italic`}>{data.mdx.frontmatter.chapo}</div>}
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </Article>
    </Layout>
  );
}

export default MdxLayout
