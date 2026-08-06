// require('prismjs/themes/prism.css')
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
require('prismjs/themes/prism-solarizedlight.css')
import React from 'react'
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
)
