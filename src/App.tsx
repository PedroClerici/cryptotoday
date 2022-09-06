import React from 'react';
import { useMediaQuery } from 'react-responsive';

import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return isMobile ? MobileLayout : DesktopLayout;
};

export default App;
