import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { usePagination } from 'react-instantsearch-hooks-web';
import tw from 'twin.macro';
interface Props {
  totalPages: number,
  currentPage: number,
  onGoToPage: (page: number) => void,
}

const Pagination = ({ totalPages, currentPage, onGoToPage }: Props) => {
  const {formatMessage} = useIntl()
  
  return <div css={tw`flex gap-4 justify-center mt-4`}>
    <button
      css={tw`p-2`}
      onClick={() => onGoToPage(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label={formatMessage({id: 'search.pagination.previousPage'})}
    ><MdArrowBackIosNew /></button>
    <span css={tw`flex items-center`}>
      {formatMessage({
        id: 'search.pagination.pages'},
        {
          current: currentPage,
          total: totalPages
        }
      )}
    </span>
    <button
      css={tw`p-2`}
      onClick={() => onGoToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label={formatMessage({id: 'search.pagination.nextPage'})}
    ><MdArrowForwardIos /></button>
  </div>
}

export default Pagination