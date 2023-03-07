exports.serialize = function ({ query: { site, blogPosts } }) {
  return blogPosts.nodes.map(node => {
    return Object.assign({}, node.frontmatter, {
      description: node.frontmatter.chapo || node.excerpt,
      date: node.frontmatter.date,
      url: site.siteMetadata.siteUrl + node.fields.slug,
      guid: site.siteMetadata.siteUrl + node.fields.slug,
    })
  })
}

const abstractBlogPostQuery = `query
{
  blogPosts: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {lang: {eq: "%lang%"}, noIndex: {ne: true}}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 200)
      fields {
        slug
      }
      frontmatter {
        date
        title
        chapo
        category
        noIndex
      }
      rawBody
    }
  }
}
`

exports.blogPostsQueryFR = abstractBlogPostQuery.replace('%lang%', 'fr')
exports.blogPostsQueryEN = abstractBlogPostQuery.replace('%lang%', 'en')

exports.metaDataQuery = `{
  site {
    siteMetadata {
      title
      description
      siteUrl
      site_url: siteUrl
    }
  }
}
`