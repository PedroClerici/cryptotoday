import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import LineChart from './LineChart';
import PrevTimeSelector from './PrevTimeSelector';
import './styles.scss';

const PriceChart = () => {
  const {
    vsCurrency,
    cryptocurrencyPrice,
    cryptocurrencyChangePercentage,
  } = useContext(UserContext);

  return (
    <div className="price-chart">
      <div className="price-chart__info">
        <p className="price-chart__price">
          {`${vsCurrency.symbol}${cryptocurrencyPrice}`}
        </p>
        <p
          className="price-chart__change-percentage"
          style={+cryptocurrencyChangePercentage > 0 ? { color: 'var(--green-color)' } : { color: 'var(--red-color)' }}
        >
          {`${cryptocurrencyChangePercentage}%`}
        </p>
      </div>
      <div className="price-chart__toolbar">
        <PrevTimeSelector />
        <span className="price-chart__vs-currency">
          {vsCurrency.id.toUpperCase()}
        </span>
      </div>
      <LineChart />
    </div>
  );
};

export default PriceChart;
