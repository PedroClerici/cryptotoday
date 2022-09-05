import React, { useState } from 'react';
import arrow from '../../../assets/arrow.svg';
import { vsCurrencyList, VsCurrency } from '../../../currencies/vsCurrency';

import './CurrencySelector.scss';

interface Props {
}

const CurrencySelector: React.FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentVsCurrency, setCurrentVsCurrency] = useState<VsCurrency>(
    vsCurrencyList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  );

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
        {`${currentVsCurrency.id.toUpperCase()} - ${currentVsCurrency.symbol}`}
        <img
          src={arrow}
          alt="arrow"
          style={isActive ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      <div
        className="currency-selector__content"
        style={{ display: isActive ? 'block' : 'none' }}
      >
        {vsCurrencyList.map((vsCurrency) => (
          <div
            key={vsCurrency.id}
            className="currency-selector__item"
            // tabIndex={0}
            aria-hidden="true"
            onClick={() => {
              setCurrentVsCurrency(vsCurrency);
              setIsActive(false);
            }}
          >
            {`${vsCurrency.id.toUpperCase()} - ${vsCurrency.symbol}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
