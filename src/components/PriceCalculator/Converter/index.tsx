/* eslint-disable no-return-assign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/userContext';
import cryptoInfoService from '../../../services/cryptoInfoService';

import './styles.scss';

const Converter = () => {
  const { cryptocurrency, vsCurrency } = useContext(UserContext);
  const [price, setPrice] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    cryptoInfoService.getPrice(cryptocurrency.id, vsCurrency.id)
      .then((res) => setPrice(res));
  }, [vsCurrency, cryptocurrency]);

  return (
    <>
      <div className="converter">
        Amount
        <div className="converter__input-container">
          <input
            type="text"
            className="converter__input"
            placeholder="0.00"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="converter__cryptocurrency-tag">
            <img
              className="converter__cryptocurrency-icon"
              src={require(`/node_modules/cryptocurrency-icons/128/color/${cryptocurrency.symbol}.png`)}
              alt={`${cryptocurrency.id}-icon`}
            />
            {cryptocurrency.symbol.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="total">
        Total
        <span>{`${vsCurrency.id.toUpperCase()} ${vsCurrency.symbol}${(+input * price).toLocaleString('en-US')}`}</span>
      </div>
    </>
  );
};

export default Converter;
