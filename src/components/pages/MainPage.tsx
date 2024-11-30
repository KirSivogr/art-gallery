import { Footer } from '@components/footer';
import { HomePageContent } from '@components/page-content/home-page-content';

import { Header } from '@/components/header';

import { GlobalStyles } from './styled';

export const HomePage = () => {
   return (
      <>
         <GlobalStyles />
         <Header isMainPage />
         <HomePageContent />
         <Footer />
      </>
   );
};
