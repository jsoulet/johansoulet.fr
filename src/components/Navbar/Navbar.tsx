import React, { FC, useEffect, useState } from 'react'
import { Link as IntlLink, useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import tw from 'twin.macro'

import AnimatedLogo from './AnimatedLogo'
import BurgerIcon from './BurgerIcon'
import CrossIcon from './CrossIcon'
import ToggleLocale from './ToggleLocale'
import { Ii18nLink } from './types'

const NavLink: FC<{ href: string; isLogo?: boolean; withIntl?: boolean }> = ({
  href,
  children,
  isLogo = false,
  withIntl = true,
}) => {
  const ComponentLink = withIntl ? IntlLink : Link
  return (
    <ComponentLink
      to={href}
      css={[
        tw`uppercase font-bold flex-grow-0 flex-shrink-0 relative px-4 py-2 leading-normal flex items-center hover:underline focus:underline active:underline`,
        isLogo && tw`md:text-xl`,
      ]}
    >
      {children}
    </ComponentLink>
  )
}

const FLOATING_MARGIN = 100

const Navbar: FC<{ i18nLinks?: Ii18nLink[]; hideToogleLocale?: boolean }> = ({
  i18nLinks,
  hideToogleLocale = false,
}) => {
  const [isFloating, setIsFloating] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { formatMessage } = useIntl()
  const toggleFloating = (): void => {
    if (window.scrollY >= FLOATING_MARGIN) {
      setIsFloating(true)
    }
    if (window.scrollY < FLOATING_MARGIN) {
      setIsFloating(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleFloating)
    return (): void => {
      window.removeEventListener('scroll', toggleFloating)
    }
  }, [])
  return (
    <nav
      css={[
        tw`bg-white shadow-lg md:shadow-none flex items-center w-full flex-col py-2 px-0 cursor-pointer`,
        tw`md:bg-transparent md:shadow-none items-stretch md:flex-row md:py-4 md:px-4`,
        /* eslint-disable prettier/prettier */
        isFloating &&
        css({
          position: 'fixed',
          top: -FLOATING_MARGIN,
          transform: `translateY(${FLOATING_MARGIN}px)`,
          transition: 'all 500ms ease',
          zIndex: 100,
        }),
        isFloating && tw`bg-white md:bg-white md:shadow-lg`,
        !isFloating &&
        isOpen &&
        css({
          position: 'fixed',
          top: 0,
          zIndex: 100,
          '&+*': {
            marginTop: 64,
          },
        }),
        /* eslint-enable prettier/prettier */
      ]}
    >
      <div css={[tw`flex flex-shrink-0 items-center flex-grow`]}>
        {/* <NavLink href="/" isLogo>
          Johan Soulet
        </NavLink> */}
        <Link to="/" title="Johan Soulet"><AnimatedLogo/></Link>
        {!hideToogleLocale && (
          <ToggleLocale i18nLinks={i18nLinks} css={[tw`flex-grow text-right px-4 py-2`]} />
        )}
        <button
          onClick={(): void => setIsOpen(!isOpen)}
          css={[tw`block md:hidden cursor-pointer ml-auto relative w-12 h-12 p-4`]}
          aria-label="menu"
        >
          {!isOpen && <BurgerIcon />}
          {isOpen && <CrossIcon />}
        </button>
      </div>
      <div
        css={[
          tw`w-full md:w-auto md:flex md:items-center md:flex-shrink-0 md:h-auto overflow-hidden`,
          !isOpen && tw`hidden md:flex`,
          isOpen && tw`md:relative mb-5 md:mb-0`,
        ]}
      >
        <div css={[tw`md:flex md:items-center md:justify-end ml-auto`]}>
          <NavLink href={formatMessage({ id: 'nav.about.link' })} withIntl={false}>
            {formatMessage({ id: 'nav.about' })}
          </NavLink>
          <NavLink href="/blog">{formatMessage({ id: 'nav.blog' })}</NavLink>
          <NavLink href="/case-studies">{formatMessage({ id: 'nav.caseStudies' })}</NavLink>
          <NavLink href="/#contact">{formatMessage({ id: 'nav.contact' })}</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
