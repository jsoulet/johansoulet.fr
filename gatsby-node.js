/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const get = require('lodash/get')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const path = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: path,
    })
    createNodeField({
      name: 'instanceName',
      node,
      value: node.sourceInstanceName,
    })
  }

  if (node.internal.type === 'File') {
    createNodeField({
      name: 'instanceName',
      node,
      value: node.sourceInstanceName,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve) => {
    deletePage(page)
    // Generate page for MDX content only for their language
    // (ie: prevent for creating a /en/... route for a post in French)
    if (
      ['studies', 'pages', 'posts'].includes(page.context.type) &&
      page.context.locale !== page.context.intl.language
    ) {
      return resolve()
    }
    createPage({
      ...page,
      context: {
        ...page.context,
        locale: page.context.intl.language || page.context.intl.defaultLanguage,
      },
    })
    resolve()
  })
}

exports.createPages = async ({ graphql, actions, reporter, page }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile {
        nodes {
          absolutePath
          fields {
            instanceName
          }
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              lang
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const files = result.data.allFile.nodes
  files.forEach((file) => {
    if (!file.childMdx) {
      return
    }
    createPage({
      path: file.childMdx.fields.slug,
      component: `${path.resolve(`./src/components/MdxLayout/index.tsx`)}?__contentFilePath=${file.absolutePath}`,
      context: {
        id: file.childMdx.id,
        locale: file.childMdx.frontmatter.lang,
        type: file.fields.instanceName,
      },
    })
  })
}
