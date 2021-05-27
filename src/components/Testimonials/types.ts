import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImageFile } from 'utils/types'

export interface ITestimonial {
  content: string
  author: string
  position: string
  rating: number
  avatar?: GatsbyImageFile
}

export interface ITestimonialSource {
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

export interface ITestimonialAvatarsSource {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}
