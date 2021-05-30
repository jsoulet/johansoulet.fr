import React, { FC, ReactElement } from 'react'
import Section from 'components/Section'
import CSCard from './CSCard'
import { ICaseStudyCard } from './types'
import tw from 'twin.macro'
import {motion} from 'framer-motion'

const CaseStudies: FC<{
  caseStudies: ICaseStudyCard[]
  title?: string
  head?: ReactElement | string
  bottom?: ReactElement | string
}> = ({ caseStudies, head, title, bottom }) => {
  return (
    <Section title={title} head={head} bottom={bottom}>
      <motion.div css={tw`grid grid-cols-1 md:grid-cols-3 gap-8`}>
        {caseStudies.map(study => {
          return (
            <CSCard
              key={study.id}
              id={study.id}
              title={study.title}
              category={study.category}
              image={study.image}
              slug={study.slug}
            />
          )
        })}
      </motion.div>
    </Section>
  )
}

export default CaseStudies
