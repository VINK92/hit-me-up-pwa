import React from 'react';
import MobileSettingsPage from './mobile';
/**
 * there will be simple HOC that return MobilePage or future DesktopPage
 * f.e.
 */
const DesktopSettingsPage = null;
const isMobileDevice = () => true;

const SettingsPage: React.FC = () => (isMobileDevice() ? <MobileSettingsPage /> : DesktopSettingsPage);

export default SettingsPage;
