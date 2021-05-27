import { IBlogPostItemSource, IBlogPostItem } from './types'

export function mapBlogPostList(nodes: IBlogPostItemSource[]): IBlogPostItem[] {
  return nodes.map(post => {
    return {
      id: post.id,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.chapo || post.excerpt,
      date: post.frontmatter.date,
      slug: post.fields.slug,
      image: post.frontmatter.featuredImage,
    };
  });
}
