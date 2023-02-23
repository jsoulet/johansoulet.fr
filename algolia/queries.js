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
    indexName: 'blogPosts-fr',
    transformer: ({ data }) => data.blogPosts.nodes.map(mapblogPostToAlgoliaRecord).filter(({noIndex}) => noIndex !== true),
    settings: {
      attributesForFaceting: [
        'lang',
        'category',
      ],
    }
  },
  {
    query: blogPostsQuery,
    queryVariables: {'locale': 'en'},
    indexName: 'blogPosts-en',
    transformer: ({ data }) => data.blogPosts.nodes.map(mapblogPostToAlgoliaRecord).filter(({noIndex}) => noIndex !== true),
    settings: {
      attributesForFaceting: [
        'lang',
        'category',
      ],
    }
  }
]

module.exports = queries