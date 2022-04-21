import React from 'react';
import MobileSignupPage from './mobile';
/**
 * there will be simple HOC that return MobilePage or future DesktopPage
 * f.e.
 */
const DesktopSignupPage = null;
const isMobileDevice = () => true;

const SignupPage: React.FC = () => (isMobileDevice() ? <MobileSignupPage /> : DesktopSignupPage);

export default SignupPage;
