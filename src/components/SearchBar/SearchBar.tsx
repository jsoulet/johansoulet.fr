import React, { FormEvent } from 'react'
import tw from 'twin.macro'

interface Props {
  query: string,
  onQueryChange: (query: string) => void
  onSearch: () => void
}

const SearchBar = ({ query, onQueryChange, onSearch }: Props) => {
  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    onSearch()
  }
  return <form css={tw`w-full flex items-center justify-center`} onSubmit={handleSearch}>
    <input css={tw`h-12 p-2 border-green-500 border-2 w-6/12`} type="text" value={query} onChange={(e) => onQueryChange(e.target.value)}></input>
    <button css={tw`bg-green-500 text-white p-2 h-12`} type="submit">Search</button>
  </form> 
}

export default SearchBar