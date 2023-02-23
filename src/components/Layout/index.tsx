import React, { FC } from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import Footer from 'components/Footer'
import Seo from 'components/Seo'
import Navbar, { Ii18nLink } from 'components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntl } from 'gatsby-plugin-intl'

const DURATION = 0.5
const layoutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION,
      delay: DURATION,
      when: "beforeChildren",
      staggerChildren: 0.2
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION },
  }

}

const Layout: FC<{ i18nLinks?: Array<Ii18nLink>; hideToogleLocale?: boolean }> = ({
  children,
  i18nLinks,
  hideToogleLocale,
}) => {
  const {formatMessage} = useIntl()
  return (
    <>
      <Seo />
      <GlobalStyles />
      <div>
        <a
          css={tw`transition left-0 bg-white border-2 border-green-600 text-green-600 absolute p-3 m-3 -translate-y-16 rounded uppercase font-bold opacity-0 focus:opacity-100`}
          href="#main">
          {formatMessage({ id: 'nav.goToContent' })}
        </a>
        <Navbar i18nLinks={i18nLinks} hideToogleLocale={hideToogleLocale} />
        <motion.main variants={layoutVariants} initial="hidden" animate="visible" exit="exit" id="main">
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

