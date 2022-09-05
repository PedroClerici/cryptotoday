import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

import './SymbolTag.scss';

const SymbolTag = () => {
  const { selectedCryptocurrency } = useContext(UserContext);

  return (
    <div className="symbol-tag">
      <p className="symbol-tag__symbol">
        {selectedCryptocurrency.symbol.toUpperCase()}
      </p>
    </div>
  );
};

export default SymbolTag;
