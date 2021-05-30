import React, { FC } from 'react'
import Card from './Card'
import Section, { backgroundColors as SectionBackgrounds } from 'components/Section'
import Row from 'components/Row'
import { ICard } from './types'
import tw from 'twin.macro'

const CardList: FC<{
  cards: ICard[]
  title: string
  head: string
}> = ({ cards = [], title, head }) => {
  return (
    <Section backgroundColor={SectionBackgrounds.gray} title={title} head={head}>
      <div css={tw`grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-8`}>
        {cards.map(({ title, content, image }, index) => {
          return <Card key={index} title={title} content={content} image={image} />
        })}
      </div>
    </Section>
  )
}

export default CardList
