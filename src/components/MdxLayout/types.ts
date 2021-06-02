import {GatsbyImageFile} from 'utils/types'

export interface PageInterface {
  mdx: {
    id: string
    body: string
    excerpt: string
    fileAbsolutePath: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      lang: string
      chapo: string
      date: string
      canonicalUrl?: string
      featuredImage: GatsbyImageFile
      i18n: {
        locale: string
        slug: string
      }[]
      noIndex?: boolean
      metaimage?: GatsbyImageFile
    }
  }
}