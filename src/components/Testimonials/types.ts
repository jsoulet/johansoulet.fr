import { FixedObject } from 'gatsby-image'

export interface ITestimonial {
  content: string
  author: string
  position: string
  rating: number
  avatar: FixedObject | null
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
    fixed: FixedObject
  }
}
