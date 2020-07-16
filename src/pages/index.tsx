import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/IndexHero'
import CardList from 'components/CardList'
import CaseStudies, { mapCaseStudies, ICaseStudySource } from 'components/CaseStudies'
import BlogPostList, { mapBlogPostList, IBlogPostItemSource } from 'components/BlogPostList'
import Testimonials, {
  mapTestimonials,
  ITestimonialSource,
  ITestimonialAvatarsSource,
} from 'components/Testimonials'
import ContactForm from 'components/ContactForm'
import Button from 'components/Button'
import Seo from 'components/Seo'
import { FixedObject } from 'gatsby-image'

export const pageQuery = graphql`
  query IndexPage($locale: String!) {
    allTestimonialsJson(filter: { published: { eq: true } }) {
      nodes {
        avatar
        content {
          en
          fr
        }
        position {
          en
          fr
        }
        name
        value
      }
    }
    testimonialAvatars: allFile(filter: { relativePath: { regex: "/testimonials//" } }) {
      nodes {
        childImageSharp {
          fixed(height: 62, width: 62, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    blogPosts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { lang: { eq: $locale } }
      }
      limit: 3
    ) {
      nodes {
        id
        excerpt(pruneLength: 225)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "D MMMM YYYY", locale: $locale)
          title
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 250, maxWidth: 530, fit: COVER, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          chapo
        }
      }
    }
    studies: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/content/studies/" }
        frontmatter: { lang: { eq: $locale } }
      }
      limit: 3
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          category
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600, fit: COVER, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    engineeringImage: file(relativePath: { regex: "/engineering/" }) {
      childImageSharp {
        fixed(height: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    projectImage: file(relativePath: { regex: "/project/" }) {
      childImageSharp {
        fixed(height: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    seoImage: file(relativePath: { regex: "/seo/" }) {
      childImageSharp {
        fixed(height: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    learnImage: file(relativePath: { regex: "/learn/" }) {
      childImageSharp {
        fixed(height: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

interface IFixedImage {
  childImageSharp: {
    fixed: FixedObject
  }
}

const Index: FC<{
  data: {
    allTestimonialsJson: { nodes: ITestimonialSource[] }
    testimonialAvatars: { nodes: ITestimonialAvatarsSource[] }
    blogPosts: { nodes: IBlogPostItemSource[] }
    studies: { nodes: ICaseStudySource[] }
    engineeringImage?: IFixedImage
    projectImage?: IFixedImage
    seoImage?: IFixedImage
    learnImage?: IFixedImage
  }
}> = ({ data }) => {
  const { formatMessage, locale } = useIntl()
  const serviceCards = [
    data?.engineeringImage,
    data?.projectImage,
    data?.seoImage,
    data?.learnImage,
  ].map((image, index) => {
    return {
      title: formatMessage({ id: `index.services.${index + 1}.title` }),
      content: formatMessage({ id: `index.services.${index + 1}.details` }),
      image: image?.childImageSharp.fixed,
    }
  })
  const testimonials = mapTestimonials(
    data?.allTestimonialsJson.nodes ?? [],
    locale,
    data.testimonialAvatars.nodes ?? []
  )
  const blogPosts = mapBlogPostList(data?.blogPosts.nodes ?? [])
  const caseStudies = mapCaseStudies(data?.studies.nodes ?? [])
  return (
    <Layout>
      <Seo slug={'/'} />
      <Hero />
      <CardList
        title={formatMessage({ id: 'index.services.title' })}
        head={formatMessage({ id: 'index.services.baseline' })}
        cards={serviceCards}
      />
      <CaseStudies
        title={formatMessage({ id: 'index.caseStudies.title' })}
        caseStudies={caseStudies}
      ></CaseStudies>
      <Testimonials
        title={formatMessage({ id: 'index.testimonials.title' })}
        testimonials={testimonials}
      ></Testimonials>
      <BlogPostList
        title={formatMessage({ id: 'index.posts.title' })}
        posts={blogPosts}
        bottom={
          <Button to="/blog">{formatMessage({ id: 'index.posts.seeAllButtonLabel' })}</Button>
        }
      />
      <ContactForm />
    </Layout>
  )
}

export default Index
