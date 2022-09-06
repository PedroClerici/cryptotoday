import React, { useContext, useState } from 'react';
import arrow from '../../../assets/arrow.svg';
import { UserContext } from '../../../context/userContext';
import { vsCurrencyList } from '../../../currencies/vsCurrency';

import './styles.scss';

const CurrencySelector = () => {
  const [isActive, setIsActive] = useState(false);
  const { vsCurrency, setVsCurrency } = useContext(UserContext);

  return (
    <div
      className="currency-selector"
    >
      <div
        className="currency-selector__button"
        role="option"
        aria-selected="true"
        aria-hidden="true"
        tabIndex={0}
        onClick={() => { setIsActive(!isActive); }}
      >
        {`${vsCurrency.id.toUpperCase()} - ${vsCurrency.symbol}`}
        <img
          src={arrow}
          alt="arrow"
          style={isActive ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      {isActive && (
        <div className="currency-selector__content">
          {vsCurrencyList.map((currency) => (
            <div
              key={currency.id}
              className="currency-selector__item"
              aria-hidden="true"
              onClick={() => {
                setVsCurrency(currency);
                setIsActive(false);
              }}
            >
              {`${currency.id.toUpperCase()} - ${currency.symbol}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
