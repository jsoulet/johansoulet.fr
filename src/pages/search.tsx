import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useHits, useSearchBox, useConfigure, usePagination } from 'react-instantsearch-hooks-web';
import { useIntl } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/PageHero'
import Seo from 'components/Seo'
import SearchBar from 'components/SearchBar'
import SearchResults from 'components/SearchResults'
import Section from 'components/Section'
import tw from 'twin.macro'
import Pagination from 'components/Pagination';


const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID || '',
  process.env.GATSBY_ALGOLIA_SEARCH_KEY || ''
);

const Search = () => {
  const { formatMessage } = useIntl()
  useConfigure({
    hitsPerPage: 12
  })
  const pagination = usePagination()
  const { query, refine } = useSearchBox();
  const { hits, results } = useHits<{
    objectID: string,
    date: string,
    category: string | null
    chapo: string | null,
    imageURL: string,
    lang: string,
    slug: string,
    title: string,
    excerpt: string,
  }>()
  return (
      <Layout>
        <Seo slug={'/search'} />
        <Hero>
          <SearchBar
            query={query}
            onQueryChange={refine}
            onSearch={() => refine(query)}
          />
          <span css={tw`text-sm mt-2 text-gray-600`}>{formatMessage({id: 'search.disclaimer'})}</span>
        </Hero>
        <div css={tw`min-h-screen`}>
          <Section head={query && formatMessage({id: 'search.searchbar.results'}, { numResults: results?.nbHits })}>
            {query && <div>
              <SearchResults results={hits.map(hit => ({
                ...hit,
                id: hit.objectID
              }))}></SearchResults>
              {pagination.canRefine && <Pagination
                totalPages={pagination.nbPages}
                currentPage={pagination.currentRefinement + 1}
                onGoToPage={(page: number) => pagination.refine(page - 1)}
              />}
            </div>}
          </Section>
        </div>
      </Layout>
  )
}

const SearchWrapper = () => {
  const { locale } = useIntl()
  return <InstantSearch searchClient={searchClient} indexName={`blogPosts-${locale}`} routing><Search /></InstantSearch>;
}

export default SearchWrapper
