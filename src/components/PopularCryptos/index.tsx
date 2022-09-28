import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import CryptoCard from './CryptoCard';

import './styles.scss';

const PopularCryptos = () => {
  const { popularCryptosData } = useContext(UserContext);

  return (
    <div className="popular-cryptos">
      <h2>Popular Cryptos</h2>
      {popularCryptosData.map((cryptocurrency) => (
        <CryptoCard
          key={cryptocurrency.symbol}
          cryptocurrencyId={cryptocurrency.id}
          cryptocurrencyName={cryptocurrency.name}
          cryptocurrencySymbol={cryptocurrency.symbol}
          cryptocurrencyPrice={cryptocurrency.current_price}
          cryptocurrencyChangePercentage={cryptocurrency.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default PopularCryptos;
