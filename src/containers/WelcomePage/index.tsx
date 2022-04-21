import React from 'react';
import MobileWelcomePage from './mobile';
/**
 * there will be simple HOC that return MobilePage or future DesktopPage
 * f.e.
 */
const DesktopWelcomePage = null;
const isMobileDevice = () => true;

const WelcomePage: React.FC = () => (isMobileDevice() ? <MobileWelcomePage /> : DesktopWelcomePage);

export default WelcomePage;
