import { TestimonialSource, Testimonial } from './types'
import { GatsbyImageFile } from 'utils/types'

export function mapTestimonials(
  nodes: TestimonialSource[],
  locale: string,
  avatars: GatsbyImageFile[] = []
): Testimonial[] {
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
