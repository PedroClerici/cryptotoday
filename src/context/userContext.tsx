/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Cryptocurrency, cryptocurrenciesList } from '../currencies/cryptocurrencies';
import { VsCurrency, vsCurrencyList } from '../currencies/vsCurrency';

type UserContextType = {
  selectedCryptocurrency: Cryptocurrency
  setSelectedCryptocurrency: (newState: Cryptocurrency) => void
  selectedVsCurrency: VsCurrency
  setSelectedVsCurrency: (newState: VsCurrency) => void
}

type UserContextProps = {
  children: React.ReactNode;
}

const defaultValue = {
  selectedCryptocurrency: cryptocurrenciesList.find((cryptocurrency) => cryptocurrency.id === 'ethereum')!,
  setSelectedCryptocurrency: () => {},
  selectedVsCurrency: vsCurrencyList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  setSelectedVsCurrency: () => {},
};

export const UserContext = React.createContext<UserContextType>(defaultValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState<Cryptocurrency>(
    defaultValue.selectedCryptocurrency,
  );

  const [selectedVsCurrency, setSelectedVsCurrency] = useState<VsCurrency>(
    defaultValue.selectedVsCurrency,
  );

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        selectedCryptocurrency,
        setSelectedCryptocurrency,
        selectedVsCurrency,
        setSelectedVsCurrency,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
