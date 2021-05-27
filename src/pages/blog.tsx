import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/PageHero'
import Seo from 'components/Seo'
import BlogPostList, { mapBlogPostList, IBlogPostItemSource } from 'components/BlogPostList'

export const pageQuery = graphql`query Blog($locale: String!) {
  blogPosts: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {lang: {eq: $locale}}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 200)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "D MMMM YYYY", locale: $locale)
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              height: 250
              width: 530
              quality: 50
              transformOptions: {fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
        chapo
      }
    }
  }
}
`

const Blog: FC<{
  data: {
    blogPosts: { nodes: IBlogPostItemSource[] }
  }
}> = ({ data }) => {
  const { formatMessage } = useIntl()

  const blogPosts = mapBlogPostList(data.blogPosts.nodes)

  return (
    <Layout>
      <Seo slug={'/blog'} />
      <Hero
        title={formatMessage({ id: 'breadcrumb.blog' })}
        breadcrumb={[
          { label: formatMessage({ id: 'breadcrumb.home' }), link: '/' },
          { label: formatMessage({ id: 'breadcrumb.blog' }) },
        ]}
      />
      <BlogPostList posts={blogPosts} />
    </Layout>
  )
}

export default Blog
