/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Cryptocurrency, cryptocurrenciesList } from '../currencies/cryptocurrencies';
import { VsCurrency, vsCurrencyList } from '../currencies/vsCurrency';
import cryptoInfoService from '../services/cryptoInfoService';

type UserContextType = {
  cryptocurrency: Cryptocurrency
  setCryptocurrency: (newState: Cryptocurrency) => void
  vsCurrency: VsCurrency
  setVsCurrency: (newState: VsCurrency) => void
}

type UserContextProps = {
  children: React.ReactNode;
}

const defaultValue = {
  cryptocurrency: cryptocurrenciesList.find((cryptocurrency) => cryptocurrency.id === 'bitcoin')!,
  setCryptocurrency: () => {},
  vsCurrency: vsCurrencyList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  setVsCurrency: () => {},
};

export const UserContext = React.createContext<UserContextType>(defaultValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency>(
    defaultValue.cryptocurrency,
  );

  const [vsCurrency, setVsCurrency] = useState<VsCurrency>(
    defaultValue.vsCurrency,
  );

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cryptocurrency,
        setCryptocurrency,
        vsCurrency,
        setVsCurrency,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
