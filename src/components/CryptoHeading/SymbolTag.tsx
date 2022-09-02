import React from 'react';
import { Cryptocurrency } from '../../currencies/cryptocurrencies';

import './SymbolTag.scss';

interface Props {
  cryptocurrency: Cryptocurrency
}

const SymbolTag: React.FC<Props> = (props) => (
  <div className="symbol-tag">
    <p className="symbol-tag__symbol">
      {props.cryptocurrency.symbol.toUpperCase()}
    </p>
  </div>
);

export default SymbolTag;
