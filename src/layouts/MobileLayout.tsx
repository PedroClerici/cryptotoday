import React from 'react';

import Grid from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CryptoHeading from '../components/CryptoHeading';
import PriceCalculator from '../components/PriceCalculator';
import PriceChart from '../components/PriceChart';
import PopularCryptos from '../components/PopularCryptos';
import CryptoPriceInfo from '../components/CryptoPriceInfo';

const MobileLayout = (
  <Grid>
    <Header />
    <CryptoHeading />
    <PriceCalculator />
    <PriceChart />
    <CryptoPriceInfo />
    <PopularCryptos />
    <Footer />
  </Grid>
);

export default MobileLayout;
