import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from 'containers/WelcomePage';
import { PATHS } from './constants';

const MainNavigation: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATHS.WELCOME_PAGE} element={<WelcomePage />} />
    </Routes>
  </BrowserRouter>
);

export default MainNavigation;
