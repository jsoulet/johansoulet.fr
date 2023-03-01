import React, { FC } from 'react'
import tw from 'twin.macro'

interface HProps {
  customCss?: any[],
  children: React.ReactNode
}

export const H3: FC<HProps> = React.forwardRef<HTMLHeadingElement, HProps>(({ children, customCss = [] }, ref) => {
  return <h3 ref={ref} css={[tw`uppercase font-bold text-xl mb-2`, ...customCss]}>{children}</h3>
})

export const H2: FC<HProps> = React.forwardRef<HTMLHeadingElement, HProps>(({ children, customCss = [] }, ref) => {
  return <h2 ref={ref} css={[tw`font-bold uppercase text-4xl mb-5`, ...customCss]}>{children}</h2>
})

export const H1: FC<HProps> = React.forwardRef<HTMLHeadingElement, HProps>(({ children, customCss = [] }, ref) => {
  return <h1 ref={ref} css={[tw`font-bold uppercase text-4xl mb-5`, ...customCss]}>{children}</h1>
})
