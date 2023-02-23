const blogPostsQuery = require('./blogPostsQuery')
const {
  mapblogPostToAlgoliaRecord
} = require('./mappers')

const queries = [
  // {
  //   query: PageQuery,
  //   indexName: 'pages'
  // },
  {
    query: blogPostsQuery,
    queryVariables: {'locale': 'fr'},
    indexName: 'blogPosts-FR',
    transformer: ({ data }) => data.blogPosts.nodes.map(mapblogPostToAlgoliaRecord).filter(({noIndex}) => noIndex !== true),
    settings: {
      attributesForFaceting: [
        'lang',
        'category',
      ]
    }
  }
]

module.exports = queries