import { LENGTH_OF_TRUNCATE } from '@/constants/constants';

export const truncateString = (str: string | null) => {
   if (!str) {
      return;
   }

   if (str?.length <= LENGTH_OF_TRUNCATE) {
      return str;
   }

   return `${str?.slice(0, LENGTH_OF_TRUNCATE)}...`;
};
