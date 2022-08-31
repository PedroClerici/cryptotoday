import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import cryptoInfoService from './services/cryptoInfoService';
import './styles/globals/_index.scss';

import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import CryptoHeading from './components/CryptoHeading';
import PriceCalculator from './components/PriceCalculator';
import PriceChart from './components/PriceChart';
import PopularCryptos from './components/PopularCryptos';
import CryptoPriceData from './components/CryptoPriceData';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const defaultLayout = (
    <Grid>
      <Header />
      <main>
        <CryptoHeading />
        <PriceChart />
        <CryptoPriceData />
      </main>
      <aside>
        <PriceCalculator />
        <PopularCryptos />
      </aside>
      <Footer />
    </Grid>
  );

  const mobileLayout = (
    <Grid>
      <Header />
      <CryptoHeading />
      <PriceCalculator />
      <PriceChart />
      <PopularCryptos />
      <CryptoPriceData />
      <Footer />
    </Grid>
  );

  return isMobile ? mobileLayout : defaultLayout;
};

export default App;
