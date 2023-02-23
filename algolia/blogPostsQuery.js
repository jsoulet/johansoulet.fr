const blogPostsQuery = `query Blog($locale: String!) {
  blogPosts: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {lang: {eq: $locale}}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 200)
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
            gatsbyImageData(
              height: 250
              width: 530
              quality: 50
              transformOptions: {fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
      }
      rawBody
    }
  }
}
`

module.exports = blogPostsQuery