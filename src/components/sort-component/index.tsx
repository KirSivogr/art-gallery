import { ChangeEvent, Dispatch, memo, SetStateAction, useState } from 'react';
import { sortCards } from 'src/utils/sortCards';

import { ArtByIdWithImage, SortType } from '@/types/interfaces';

import { ArrowDown, SelectContainer, SelectWrapper, StyledSelect } from './styled';

type SortComponentProps = {
   data: ArtByIdWithImage[];
   setData: Dispatch<SetStateAction<ArtByIdWithImage[]>>;
};

export const SortComponent = memo(({ data, setData }: SortComponentProps) => {
   const [sortType, setSortType] = useState<SortType>('');

   const handleSort = (type: SortType) => {
      const sortedData = sortCards(data, type);

      setData(sortedData);
      setSortType(type);
   };

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      handleSort(event.target.value as SortType);
   };

   return (
      <SelectContainer>
         <SelectWrapper>
            <StyledSelect value={sortType} onChange={handleSelectChange}>
               <option value=''>Sorting by</option>
               <option value='A-Z'>Title by A-Z</option>
               <option value='Z-A'>Title by Z-A</option>
            </StyledSelect>
         </SelectWrapper>
         <ArrowDown />
      </SelectContainer>
   );
});
