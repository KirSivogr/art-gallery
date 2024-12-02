import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArtCard } from '@components/cards-components/art-card';
import { CardInfoWithImg } from '@components/cards-components/card-info-with-image';
import { ErrorComponent } from '@components/error-component';
import { Pagination } from '@components/pagination';
import { SortComponent } from '@components/sort-component';
import { SubtitleBlock } from '@components/subtitle-block';
import { ErrorMessage, Formik } from 'formik';
import searchIconDefault from 'src/assets/searchIcon.svg';
import searchIconGreen from 'src/assets/searchIconGreen.svg';

import { useDebounce } from '@/hooks/useDebounce';
import { useGetArtList } from '@/hooks/useGetArtList';
import { useGetRecommendedArtList } from '@/hooks/useGetRecommendedArtList';

import { validationSchema } from './schema';
import {
   Container,
   EmptyList,
   Gallery,
   Input,
   RecommendedContainer,
   SearchButton,
   StyledForm,
   Title,
   TitleBlock,
   Wrapper,
} from './styled';

export const HomePageContent = () => {
   const [query, setQuery] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const { artList, isArtListLoading, totalPages, isArtListError, setArtList } =
      useGetArtList(query, currentPage);
   const { recommendedArtList, isRecArtListLoading, isRecommendedListError } =
      useGetRecommendedArtList();

   const navigate = useNavigate();

   const handleSearchDebounce = useDebounce((query: string) => {
      setQuery(query);
      setCurrentPage(1);
   }, 600);

   const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <Wrapper>
         <Container>
            <TitleBlock>
               <Title>
                  Let&apos;s Find Some <span>Art</span>
               </Title>
               <Title>Here!</Title>
            </TitleBlock>
            <Formik
               initialValues={{ searchQuery: '' }}
               validationSchema={validationSchema}
               onSubmit={(values, { resetForm }) => {
                  setQuery(values.searchQuery);
                  resetForm();
               }}
            >
               {({ handleSubmit, values, handleChange }) => (
                  <StyledForm onSubmit={handleSubmit}>
                     <StyledForm>
                        <Input
                           name='searchQuery'
                           placeholder='Search Art, Artist, Work...'
                           value={values.searchQuery}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                              handleChange(event);
                              handleSearchDebounce(event.target.value);
                           }}
                        />
                        <SearchButton
                           backgroundImageDefault={searchIconDefault}
                           backgroundImageGreen={searchIconGreen}
                           type='submit'
                        />
                     </StyledForm>
                     <ErrorMessage name='search' component='div' className='error' />
                  </StyledForm>
               )}
            </Formik>
            <SubtitleBlock
               infoTitle='Topics for you'
               infoSubtitle='Our special gallery'
            />
            <SortComponent data={artList} setData={setArtList} />
            {/* eslint-disable-next-line no-nested-ternary */}
            {isArtListError ? (
               <ErrorComponent />
            ) : artList.length ? (
               <Gallery>
                  {artList.map(art => (
                     <ArtCard
                        imageUrl={art.imageUrl}
                        title={art.title}
                        artist_title={art.artist_title}
                        key={art.id}
                        id={art.id}
                        isLoading={isArtListLoading}
                        onClick={() => navigate(`artinfo/${art.id}`, { replace: false })}
                     />
                  ))}
               </Gallery>
            ) : (
               <EmptyList>No results found</EmptyList>
            )}

            {!isArtListError && artList.length && (
               <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleChangePage={handleChangePage}
               />
            )}
            <SubtitleBlock
               infoTitle='Here some more'
               infoSubtitle='Other works for you'
            />
            {isRecommendedListError ? (
               <ErrorComponent />
            ) : (
               <RecommendedContainer>
                  <CardInfoWithImg
                     isFavoritePage={false}
                     recArtLists={recommendedArtList}
                     isLoading={isRecArtListLoading}
                  />
               </RecommendedContainer>
            )}
         </Container>
      </Wrapper>
   );
};
