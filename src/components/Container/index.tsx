import React, { FC } from 'react'
import { css } from '@emotion/react'
import { breakpoints } from 'utils/styles'

const styles = css({
  width: '100%',
  margin: '0 auto',
  padding: '0 20px',
  [breakpoints.sm]: {
    maxWidth: 640,
  },
  [breakpoints.md]: {
    maxWidth: 768,
  },
  [breakpoints.lg]: {
    maxWidth: 1024,
  },
  [breakpoints.xl]: {
    maxWidth: 1280,
  },
})

const Container: FC<{}> = ({ children, ...props }) => {
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  )
}

export default Container
