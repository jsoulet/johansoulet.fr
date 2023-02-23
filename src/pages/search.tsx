import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/PageHero'
import Seo from 'components/Seo'
import SearchBar from 'components/SearchBar'
import SearchResults from 'components/SearchResults'
import Section from 'components/Section'
import tw from 'twin.macro'

const Search = () => {
  const { formatMessage } = useIntl()
  const [query, setQuery] = useState('')
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window?.location.search || '');
    const { q } = Object.fromEntries(urlSearchParams.entries());
    setQuery(q)
  }, [])
  return (
    <Layout>
      <Seo slug={'/search'} />
      <Hero>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSearch={() => {
            console.log(query)
          }}
        />
      </Hero>
      <div css={tw`min-h-screen`}>
        <Section>
          <SearchResults></SearchResults>
        </Section>
      </div>
    </Layout>
  )
}

export default Search
