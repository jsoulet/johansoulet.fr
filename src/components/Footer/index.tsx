import React, { FC } from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import Container from 'components/Container'
import { useIntl } from 'gatsby-plugin-intl'
import Github from 'assets/icons/Github'
import Twitter from 'assets/icons/Twitter'
import Malt from 'assets/icons/Malt'
import Rss from 'assets/icons/Rss'

const SocialLink: FC<{ href: string; label: string }> = ({ href, label, children }) => {
  return (
    <a
      css={[tw`w-5 w-5 text-white mx-3 hover:text-gray-400`]}
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const Footer: FC<{}> = () => {
  const { formatMessage } = useIntl()
  return (
    <footer css={[tw`text-center bg-gray-900 text-white py-24 text-sm`]}>
      <Container>
        <p css={[tw`mb-5`]}>
          <Link css={[tw`underline`]} to={formatMessage({ id: 'footer.terms.link' })} >
            {formatMessage({ id: 'footer.terms.label' })}
          </Link>{' '}
          - © Johan Soulet
        </p>
        <p aria-label={formatMessage({ id: 'footer.madeWithLove.a11y' })}>{formatMessage({ id: 'footer.madeWithLove' })}</p>
        <p css={[tw`flex items-center justify-center mt-5`]}>
          <SocialLink label="Github" href="https://github.com/jsoulet">
            <Github />
          </SocialLink>
          <SocialLink label="Twitter" href="https://twitter.com/johansoulet">
            <Twitter />
          </SocialLink>
          <SocialLink label="Malt" href="https://www.malt.fr/profile/johansoulet">
            <Malt />
          </SocialLink>
          <SocialLink label={formatMessage({ id: 'footer.rss.label' })} href={formatMessage({ id: 'footer.rss.link' })}>
            <Rss />
          </SocialLink>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
