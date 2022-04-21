import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from 'containers/WelcomePage';
import SignupPage from 'containers/SignupPage';
import LoginPage from 'containers/LoginPage';
import SettingsPage from 'containers/SettingsPage';
import { PATHS } from './constants';

const MainNavigation: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATHS.WELCOME_PAGE} element={<WelcomePage />} />
      <Route path={PATHS.SIGN_UP} element={<SignupPage />} />
      <Route path={PATHS.LOG_IN} element={<LoginPage />} />
      <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
    </Routes>
  </BrowserRouter>
);

export default MainNavigation;
