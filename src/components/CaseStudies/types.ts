import { GatsbyImageFile } from 'utils/types'
export interface ICaseStudyCard {
  id: string
  title: string
  category: string
  image: GatsbyImageFile
  slug: string
}

export interface ICaseStudySource {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    category: string
    date: string
    featuredImage: GatsbyImageFile
  }
}
