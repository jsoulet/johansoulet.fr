import { ITestimonialSource, ITestimonial } from './types'
import { GatsbyImageFile } from 'utils/types'

export function mapTestimonials(
  nodes: ITestimonialSource[],
  locale: string,
  avatars: GatsbyImageFile[] = []
): ITestimonial[] {
  return nodes.map(testimonial => {
    let avatarImage
    if (testimonial.avatar) {
      avatarImage = avatars.find(avatar =>
        avatar.childImageSharp.gatsbyImageData.images.fallback?.src.includes(testimonial.avatar)
      )
    }

    return {
      author: testimonial.name,
      avatar: avatarImage,
      rating: testimonial.value,
      content: testimonial.content[locale],
      position: testimonial.position?.[locale] ?? '',
    };
  });
}
