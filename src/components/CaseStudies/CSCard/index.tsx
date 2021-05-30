import React, { FC } from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby-plugin-intl'
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { css } from '@emotion/core'
import { H3 } from 'components/Text'
import { motion } from 'framer-motion'

import { ICaseStudyCard } from '../types'
const AnimatedH3 = motion(H3)

const styles = {
  imageGradient : css({
    '&:before': {
      content: '" "',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.5) 80%)',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 10,
    },
  })
}

const cardVariants = {
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.95
  }
}

const titleVariants =  {
  hover : {
    display: 'none',
    transition: {
      duration: 0
    }
  }
}

const titleDetailsVariants =  {
  hover : {
    backgroundColor: '#FFF',
    height: 'initial',
    display: 'block',
  }
}

const CSCard: FC<ICaseStudyCard> = ({ title, image, category, slug }) => {
  // @ts-ignore: getImage accepts IGatsbyImageDataParent, which has the same shape as GatsbyImageFile
  const cover = getImage(image)
  return (<Link to={slug}>
    <motion.div
      css={
        tw`relative rounded-lg bg-white transition duration-300 flex flex-col justify-end overflow-hidden hover:shadow-md`
      }
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      variants={cardVariants}
    >
      {cover && <motion.div css={[tw`w-full  bg-transparent`]}>
          <GatsbyImage
            image={cover}
            css={[tw`object-cover`, styles.imageGradient]}
            alt="" />
        </motion.div>
      }
      <motion.div css={[tw`z-10 p-8 bg-transparent absolute bottom-0 left-0 right-0`]} variants={titleVariants}>
        <H3 customCss={[tw`text-white opacity-100 transition duration-300`]}>{title}</H3>
      </motion.div>
      <motion.div css={[tw`hidden p-8 h-0 bg-white absolute bottom-0 left-0 right-0 z-20`]} variants={titleDetailsVariants}>
        <AnimatedH3 customCss={[tw`text-black opacity-100 transition duration-300`]} >{title}</AnimatedH3>
        <motion.p css={[tw`text-gray-700 opacity-75 transition duration-300`]} >{category}</motion.p>
      </motion.div>
    </motion.div>
    </Link>
  );
}

export default CSCard
