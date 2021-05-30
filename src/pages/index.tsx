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
  TestimonialSource,
} from 'components/Testimonials'
import ContactForm from 'components/ContactForm'
import Button from 'components/Button'
import Seo from 'components/Seo'
import { GatsbyImageFile } from 'utils/types'

export const pageQuery = graphql`
query IndexPage($locale: String!) {
  allTestimonialsJson(filter: {published: {eq: true}}) {
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
  testimonialAvatars: allFile(filter: {relativePath: {regex: "/testimonials//"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(height: 62, width: 62, quality: 80, layout: FIXED, placeholder: BLURRED)
      }
    }
  }
  blogPosts: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {lang: {eq: $locale}}}
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
            gatsbyImageData(
              height: 250
              width: 530
              quality: 50
              transformOptions: {fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
        chapo
      }
    }
  }
  studies: allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {fileAbsolutePath: {regex: "/content/studies/"}, frontmatter: {lang: {eq: $locale}}}
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
            gatsbyImageData(
              height: 600
              width: 600
              quality: 50
              transformOptions: {fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
  engineeringImage: file(relativePath: {regex: "/engineering/"}) {
    childImageSharp {
      gatsbyImageData(height: 150, quality: 80, layout: FIXED)
    }
  }
  projectImage: file(relativePath: {regex: "/project/"}) {
    childImageSharp {
      gatsbyImageData(height: 150, quality: 80, layout: FIXED)
    }
  }
  seoImage: file(relativePath: {regex: "/seo/"}) {
    childImageSharp {
      gatsbyImageData(height: 150, quality: 80, layout: FIXED)
    }
  }
  learnImage: file(relativePath: {regex: "/learn/"}) {
    childImageSharp {
      gatsbyImageData(height: 150, quality: 80, layout: FIXED)
    }
  }
}
`

const Index: FC<{
  data: {
    allTestimonialsJson: { nodes: TestimonialSource[] }
    testimonialAvatars: { nodes: GatsbyImageFile[] }
    blogPosts: { nodes: IBlogPostItemSource[] }
    studies: { nodes: ICaseStudySource[] }
    engineeringImage?: GatsbyImageFile
    projectImage?: GatsbyImageFile
    seoImage?: GatsbyImageFile
    learnImage?: GatsbyImageFile
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
      image,
    };
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
        bottom={
          <Button to="/case-studies">{formatMessage({ id: 'index.caseStudies.seeAllButtonLabel' })}</Button>
        }
      />
      <Testimonials
        title={formatMessage({ id: 'index.testimonials.title' })}
        testimonials={testimonials}
      />
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
