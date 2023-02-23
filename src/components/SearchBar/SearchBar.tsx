import React, { FormEvent } from 'react'
import tw from 'twin.macro'
import { InstantSearch, SearchBox, useSearchBox } from 'react-instantsearch-hooks-web';
import { useIntl } from 'gatsby-plugin-intl';

interface Props {
  query: string,
  onQueryChange: (query: string) => void
  onSearch: () => void
}

const SearchBar = ({ query, onQueryChange, onSearch }: Props) => {
  const { formatMessage } = useIntl()
  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    onSearch()
  }
  return <form onSubmit={handleSearch} css={tw`w-full flex flex-col gap-4`}>
    <label css={tw`text-lg text-green-500 font-bold`} htmlFor="search">{formatMessage({id: 'search.searchbar.input.label'})}</label>
    <div css={tw`w-full flex items-center justify-center`} >
      <input id="search" css={tw`h-12 p-2 border-green-500 border-2 w-6/12`} type="text" value={query} onChange={(e) => onQueryChange(e.target.value)}></input>
      <button css={tw`bg-green-500 text-white p-2 h-12`} type="submit">{formatMessage({id: 'search.searchbar.button.label'})}</button>
    </div> 
  </form>
  
}

export default SearchBar