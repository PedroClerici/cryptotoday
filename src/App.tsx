import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserContext } from './context/userContext';
import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';

const App = () => {
  // The query should match the computed value in 'src/styles/_mixins.scss' line 7.
  const { setIsMobile, isMobile } = useContext(UserContext);

  setIsMobile(!useMediaQuery({ query: '(min-width: 50rem)' }));

  return (isMobile ? MobileLayout : DesktopLayout);
};

export default App;
