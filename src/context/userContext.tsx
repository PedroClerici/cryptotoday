/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import type { MarketChart, MarketData, CryptoInfo } from '../types/cryptoInfoServiceTypes';
import { cryptocurrenciesList } from '../currencies/cryptocurrencies';
import { VsCurrency, vsCurrenciesList } from '../currencies/vsCurrencies';
import cryptoInfoService from '../services/cryptoInfoService';

type UserContextType = {
  isMobile: boolean
  setIsMobile: (newState: boolean) => void
  cryptocurrency: CryptoInfo
  setCryptocurrency: (newState: CryptoInfo) => void
  prevDays: number
  setPrevDays: (newState: number) => void
  vsCurrency: VsCurrency
  setVsCurrency: (newState: VsCurrency) => void
  popularCryptosData: MarketData
  setPopularCryptosData: (newState: MarketData) => void
  marketChartData: MarketChart | null
  setMarketChartData: (newState: MarketChart | null) => void
}

type UserContextProps = {
  children: React.ReactNode;
}

const defaultValue = {
  isMobile: false,
  setIsMobile: () => {},
  cryptocurrency: {
    id: '',
    symbol: 'btc',
    name: '',
    current_price: '',
    price_change_percentage_24h: '',
    total_volume: '',
    high_24h: '',
    low_24h: '',
    circulating_supply: '',
    market_cap: '',
  },
  setCryptocurrency: () => {},
  prevDays: 1,
  setPrevDays: () => {},
  vsCurrency: vsCurrenciesList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  setVsCurrency: () => {},
  popularCryptosData: [],
  setPopularCryptosData: () => {},
  marketChartData: null,
  setMarketChartData: () => {},
};

export const UserContext = React.createContext<UserContextType>(defaultValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(defaultValue.isMobile);
  const [cryptocurrency, setCryptocurrency] = useState<CryptoInfo>(defaultValue.cryptocurrency);
  const [prevDays, setPrevDays] = useState<number>(defaultValue.prevDays);
  const [vsCurrency, setVsCurrency] = useState<VsCurrency>(defaultValue.vsCurrency);
  const [
    popularCryptosData,
    setPopularCryptosData,
  ] = useState<MarketData>(defaultValue.popularCryptosData);
  const [marketChartData, setMarketChartData] = useState<MarketChart | null>(null);

  useEffect(() => {
    cryptoInfoService.getCryptoInfo(cryptocurrency.id, vsCurrency.id)
      .then((data) => setCryptocurrency(data));
  }, [vsCurrency]);

  useEffect(() => {
    const popularCryptosIds: string[] = [];
    for (const crypto of cryptocurrenciesList.slice(0, 6)) {
      popularCryptosIds.push(crypto.id);
    }

    cryptoInfoService.getMarketData(popularCryptosIds, vsCurrency.id)
      .then((data) => setPopularCryptosData(data));

    setMarketChartData(null);
    cryptoInfoService.getMarketChart(cryptocurrency.id, vsCurrency.id, prevDays)
      .then((data) => setMarketChartData(data));
  }, [cryptocurrency, vsCurrency, prevDays]);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isMobile,
        setIsMobile,
        cryptocurrency,
        setCryptocurrency,
        prevDays,
        setPrevDays,
        vsCurrency,
        setVsCurrency,
        popularCryptosData,
        setPopularCryptosData,
        marketChartData,
        setMarketChartData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
