import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/PageHero'
import Seo from 'components/Seo'
import CaseStudies, { mapCaseStudies, ICaseStudySource } from 'components/CaseStudies'

export const pageQuery = graphql`query CaseStudies($locale: String!) {
  studies: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/studies/"}, frontmatter: {lang: {eq: $locale}}}
  ) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 600
              quality: 50
              transformOptions: {fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
}
`

const CaseStudiesPage: FC<{
  data: {
    studies: { nodes: ICaseStudySource[] }
  }
}> = ({ data }) => {
  const { formatMessage } = useIntl()

  const caseStudies = mapCaseStudies(data.studies.nodes)

  return (
    <Layout>
      <Seo slug={'/case-studies'} />
      <Hero
        title={formatMessage({ id: 'breadcrumb.caseStudies' })}
        breadcrumb={[
          { label: formatMessage({ id: 'breadcrumb.home' }), link: '/' },
          { label: formatMessage({ id: 'breadcrumb.caseStudies' }) },
        ]}
      />
      <CaseStudies caseStudies={caseStudies} />
    </Layout>
  )
}

export default CaseStudiesPage
