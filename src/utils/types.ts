import {IGatsbyImageData} from 'gatsby-plugin-image'

export interface GatsbyImageFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}