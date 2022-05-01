import React from 'react';
import MobileWordPage from './mobile';
/**
 * there will be simple HOC that return MobilePage or future DesktopPage
 * f.e.
 */
const DesktopWordPage = null;
const isMobileDevice = () => true;

const WordPage: React.FC = () => (isMobileDevice() ? <MobileWordPage /> : DesktopWordPage);

export default WordPage;
