import React, { FC } from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby-plugin-intl'

interface ButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  color?: 'green' | 'ghost'
  type?: 'submit' | 'reset' | 'button'
  to?: string
  href?: string
  isSmall?: boolean
  [key: string]: unknown
}

const Button: FC<ButtonProps> = ({ children, onClick, color, type = 'button', to, href, isSmall, ...props }) => {
  const css = [
    tw`inline-block cursor-pointer uppercase mx-auto hover:shadow-lg bg-white text-gray-800 font-bold rounded-full my-2 py-4 px-8 shadow-md transition duration-300 transform hover:-translate-y-px`,
    color === 'green' && tw`bg-green-500 hover:bg-green-600 text-white`,
    isSmall && tw`py-2 px-4 my-1`,
    color === 'ghost' && tw`bg-white text-gray-800 shadow-none hover:shadow-none px-2 py-0 my-0`,
  ]
  if (to) {
    return (
      <Link css={css} to={to} className="button" {...props} >
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        css={css}
        href={href}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} css={css} className="button" onClick={onClick} {...props} >
      {children}
    </button>
  )
}

export default Button
