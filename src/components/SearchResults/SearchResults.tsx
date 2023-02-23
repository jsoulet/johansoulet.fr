import React from 'react'
import tw from 'twin.macro'
import SearchItem, { Props as SearchItemProps } from './SearchItem'

interface Props {
  results: SearchItemProps[]
}
const SearchResults = ({ results }: Props) => {
  return <div css={tw`grid gap-6 gap-y-12 grid-cols-1 md:grid-cols-3`}>
    {results.map(result => {
      return <SearchItem {...result} key={result.id}/>
    })} 
  </div>
}

export default SearchResults