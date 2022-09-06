import React from 'react';

import Grid from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CryptoHeading from '../components/CryptoHeading';
import PriceCalculator from '../components/PriceCalculator';
import PriceChart from '../components/PriceChart';
import PopularCryptos from '../components/PopularCryptos';
import CryptoPriceData from '../components/CryptoPriceData';

const DesktopLayout = (
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

export default DesktopLayout;
