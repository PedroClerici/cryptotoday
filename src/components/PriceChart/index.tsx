import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import LineChart from './LineChart';
import PrevTimeSelector from './PrevTimeSelector';
import './styles.scss';

const PriceChart = () => {
  const { vsCurrency } = useContext(UserContext);

  return (
    <div className="price-chart">
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
