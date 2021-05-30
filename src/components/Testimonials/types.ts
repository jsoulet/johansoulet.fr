import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImageFile } from 'utils/types'

export interface Testimonial {
  content: string
  author: string
  position: string
  rating: number
  avatar?: GatsbyImageFile
}

export interface TestimonialSource {
  name: string
  avatar: string
  value: number
  content: {
    [key: string]: string
  }
  position: {
    [key: string]: string | null
  }
}
