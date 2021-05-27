import { GatsbyImageFile } from "utils/types";
export interface IBlogPostItem {
  id: string
  title: string
  date: string
  excerpt: string
  image: GatsbyImageFile
  slug: string
}

export interface IBlogPostItemSource {
  id: string
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    chapo: string
    date: string
    featuredImage: GatsbyImageFile
  }
}
