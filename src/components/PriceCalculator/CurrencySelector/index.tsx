import React, { useContext, useState } from 'react';
import arrow from '../../../assets/arrow.svg';
import { UserContext } from '../../../context/userContext';
import { vsCurrencyList } from '../../../currencies/vsCurrency';

import './CurrencySelector.scss';

interface Props {
}

const CurrencySelector: React.FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const { selectedVsCurrency, setSelectedVsCurrency } = useContext(UserContext);

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
        {`${selectedVsCurrency.id.toUpperCase()} - ${selectedVsCurrency.symbol}`}
        <img
          src={arrow}
          alt="arrow"
          style={isActive ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      {isActive && (
        <div className="currency-selector__content">
          {vsCurrencyList.map((vsCurrency) => (
            <div
              key={vsCurrency.id}
              className="currency-selector__item"
              aria-hidden="true"
              onClick={() => {
                setSelectedVsCurrency(vsCurrency);
                setIsActive(false);
              }}
            >
              {`${vsCurrency.id.toUpperCase()} - ${vsCurrency.symbol}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
