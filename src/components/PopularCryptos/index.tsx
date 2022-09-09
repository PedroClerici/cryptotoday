/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import cryptoInfoService from '../../services/cryptoInfoService';
import cryptocurrenciesList from '../../currencies/cryptocurrencies';

import CryptoCard from './CryptoCard';

import './styles.scss';

type PopularCryptoData = {
  name: string
  symbol: string
  price: number
  priceChangePercentage: number
}

const popularCryptosIds: string[] = [];
for (const cryptocurrency of cryptocurrenciesList.splice(0, 6)) {
  popularCryptosIds.push(cryptocurrency.id);
}

const getPopularCryptosData = (vsCurrencyId: string) => {
  const data: PopularCryptoData[] = [];

  cryptoInfoService.getMarketData(popularCryptosIds, vsCurrencyId)
    .then((marketData) => {
      for (const cryptoData of marketData) {
        const cryptoDataObject: PopularCryptoData = {
          name: cryptoData.name,
          symbol: cryptoData.symbol,
          price: cryptoData.current_price,
          priceChangePercentage: cryptoData.price_change_percentage_24h,
        };

        data.push(cryptoDataObject);
      }
    });

  return data;
};

const PopularCryptos = () => {
  const { vsCurrency } = useContext(UserContext);
  const [popularCryptosData, setPopularCryptosData] = useState<PopularCryptoData[]>(
    getPopularCryptosData(vsCurrency.id),
  );

  useEffect(() => {
    setPopularCryptosData(getPopularCryptosData(vsCurrency.id));
  }, [vsCurrency]);

  return (
    <div className="popular-cryptos">
      <h2>Popular Cryptos</h2>
      {popularCryptosData.map((cryptocurrency) => (
        <CryptoCard
          key={cryptocurrency.symbol}
          cryptocurrencyName={cryptocurrency.name}
          cryptocurrencySymbol={cryptocurrency.symbol}
          cryptocurrencyPrice={cryptocurrency.price}
          cryptocurrencyChangePercentage={cryptocurrency.priceChangePercentage}
        />
      ))}
    </div>
  );
};

export default PopularCryptos;
