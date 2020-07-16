import { ITestimonialSource, ITestimonial, ITestimonialAvatarsSource } from './types'

export function mapTestimonials(
  nodes: ITestimonialSource[],
  locale: string,
  avatars: ITestimonialAvatarsSource[] = []
): ITestimonial[] {
  return nodes.map(testimonial => {
    let avatarImage = null
    if (testimonial.avatar) {
      avatarImage = avatars.find(avatar =>
        avatar.childImageSharp.fixed.src.includes(testimonial.avatar)
      )
    }

    return {
      author: testimonial.name,
      avatar: avatarImage?.childImageSharp.fixed ?? null,
      rating: testimonial.value,
      content: testimonial.content[locale],
      position: testimonial.position?.[locale] ?? '',
    }
  })
}
