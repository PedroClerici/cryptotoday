/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

import './styles.scss';

const Converter = () => {
  const { selectedCryptocurrency, selectedVsCurrency } = useContext(UserContext);

  return (
    <>
      <div className="converter">
        Amount
        <div className="converter__input-container">
          <input
            type="text"
            className="converter__input"
            placeholder="0.00"
          />
          <div className="converter__cryptocurrency-tag">
            <img
              className="converter__cryptocurrency-icon"
              src={require(`/node_modules/cryptocurrency-icons/128/color/${selectedCryptocurrency.symbol}.png`)}
              alt={`${selectedCryptocurrency.id}-icon`}
            />
            {selectedCryptocurrency.symbol.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="total">
        Total
        <span>{`${selectedVsCurrency.id.toUpperCase()} ${selectedVsCurrency.symbol}0.00`}</span>
      </div>
    </>
  );
};

export default Converter;
