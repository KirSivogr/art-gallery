import { getVisiblePages } from 'src/utils/getVisiblePages';

import { ArrowButton, PageButton, PaginationWrapper } from './styled';

type PaginationProps = {
   currentPage: number;
   totalPages: number;
   handleChangePage: (page: number) => void;
};

export const Pagination = ({
   currentPage,
   totalPages,
   handleChangePage,
}: PaginationProps) => {
   const visiblePages = getVisiblePages(currentPage, totalPages);

   return (
      <PaginationWrapper>
         {currentPage > 1 && (
            <ArrowButton onClick={() => handleChangePage(currentPage - 1)}>
               &lt;
            </ArrowButton>
         )}
         {visiblePages.map((pageNumber: number, index) => (
            <PageButton
               key={index}
               onClick={() => (pageNumber === -1 ? null : handleChangePage(pageNumber))}
               active={pageNumber === currentPage}
            >
               {pageNumber === -1 ? '...' : pageNumber}
            </PageButton>
         ))}
         {currentPage < totalPages && (
            <ArrowButton onClick={() => handleChangePage(currentPage + 1)}>
               &gt;
            </ArrowButton>
         )}
      </PaginationWrapper>
   );
};
