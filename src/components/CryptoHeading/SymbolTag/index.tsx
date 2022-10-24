import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import './styles.scss';

const SymbolTag = () => {
  const { cryptocurrency } = useContext(UserContext);

  return (
    <div className="symbol-tag">
      <p className="symbol-tag__symbol">
        {cryptocurrency.symbol.toUpperCase()}
      </p>
    </div>
  );
};

export default SymbolTag;
