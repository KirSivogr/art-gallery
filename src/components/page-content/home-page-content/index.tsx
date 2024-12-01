import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArtCard } from '@components/cards-components/art-card';
import { SubtitleBlock } from '@components/subtitle-block';
import { ErrorMessage, Formik } from 'formik';
import searchIconDefault from 'src/assets/searchIcon.svg';
import searchIconGreen from 'src/assets/searchIconGreen.svg';

import { useGetArtList } from '@/hooks/useGetArtList';

import { validationSchema } from './schema';
import {
   Container,
   Gallery,
   Input,
   SearchButton,
   StyledForm,
   Title,
   TitleBlock,
   Wrapper,
} from './styled';

export const HomePageContent = () => {
   const [query, setQuery] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const { artList, isArtListLoading, totalPages, isError, setArtList } = useGetArtList(
      query,
      currentPage,
   );
   const navigate = useNavigate();

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
                              // handleSearchDebounce(event.target.value);
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
         </Container>
      </Wrapper>
   );
};
