import { Footer } from '@components/footer';
import { FavoritesPageContent } from '@components/page-content/favorites-page-content';

import { Header } from '@/components/header';

import { GlobalStyles } from './styled';

export const FavoritesPage = () => {
   return (
      <>
         <GlobalStyles />
         <Header isMainPage={false} />
         <FavoritesPageContent />
         <Footer />
      </>
   );
};
