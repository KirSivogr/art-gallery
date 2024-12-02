export const getVisiblePages = (currentPage: number, totalPages: number) => {
   if (currentPage < 4) {
      return [1, 2, 3, 4, -1, totalPages];
   }

   if (currentPage > totalPages - 3) {
      return [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
   }

   return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
};
