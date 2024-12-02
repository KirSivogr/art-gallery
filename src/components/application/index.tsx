import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from '@components/pages/FavoritesPage';
import { InfoPage } from '@components/pages/InfoPage';
import { HomePage } from '@components/pages/MainPage';

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/artinfo/:id' element={<InfoPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
         </Routes>
      </BrowserRouter>
   );
};
