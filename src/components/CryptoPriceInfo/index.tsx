import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import './styles.scss';

const CryptoPriceData = () => {
  const {
    cryptocurrency,
    vsCurrency,
  } = useContext(UserContext);

  return (
    <div className="crypto-price-info">
      <h2 className="crypto-price-info__heading">
        {`${cryptocurrency.name} Price Info`}
      </h2>
      <p className="crypto-price-info__info">
        {
        `The price of ${cryptocurrency.name} is ${vsCurrency.symbol} ${cryptocurrency.current_price} per (${cryptocurrency.symbol.toUpperCase()} / ${vsCurrency.id.toUpperCase()}) 
        today with a current market cap of ${vsCurrency.symbol} ${cryptocurrency.market_cap} ${vsCurrency.id.toUpperCase()}. 
        ${cryptocurrency.name} is ${cryptocurrency.price_change_percentage_24h} in the last 24 hours. 
        It has a circulating supply of ${cryptocurrency.circulating_supply} ${vsCurrency.id.toUpperCase()}. 
        The lowest price of ${cryptocurrency.name} in 24 hours is 
        ${vsCurrency.symbol} ${cryptocurrency.low_24h} ${vsCurrency.id.toUpperCase()} 
        and the highest is ${vsCurrency.symbol} ${cryptocurrency.high_24h} ${vsCurrency.id.toUpperCase()}.`
        }
      </p>
    </div>
  );
};

export default CryptoPriceData;
