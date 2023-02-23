const blogPostsQuery = `query Blog($locale: String!) {
  blogPosts: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {lang: {eq: $locale}}}
  ) {
    nodes {
      id
      internal {
        contentDigest
      }
      fields {
        slug
      }
      frontmatter {
        date
        title
        chapo
        category
        noIndex
        lang
        featuredImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
      rawBody
    }
  }
}
`

module.exports = blogPostsQuery