import React, { FC, ReactElement } from 'react'
import Section, { backgroundColors } from 'components/Section'
import Slider from 'react-slick'
import TestimonialSlide from './TestimonialSlide'
import { css } from '@emotion/core'
import { ITestimonial } from './types'

const style = css({
  '.slick-track': {
    display: 'flex',
    alignItems: 'center',
  },
})

const settings = {
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
}

const Testimonials: FC<{
  testimonials: ITestimonial[]
  title?: string
  head?: string | ReactElement
}> = ({ testimonials, title, head }) => {
  return (
    <Section title={title} head={head} backgroundColor={backgroundColors.gray}>
      <Slider css={style} {...settings}>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialSlide
              key={index}
              author={testimonial.author}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              content={testimonial.content}
              position={testimonial.position}
            />
          )
        })}
      </Slider>
    </Section>
  )
}

export default Testimonials
