import React, { FC } from 'react'
import { GlobalStyles } from 'twin.macro'
import Footer from 'components/Footer'
import Seo from 'components/Seo'
import Navbar, { Ii18nLink } from 'components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

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
  return (
    <>
      <Seo />
      <GlobalStyles />
      <div>
        <Navbar i18nLinks={i18nLinks} hideToogleLocale={hideToogleLocale} />
        <motion.main variants={layoutVariants} initial="hidden" animate="visible" exit="exit">
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
