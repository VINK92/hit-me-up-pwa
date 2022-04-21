import React from 'react';
import MobileLoginPage from './mobile';
/**
 * there will be simple HOC that return MobilePage or future DesktopPage
 * f.e.
 */
const DesktopLoginPage = null;
const isMobileDevice = () => true;

const LoginPage: React.FC = () => (isMobileDevice() ? <MobileLoginPage /> : DesktopLoginPage);

export default LoginPage;
