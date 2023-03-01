import React, { FC } from 'react'
import cn from 'classnames'
import { css } from '@emotion/core'
import { breakpoints } from 'utils/styles'

interface ImageProps {
  alt?: string
  caption?: string
  className?: string
  isSmall?: boolean
  align?: 'left' | 'fit' | 'right'
}

const style = css({
  borderRadius: 4,
  border: 0,
  position: 'relative',
  marginBlock: 10,
  '.catption': {
    fontSize: '1rem',
    textAlign: 'center',
  },
  '> p': {
    margin: 0,
  },
  'img, .gatsby-resp-image-wrapper': {
    borderRadius: 4,
    overflow: 'hidden',
    display: 'block',
  },
  '&.left': {
    float: 'left',
    margin: '0 2em 2em 0',
  },
  '&.right ': {
    float: 'right',
    margin: '0 0 2em 2em',
  },
  '&.left, &.right': {
    width: '40%',
    top: '0.25em',
    img: {
      width: 'auto',
      //maxHeight: 450,
    },
  },
  '&.fit': {
    display: 'block',
    margin: ' 0 0 _size(element-margin) 0',
    width: '100%',
    img: {
      width: '100%',
    },
  },
  '&.small': {
    '& > *': {
      width: '75%',
      margin: '0 auto',
      [breakpoints.md]: {
        width: '50%',
      },
    }
  },
})

const Image: FC<ImageProps> = ({
  children,
  caption = '',
  align = 'fit',
  className = '',
  isSmall = false,
  ...props
}) => {
  return (
    <div css={style} className={cn('image box', className, align, { small: isSmall })} {...props}>
      {children}
      {caption && (
        <div className="caption">
          <em>{caption}</em>
        </div>
      )}
    </div>
  )
}

export default Image
