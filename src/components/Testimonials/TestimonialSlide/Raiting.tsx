import React, { FC, useMemo } from 'react'
import Star from 'assets/icons/Star'
import StarStroke from 'assets/icons/StarStroke'
import tw from 'twin.macro'

const MAX = 5
const MIN = 0
const Rating: FC<{ value: number }> = ({ value }) => {
  let boundedValue = value
  if (value > MAX) {
    boundedValue = MAX
  }
  if (value < MIN) {
    boundedValue = MIN
  }
  const filledHearts = useMemo<FC[]>(() => new Array(boundedValue).fill(''), [boundedValue])
  const emptyHearts = useMemo<FC[]>(() => new Array(MAX - boundedValue).fill(''), [boundedValue])
  return (
    <div css={tw`flex text-yellow-400 gap-1`} arla-label={`${boundedValue}/5`} >
      {filledHearts.map((e, index) => (
        <Star key={index} css={tw`h-6 w-6`} />
      ))}
      {emptyHearts.map((e, index) => (
        <StarStroke key={index} css={tw`h-6 w-6`} />
      ))}
    </div>
  )
}

export default Rating
