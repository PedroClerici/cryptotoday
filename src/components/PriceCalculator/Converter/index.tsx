/* eslint-disable no-return-assign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/userContext';
import { priceFormatter } from '../../../services/cryptoInfoService';

import './styles.scss';

const Converter = () => {
  const { cryptocurrency, vsCurrency } = useContext(UserContext);
  const [input, setInput] = useState<string>('');

  const inputChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(+target.value) || +target.value > 10e10) return;

    setInput(target.value);
  };

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
            onChange={inputChangeHandler}
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
        <span>
          {`${vsCurrency.id.toUpperCase()} ${vsCurrency.symbol}${priceFormatter(+input * +cryptocurrency.current_price.replace(',', ''))}`}
        </span>
      </div>
    </>
  );
};

export default Converter;
