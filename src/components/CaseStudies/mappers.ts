import { ICaseStudySource, ICaseStudyCard } from './types'

export function mapCaseStudies(nodes: ICaseStudySource[]): ICaseStudyCard[] {
  return nodes.map(study => {
    return {
      id: study.id,
      title: study.frontmatter.title,
      category: study.frontmatter.category,
      slug: study.fields.slug,
      image: study.frontmatter.featuredImage,
    };
  });
}
