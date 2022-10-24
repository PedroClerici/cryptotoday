import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import SymbolTag from './SymbolTag';
import './styles.scss';

const CryptoHeading = () => {
  const { cryptocurrency } = useContext(UserContext);

  return (
    <div className="crypto-heading">
      <img
        className="crypto-heading__currency-icon"
        src={require(`/node_modules/cryptocurrency-icons/128/color/${cryptocurrency.symbol}.png`)}
        alt={`${cryptocurrency.id}-icon`}
      />
      <h1 className="crypto-heading__currency-name">
        {cryptocurrency.name}
      </h1>
      <SymbolTag />
    </div>
  );
};

export default CryptoHeading;
