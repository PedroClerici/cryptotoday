import React from 'react';
import CurrencySelector from './CurrencySelector';
import Converter from './Converter';
import './styles.scss';

const PriceCalculator = () => (
  <div className="price-calculator">
    <h2>Price Calculator</h2>
    <CurrencySelector />
    <Converter />
  </div>
);

export default PriceCalculator;
