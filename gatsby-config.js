/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const config = require('./config')
require('dotenv').config();

module.exports = {
  flags: {
    FAST_DEV: false
  },
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    author: `@JohanSoulet`,
    siteUrl: `https://johansoulet.fr`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['*/mentions-legales', '/terms-conditions'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'studies',
        path: `${__dirname}/content/studies/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-source-instance-name-for-remark',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-slug',
          //'gatsby-remark-autolink-headings',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
        defaultLayouts: {
          default: require.resolve('./src/components/MdxLayout/index.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/config/i18n/messages`,
        languages: ['fr', `en`],
        defaultLanguage: `fr`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // Disabled because it checks node_modules and gatsby-plugin-intl raises an error
    // 'gatsby-plugin-typescript-checker',
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          pages: `src/pages`,
          utils: `src/utils`,
          assets: `src/assets`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require('./algolia/queries'),
      },
    },      
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
  ],
}
