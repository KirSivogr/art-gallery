import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/MainPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
};
