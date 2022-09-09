import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserContextProvider } from './context/userContext';

import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';

const App = () => {
  // The query should match the computed value in 'src/styles/_mixins.scss' line 7.
  const isDesktop = useMediaQuery({ query: '(min-width: 50rem)' });

  return (
    <UserContextProvider>
      {isDesktop ? DesktopLayout : MobileLayout}
    </UserContextProvider>
  );
};

export default App;
