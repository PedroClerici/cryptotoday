import type {
  MarketData,
  MarketChart,
  CryptoInfo,
} from '../types/cryptoInfoServiceTypes';

const baseURL = 'https://api.coingecko.com/api/v3';

export const priceFormatter = (price: number) => price.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const amountFormatter = (amount: number) => {
  const units = ['K', 'M', 'B', 'T', 'Q'];
  const unit = Math.floor((amount / 1.0e+1).toFixed(0).toString().length);
  const r = unit % 3;
  const x = Math.abs(amount) / +`1.0e+${unit - r}`;

  return x.toFixed(1) + units[Math.floor(unit / 3) - 1];
};

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const percentageFormatter = (percentage: number) => {
  let formattedPercentage: string;

  formattedPercentage = formatter
    .format(percentage);

  if (percentage > 0) {
    formattedPercentage = `+${formattedPercentage}`;
  }

  return `${formattedPercentage}%`;
};

const getCryptoInfo = async (cryptoId: string, vsCurrencyId: string): Promise<CryptoInfo> => {
  const data = await fetch(`${baseURL}/coins/markets?vs_currency=${vsCurrencyId}&ids=${cryptoId}&sparkline=false`)
    .then((response) => response.json())
    .then((obj: [CryptoInfo]) => obj[0]);

  data.current_price = priceFormatter(+data.current_price);
  data.price_change_percentage_24h = percentageFormatter(+data.price_change_percentage_24h);
  data.circulating_supply = amountFormatter(+data.circulating_supply);
  data.high_24h = priceFormatter(+data.high_24h);
  data.low_24h = priceFormatter(+data.low_24h);
  data.market_cap = amountFormatter(+data.market_cap);
  data.total_volume = amountFormatter(+data.total_volume);

  return data;
};

const getMarketData = async (
  cryptoIds: string[],
  vsCurrencyId: string,
): Promise<MarketData> => {
  const data = await fetch(`${baseURL}/coins/markets?vs_currency=${vsCurrencyId}&ids=${cryptoIds.join()}&sparkline=false`)
    .then((response) => response.json());

  for (const cryptoData of data) {
    cryptoData.price_change_percentage_24h = (
      percentageFormatter(cryptoData.price_change_percentage_24h)
    );

    cryptoData.current_price = (priceFormatter(cryptoData.current_price));
  }

  return data;
};

const getMarketChart = async (
  cryptoId: string,
  vsCurrencyId: string,
  days: number,
  interval: 'daily' | 'hourly' = days === 1 ? 'hourly' : 'daily',
): Promise<MarketChart> => {
  const data = await fetch(`${baseURL}/coins/${cryptoId}/market_chart?vs_currency=${vsCurrencyId}&days=${days}&interval=${interval}`)
    .then((response) => response.json());

  const parsedData: MarketChart = [];
  for (const d of data.prices) {
    const timeAndPrice = { time: new Date(d[0]), price: d[1] };
    parsedData.push(timeAndPrice);
  }

  return parsedData;
};

const cryptoInfoService = {
  getCryptoInfo,
  getMarketData,
  getMarketChart,
};

export default cryptoInfoService;
