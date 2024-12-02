import { useParams } from 'react-router-dom';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { InfoPageContent } from '@components/page-content/info-page-content';

import { useGetArtById } from '@/hooks/useGetArtById';

import { GlobalStyles } from './styled';

export const InfoPage = () => {
   const { id } = useParams();
   const { artData, isLoading, isError } = useGetArtById(id);

   return (
      <>
         <GlobalStyles />
         <Header isMainPage={false} />
         <InfoPageContent artData={artData} isLoading={isLoading} isError={isError} />
         <Footer />
      </>
   );
};
