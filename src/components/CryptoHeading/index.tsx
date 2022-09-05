/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import SymbolTag from './SymbolTag';

import './CryptoHeading.scss';

const CryptoHeading = () => {
  const { selectedCryptocurrency } = useContext(UserContext);

  return (
    <div className="crypto-heading">
      <img
        className="crypto-heading__currency-icon"
        src={require(`/node_modules/cryptocurrency-icons/128/color/${selectedCryptocurrency.symbol}.png`)}
        alt={`${selectedCryptocurrency.id}-icon`}
      />
      <h1 className="crypto-heading__currency-name">
        {selectedCryptocurrency.name}
      </h1>
      <SymbolTag />
    </div>
  );
};

export default CryptoHeading;
