import React, { FC } from 'react'
import tw from 'twin.macro'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {GatsbyImageFile} from 'utils/types'

const Rating: FC<{ image: GatsbyImageFile; alt?: string }> = ({ image, alt = '' }) => {
  // @ts-ignore: getImage should accept GatsbyImageFile because it has the same shape as IGatsbyImageDataParent
  const avatar = getImage(image)
  if(!avatar) {
    return null
  }
  return <GatsbyImage image={avatar} css={tw`h-20 w-20 rounded-full object-cover`} alt={alt} />;
}

export default Rating
